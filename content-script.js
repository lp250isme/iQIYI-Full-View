// Guard against multiple injections
if (!window.__iqiyiInlineFsLoaded) {
  window.__iqiyiInlineFsLoaded = true;

  console.log("[iqiyi-inline-fs] content script loaded v2");

  const ROOT_CLASS = "iqiyi-inline-fullscreen";
  const ROOT_ATTR = "data-iq-inline-root";
  const CLEARED_ATTR = "data-iq-inline-cleared";

  let activeRoot = null;
  let clearedAncestors = [];

  const isEditableTarget = (target) => {
    if (!target) return false;
    if (target.isContentEditable) return true;
    const tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  };

  const findPlayerRoot = () => {
    const playerContainer = document.querySelector(
      ".iqp-player-g, [data-player-hook='container'], .iqp-player-pc"
    );
    if (playerContainer) return playerContainer;

    const flashbox = document.getElementById("flashbox");
    if (flashbox) return flashbox;

    const selectors = ["#intl-video-wrap", ".intl-video-wrap", ".intl-video-area"];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) return el;
    }

    return document.querySelector("video");
  };

  const clearAncestorTransforms = (el) => {
    const cleared = [];
    let parent = el.parentElement;
    while (parent && parent !== document.documentElement) {
      const cs = getComputedStyle(parent);
      if (
        cs.transform !== "none" ||
        cs.willChange.includes("transform") ||
        cs.willChange.includes("width") ||
        cs.contain !== "none"
      ) {
        parent.setAttribute(CLEARED_ATTR, "");
        cleared.push(parent);
      }
      parent = parent.parentElement;
    }
    return cleared;
  };

  const enableInlineFullscreen = () => {
    if (document.documentElement.classList.contains(ROOT_CLASS)) return;

    const root = findPlayerRoot();
    if (!root) {
      console.warn("[iqiyi-inline-fs] no player root found");
      return;
    }

    activeRoot = root;
    activeRoot.setAttribute(ROOT_ATTR, "");
    clearedAncestors = clearAncestorTransforms(activeRoot);
    document.documentElement.classList.add(ROOT_CLASS);
    console.log("[iqiyi-inline-fs] enabled on", activeRoot.tagName, activeRoot.className);
  };

  const disableInlineFullscreen = () => {
    if (!document.documentElement.classList.contains(ROOT_CLASS)) return;

    document.documentElement.classList.remove(ROOT_CLASS);
    if (activeRoot) {
      activeRoot.removeAttribute(ROOT_ATTR);
      activeRoot = null;
    }
    for (const el of clearedAncestors) {
      el.removeAttribute(CLEARED_ATTR);
    }
    clearedAncestors = [];
  };

  const toggleInlineFullscreen = () => {
    if (document.documentElement.classList.contains(ROOT_CLASS)) {
      // SPA episode switch can replace the player DOM while active —
      // the old root is detached so full view is visually broken.
      // Pressing F then means "make it full view again", not "exit".
      if (activeRoot && !activeRoot.isConnected) {
        disableInlineFullscreen();
        enableInlineFullscreen();
        return;
      }
      disableInlineFullscreen();
    } else {
      enableInlineFullscreen();
    }
  };

  // Keyboard shortcut: F to toggle, Escape to exit (capture phase)
  // Uses event.code (physical key) so it works regardless of input method
  // (e.g. Zhuyin/Bopomofo where F produces "ㄑ" via event.key)
  document.addEventListener(
    "keydown",
    (event) => {
      if (isEditableTarget(event.target)) return;

      if (event.code === "Escape") {
        disableInlineFullscreen();
        return;
      }

      if (event.code === "KeyF" && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        event.stopPropagation();
        toggleInlineFullscreen();
      }
    },
    true
  );
}
