/* Cookbook — app logic. Plain JS, no build step. */
(() => {
"use strict";

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const byId = Object.fromEntries(R.map((r) => [r.id, r]));
const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const mins = (t) => { const h = /(\d+)\s*hr/.exec(t), m = /(\d+)\s*min/.exec(t); return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0); };

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (_) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} }
};

const HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4 7.5 4c2 0 3.5 1.1 4.5 2.6C13 5.1 14.5 4 16.5 4c3.6 0 5.9 3.6 4.7 7.1-1.7 4.8-9.2 9.4-9.2 9.4z"/></svg>';
const BACK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>';
const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const CHEV = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

/* ---------------- hearts ----------------
   mine:    recipe ids this phone has hearted
   remote:  last list from the sync script, {recipeId: [{who, at}]}
   pending: toggles not yet sent, [{recipe, on, at}]                         */
let mine = new Set(store.get("cb-mine", []));
let remote = store.get("cb-remote", {});
let pending = store.get("cb-pending", []);
let me = store.get("cb-me", "");
let syncUrl = store.get("cb-sync", "");
let lastSync = store.get("cb-last-sync", 0);
let syncing = false;

const saveHearts = () => { store.set("cb-mine", [...mine]); store.set("cb-remote", remote); store.set("cb-pending", pending); };
const sameName = (a, b) => a && b && a.trim().toLowerCase() === b.trim().toLowerCase();

function whoWants(id) {
  const others = (remote[id] || []).filter((w) => !sameName(w.who, me)).map((w) => w.who);
  return mine.has(id) ? [me || "You", ...others] : others;
}
function wantedIds() {
  const ids = new Set([...mine, ...Object.keys(remote).filter((id) => whoWants(id).length)]);
  return [...ids].filter((id) => byId[id]).sort((a, b) => whoWants(b).length - whoWants(a).length || latest(b) - latest(a));
}
function latest(id) { return Math.max(0, ...(remote[id] || []).map((w) => w.at || 0)); }

function toggleHeart(id) {
  const on = !mine.has(id);
  on ? mine.add(id) : mine.delete(id);
  pending = pending.filter((p) => p.recipe !== id);
  pending.push({ recipe: id, on, at: Date.now() });
  saveHearts();
  refresh();
  if (syncUrl && !me) openSettings("Add your name so the other phone knows whose heart it is.");
  sync();
}

async function sync() {
  if (!syncUrl || !me || syncing || !navigator.onLine) return;
  syncing = true;
  const sent = pending.slice();
  try {
    const res = await fetch(syncUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },   // simple request: no CORS preflight
      body: JSON.stringify({ who: me, ops: sent }),
      redirect: "follow"
    });
    const data = await res.json();
    if (!data || typeof data.hearts !== "object") throw new Error("bad reply");
    const before = JSON.stringify([remote, [...mine].sort()]);
    remote = data.hearts;
    pending = pending.filter((p) => !sent.includes(p));
    // what the server says is mine, plus anything tapped while this request was out
    mine = new Set(Object.keys(remote).filter((id) => (remote[id] || []).some((w) => sameName(w.who, me))));
    pending.forEach((p) => (p.on ? mine.add(p.recipe) : mine.delete(p.recipe)));
    lastSync = Date.now(); store.set("cb-last-sync", lastSync);
    saveHearts(); setStatus();
    if (JSON.stringify([remote, [...mine].sort()]) !== before) refresh();
  } catch (_) {
    setStatus("Couldn't reach the sync link. Hearts are saved on this phone and will send next time.", true);
  } finally { syncing = false; }
}

/* ---------------- ingredient checks (kept 12 hours, so a reload mid-cook keeps them) ---------------- */
const CHECK_TTL = 12 * 3600 * 1000;
let checks = store.get("cb-checks", {});
for (const id in checks) if (Date.now() - (checks[id].at || 0) > CHECK_TTL) delete checks[id];
store.set("cb-checks", checks);

/* ---------------- avatars ---------------- */
const AV = ["#F4C9B8", "#C9DCCF", "#CFD8EC", "#EBD3E3", "#EADBB4", "#D7DDB5"];
function avatar(name) {
  let h = 0; for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return `<span class="av" style="background:${AV[h % AV.length]}" title="${esc(name)}">${esc((name.trim()[0] || "?").toUpperCase())}</span>`;
}
const avatars = (names) => names.length ? `<span class="who" aria-label="${esc(names.join(" and "))} want to try this">${names.map(avatar).join("")}</span>` : "";

/* ---------------- cards ---------------- */
function card(r, big) {
  const wants = whoWants(r.id);
  if (big) {
    return `<a class="card big c-${r.cat}" href="#/r/${r.id}">
      ${avatars(wants)}
      <span class="nm">${esc(r.name)}</span>
      <span class="mt"><span class="led">${esc(r.p.toUpperCase())}</span><span>${esc(r.time)}</span><span>${esc(r.protein)}</span></span>
    </a>`;
  }
  return `<a class="card c-${r.cat}" href="#/r/${r.id}">
    ${wants.length ? `<span class="hrt" aria-label="On your list">${HEART}</span>` : ""}
    <span class="nm">${esc(r.name)}</span>
    <span class="mt">${esc(r.time)} · ${esc(r.protein)}</span>
  </a>`;
}

/* ---------------- home ---------------- */
let maxTime = 0, query = "";
const fits = (r) => !maxTime || mins(r.time) <= maxTime;
function matches(r) {
  if (!query) return true;
  const hay = fold([r.name, r.blurb, r.protein, CATS[r.cat].label, ...r.ing].join(" "));
  return fold(query).split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
}

function renderHome() {
  const body = $("#home-body");
  if (query) {
    const hits = R.filter((r) => fits(r) && matches(r));
    body.innerHTML = `<div class="wrap sec">
      <div class="sec-head"><h2>${hits.length ? `${hits.length} recipe${hits.length === 1 ? "" : "s"}` : "No matches"}</h2></div>
      ${hits.length ? `<div class="results">${hits.map((r) => card(r)).join("")}</div>` : `<p class="empty">Nothing with “${esc(query)}”${maxTime ? " in that time" : ""}. Try an ingredient, like chickpeas or kale.</p>`}
    </div>`;
    return;
  }
  const wanted = wantedIds().map((id) => byId[id]).filter(fits);
  let html = "";
  if (wanted.length) {
    html += `<section class="sec" aria-labelledby="h-want"><div class="wrap sec-head">
        <h2 id="h-want">On your list <span class="n">${wanted.length}</span></h2>
        ${wanted.length > 1 ? `<a class="see" href="#/want">See all</a>` : ""}
      </div>
      <div class="row-wrap"><div class="row">${wanted.map((r) => card(r, true)).join("")}</div></div></section>`;
  }
  for (const c of ORDER) {
    const list = R.filter((r) => r.cat === c && fits(r));
    if (!list.length) continue;
    html += `<section class="sec c-${c}" aria-labelledby="h-${c}"><div class="wrap sec-head">
        <h2 id="h-${c}">${esc(CATS[c].label)} <span class="n">${list.length}</span></h2>
        <a class="see" href="#/c/${c}">See all</a>
      </div>
      <div class="row-wrap"><div class="row">${list.map((r) => card(r)).join("")}</div></div></section>`;
  }
  if (!html) html = `<div class="wrap"><p class="empty">Nothing that quick here. Try “≤ 1 hr”.</p></div>`;
  body.innerHTML = html;
}

$("#basics").innerHTML = BASICS.map(([b, t]) => `<li><b>${esc(b)}</b> ${esc(t)}</li>`).join("");

$("#time").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  maxTime = +b.dataset.t;
  document.querySelectorAll("#time button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  renderHome();
});
$("#search-btn").addEventListener("click", () => {
  const row = $("#search-row"), open = row.hidden;
  row.hidden = !open;
  $("#search-btn").setAttribute("aria-expanded", String(open));
  if (open) $("#q").focus(); else { $("#q").value = ""; query = ""; renderHome(); }
});
$("#q").addEventListener("input", (e) => { query = e.target.value.trim(); renderHome(); });
$("#q").addEventListener("keydown", (e) => { if (e.key === "Enter") e.target.blur(); });

/* ---------------- list (category or "want") ---------------- */
function renderList(kind) {
  const isWant = kind === "want";
  const list = isWant ? wantedIds().map((id) => byId[id]) : R.filter((r) => r.cat === kind);
  const title = isWant ? "On your list" : CATS[kind].label;
  const el = $("#list");
  el.className = `view ${isWant ? "" : "c-" + kind}`;
  el.innerHTML = `<div class="bar"><div class="wrap bar-in"><button type="button" class="back" data-back>${BACK}All recipes</button></div></div>
    <div class="wrap">
      <h1 class="list-h">${esc(title)}<span class="n">${list.length}</span></h1>
      ${list.length ? `<div class="results">${list.map((r) => card(r)).join("")}</div>` : `<p class="empty">Nothing on your list yet. Tap the heart on any recipe.</p>`}
    </div>`;
}

/* ---------------- recipe ---------------- */
function nextOf(r) {
  const inCat = R.filter((x) => x.cat === r.cat), i = inCat.indexOf(r);
  if (i < inCat.length - 1) return { r: inCat[i + 1], label: `Next in ${CATS[r.cat].label.toLowerCase()}` };
  const nc = ORDER[(ORDER.indexOf(r.cat) + 1) % ORDER.length];
  return { r: R.find((x) => x.cat === nc), label: `Next: ${CATS[nc].label.toLowerCase()}` };
}

function renderRecipe(r) {
  const el = $("#recipe");
  const wants = whoWants(r.id);
  const done = (checks[r.id] && checks[r.id].i) || {};
  const nx = nextOf(r);
  const store_ = r.keeps ? ["Keeps", r.keeps] : ["Freezes", r.freeze];
  el.className = `view c-${r.cat}`;
  el.innerHTML = `
  <header class="hero">
    <div class="wrap bar-in">
      <button type="button" class="back" data-back>${BACK}${esc(CATS[r.cat].label)}</button>
      <button type="button" class="icon-btn" id="r-heart" aria-pressed="${mine.has(r.id)}" aria-label="Want to try">${HEART}</button>
    </div>
    <div class="wrap hero-in">
      <div class="kicker">${esc(CATS[r.cat].label)}</div>
      <h1>${esc(r.name)}</h1>
      <p class="blurb">${esc(r.blurb)}</p>
      ${wants.length ? `<div class="who">${wants.map(avatar).join("")}<span class="who-l">${esc(wants.join(" & "))} want${wants.length === 1 && wants[0] !== "You" ? "s" : ""} to try this</span></div>` : ""}
    </div>
  </header>
  <div class="wrap r-body">
    <div class="facts">
      <div><div class="k">Total</div><div class="v">${esc(r.time)}</div></div>
      <div><div class="k">Protein</div><div class="v">${esc(r.protein)}</div></div>
      <div><div class="k">${store_[0]}</div><div class="v">${esc(store_[1])}</div></div>
      <div><div class="k">${/^(Oven|Stovetop)/.test(r.p) ? "Cook" : "Pressure"}</div><div class="pv">${r.p.split(", then ").map((s) => esc(s.toUpperCase())).join("<br>then ")}</div></div>
    </div>
    <div class="r-grid">
      <details class="acc" open>
        <summary><span>Ingredients<span class="n">${r.ing.length}</span></span>${CHEV}</summary>
        <ul class="ing">${r.ing.map((t, i) => `<li><label><input type="checkbox" data-i="${i}"${done[i] ? " checked" : ""}><span>${esc(t)}</span></label></li>`).join("")}</ul>
        <button type="button" class="clear" id="clear-checks"${Object.keys(done).length ? "" : " hidden"}>Clear checks</button>
      </details>
      <div>
        <details class="acc" open>
          <summary><span>Steps<span class="n">${r.steps.length}</span></span>${CHEV}</summary>
          ${r.sub ? `<div class="sub-r"><h3>${esc(r.sub.title)}</h3><span class="led">${esc(r.sub.p.toUpperCase())}</span><ol class="steps">${r.sub.steps.map((s) => `<li><span>${esc(s)}</span></li>`).join("")}</ol></div>` : ""}
          <ol class="steps">${r.steps.map((s) => `<li><span>${esc(s)}</span></li>`).join("")}</ol>
          ${r.tip ? `<p class="tip"><b>Tip:</b> ${esc(r.tip)}</p>` : ""}
        </details>
      </div>
    </div>
  </div>
  <a class="next" href="#/r/${nx.r.id}"><span><span class="l">${esc(nx.label)}</span><span class="t">${esc(nx.r.name)}</span></span>${ARROW}</a>`;

  $("#r-heart").addEventListener("click", () => toggleHeart(r.id));
  el.querySelector(".ing").addEventListener("change", (e) => {
    const i = e.target.dataset.i; if (i == null) return;
    const c = checks[r.id] || { i: {}, at: 0 };
    e.target.checked ? (c.i[i] = 1) : delete c.i[i];
    c.at = Date.now(); checks[r.id] = c; store.set("cb-checks", checks);
    $("#clear-checks").hidden = !Object.keys(c.i).length;
  });
  $("#clear-checks").addEventListener("click", () => {
    delete checks[r.id]; store.set("cb-checks", checks);
    el.querySelectorAll(".ing input").forEach((x) => (x.checked = false));
    $("#clear-checks").hidden = true;
  });
}

/* ---------------- routing ---------------- */
const stack = [location.hash.replace(/^#\/?/, "")];   // in-app history, so Back only uses history.back() when it stays in the app
const scrolls = {};
let current = "";

function route() {
  const h = location.hash.replace(/^#\/?/, "");
  const [kind, arg] = h.split("/");
  scrolls[current] = window.scrollY;
  const views = { home: $("#home"), list: $("#list"), recipe: $("#recipe") };
  let show = "home";
  if (kind === "r" && byId[arg]) { renderRecipe(byId[arg]); show = "recipe"; }
  else if (kind === "c" && CATS[arg]) { renderList(arg); show = "list"; }
  else if (kind === "want") { renderList("want"); show = "list"; }
  for (const [k, v] of Object.entries(views)) {
    v.hidden = k !== show;
    v.classList.toggle("enter", k === show && show !== "home");
  }
  document.title = show === "recipe" ? `${byId[arg].name} · Cookbook` : "Cookbook · Fall & Winter";
  current = h;
  window.scrollTo(0, show === "home" ? (scrolls[""] || 0) : 0);
}
window.addEventListener("hashchange", () => {
  const h = location.hash.replace(/^#\/?/, "");
  if (stack.length > 1 && stack[stack.length - 2] === h) stack.pop(); else stack.push(h);
  route();
});
document.addEventListener("click", (e) => {
  if (!e.target.closest("[data-back]")) return;
  if (stack.length > 1) history.back(); else location.hash = "#/";
});

function refresh() {
  renderHome();
  const h = location.hash.replace(/^#\/?/, ""), [kind, arg] = h.split("/");
  if (kind === "want") renderList("want");
  if (kind === "c" && CATS[arg]) renderList(arg);
  if (kind === "r" && byId[arg]) {
    const b = $("#r-heart"); if (b) b.setAttribute("aria-pressed", String(mine.has(arg)));
    const y = window.scrollY; renderRecipe(byId[arg]); window.scrollTo(0, y);
  }
}

/* ---------------- settings ---------------- */
const dlg = $("#settings");
function setStatus(msg, bad) {
  const s = $("#sync-status");
  if (msg) { s.textContent = msg; s.classList.toggle("bad", !!bad); return; }
  s.classList.remove("bad");
  if (!syncUrl) s.textContent = "Not connected. Hearts stay on this phone.";
  else if (!me) s.textContent = "Add your name to start syncing.";
  else if (lastSync) s.textContent = `Synced ${ago(lastSync)}.`;
  else s.textContent = "Connected. Not synced yet.";
}
function ago(t) {
  const m = Math.round((Date.now() - t) / 60000);
  return m < 1 ? "just now" : m < 60 ? `${m} min ago` : m < 1440 ? `${Math.round(m / 60)} hr ago` : `${Math.round(m / 1440)} days ago`;
}
function openSettings(msg) {
  $("#me").value = me; $("#sync").value = syncUrl;
  setStatus(msg);
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
}
function saveSettings() {
  const url = $("#sync").value.trim(), name = $("#me").value.trim();
  if (url && !/^https:\/\/script\.google(usercontent)?\.com\//.test(url)) { setStatus("That link should start with https://script.google.com/", true); return false; }
  const changed = url !== syncUrl || name !== me;
  me = name; syncUrl = url;
  store.set("cb-me", me); store.set("cb-sync", syncUrl);
  if (changed && syncUrl && me) {
    // first connect: send every local heart so nothing tapped before linking is lost
    mine.forEach((id) => { if (!pending.some((p) => p.recipe === id)) pending.push({ recipe: id, on: true, at: Date.now() }); });
    saveHearts();
  }
  return true;
}
$("#settings-btn").addEventListener("click", () => openSettings());
$("#save-set").addEventListener("click", async () => {
  if (!saveSettings()) return;
  if (syncUrl && me) { setStatus("Syncing…"); await sync(); if (!$("#sync-status").classList.contains("bad")) dlg.close(); }
  else dlg.close();
});
$("#sync-now").addEventListener("click", async () => {
  if (!saveSettings()) return;
  if (!syncUrl || !me) { setStatus(); return; }
  setStatus("Syncing…"); await sync();
});
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

/* ---------------- start ---------------- */
renderHome();
route();
sync();
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") sync(); });
window.addEventListener("online", sync);
setInterval(() => { if (document.visibilityState === "visible") sync(); }, 60000);

if ("serviceWorker" in navigator && location.protocol === "https:") {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
})();
