# Cookbook Hearts — shared "want to try" hearts

One small Google Apps Script in your Google account. Both phones send their
hearts to it, so you each see the other's.

## Set up (once, about 5 minutes, easiest on a computer)

1. Go to <https://script.google.com> → **New project**. Name it *Cookbook Hearts*.
2. Replace everything in `Code.gs` with this folder's [`Code.gs`](Code.gs). Save.
3. **Deploy → New deployment** → click the gear → **Web app**.
   *Execute as:* **Me**. *Who has access:* **Anyone**. → **Deploy**.
   Google asks for permission. It warns the app isn't verified; it's your own
   script: **Advanced → Go to Cookbook Hearts**.
4. Copy the **Web app URL** (it ends in `/exec`).
5. On each phone: open Cookbook → tap **⋯** (top right) → type your name →
   paste the link into **Sync link** → **Save**.

That's it. Hearts sync when the app opens, every minute while it's open,
and right after you tap one.

## Good to know

- The link is the only key. Anyone who has it could change your hearts, so
  just share it between your two phones.
- Hearts tapped before you connect, or while offline, are kept on the phone
  and sent the next time it can reach the script.
- If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit →
  New version** so the link stays the same.
- To wipe all hearts: pick `clearHearts` in the function menu → **Run**.
