const IQ_MATCHES = [
  "*://iq.com/*",
  "*://*.iq.com/*",
  "*://iqiyi.com/*",
  "*://*.iqiyi.com/*",
];

const MAIN_SCRIPT_ID = "iqiyi-inline-fs-main";

// Register the MAIN-world content script programmatically.
// Declarative content_scripts with "world":"MAIN" has a known Chrome bug
// where the script silently runs in ISOLATED world instead.
async function ensureMainWorldScript() {
  const existing = await chrome.scripting.getRegisteredContentScripts({
    ids: [MAIN_SCRIPT_ID],
  });
  if (existing.length > 0) return;

  await chrome.scripting.registerContentScripts([
    {
      id: MAIN_SCRIPT_ID,
      matches: IQ_MATCHES,
      js: ["content-script.js"],
      runAt: "document_idle",
      world: "MAIN",
    },
  ]);
}

ensureMainWorldScript();
