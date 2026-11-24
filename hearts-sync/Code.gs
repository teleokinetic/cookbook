/* Cookbook Hearts — keeps both phones' "want to try" hearts in step.

   Each phone POSTs {who, ops:[{recipe, on, at}]} and gets the full list back:
     {hearts: {"caldo-verde": [{who:"Tanner", at:1732480000000}], ...}}
   A GET returns the same list without changing anything.

   The list lives in this script's own storage (Script Properties) in your
   Google account. Nothing else is read or written, so Google only asks for
   permission to run the script as a web app.

   Setup: see README.md in this folder. */

const KEY = 'hearts';
const ID_OK = /^[a-z0-9-]{1,60}$/;

function doGet() {
  return json_({ hearts: read_() });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const who = String(body.who || '').trim().slice(0, 24);
    const hearts = read_();
    if (who && Array.isArray(body.ops)) {
      body.ops.slice(0, 200).forEach(function (op) {
        const id = String(op && op.recipe || '');
        if (!ID_OK.test(id)) return;
        const at = Number(op.at) || Date.now();
        const list = (hearts[id] || []).filter(function (w) { return w.who.toLowerCase() !== who.toLowerCase(); });
        if (op.on) list.unshift({ who: who, at: at });
        if (list.length) hearts[id] = list; else delete hearts[id];
      });
      PropertiesService.getScriptProperties().setProperty(KEY, JSON.stringify(hearts));
    }
    return json_({ hearts: hearts });
  } finally {
    lock.releaseLock();
  }
}

function read_() {
  const s = PropertiesService.getScriptProperties().getProperty(KEY);
  try { return s ? JSON.parse(s) : {}; } catch (err) { return {}; }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* Optional: Run ▸ clearHearts to start over. */
function clearHearts() {
  PropertiesService.getScriptProperties().deleteProperty(KEY);
}
