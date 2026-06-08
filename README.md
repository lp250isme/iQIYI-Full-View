<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/lp250isme/iQIYI-Full-View@main/promo/icon-dark.png">
    <img src="https://cdn.jsdelivr.net/gh/lp250isme/iQIYI-Full-View@main/promo/icon.png" width="88" alt="iQIYI Full View">
  </picture>
</p>

# iQIYI Full View — 愛奇藝頁內滿版

Press **F** to expand the iQIYI player to fill the window — no native fullscreen, keep your tabs.
按 **F** 把愛奇藝播放器放大到整個視窗，不用進系統全螢幕，分頁照樣看得到。

[English](#english) | [繁體中文](#繁體中文)

🔗 **[Add to Chrome →](https://go.kvcc.me/ifv)** · Chrome Web Store

---

## English

A Chrome extension that adds an **in-page fullscreen** mode to iQIYI ([iq.com](https://www.iq.com) / [iqiyi.com](https://www.iqiyi.com)) video pages. The player expands to fill the entire browser viewport **without** entering the browser's native fullscreen — so your tabs, bookmarks bar, and system taskbar stay visible.

### Features

- **One key** — press `F` to toggle, `Esc` to exit
- **Fills the viewport**, not the whole screen — stay in your normal browser chrome
- Works on both `iq.com` and `iqiyi.com`
- Bilingual UI (English / 繁體中文, follows the browser language)
- **Zero data collected** — everything runs locally

### Usage

1. Open any video on [iq.com](https://www.iq.com) or [iqiyi.com](https://www.iqiyi.com)
2. Press **F** to toggle in-page fullscreen
3. Press **Escape** to exit

### Install

- **Chrome Web Store** — **[Add to Chrome →](https://go.kvcc.me/ifv)**
- **Manual (for development)** — clone this repo → open `chrome://extensions/` → enable **Developer mode** → **Load unpacked** → select the project folder

### How it works

A content script + CSS are injected into iQIYI pages. On `F`, it locates the player container, applies `position: fixed` at full viewport size, clears ancestor `transform` / `contain` properties that would otherwise break fixed positioning, hides the sidebar, and locks page scroll. Manifest V3, `scripting` permission only, no remote code.

### Privacy

No data is collected, stored, or transmitted — it all runs locally in your browser. See [PRIVACY.md](PRIVACY.md).

### More by kv

Part of the [kvcc.me](https://kvcc.me) toolbox — more small, sharp web tools over there.

### License

MIT

---

## 繁體中文

一個 Chrome 擴充功能，為愛奇藝（[iq.com](https://www.iq.com) / [iqiyi.com](https://www.iqiyi.com)）影片頁面加上**頁內全螢幕**模式。播放器會放大到填滿整個瀏覽器視窗，但**不進入**系統原生全螢幕——所以你的分頁、書籤列、系統工作列都還看得到。

### 功能

- **一個鍵** — 按 `F` 切換、`Esc` 退出
- **填滿視窗**而非整個螢幕——維持你習慣的瀏覽器介面
- `iq.com` 與 `iqiyi.com` 都支援
- 雙語介面（English / 繁體中文，跟著瀏覽器語言走）
- **完全不收集資料**——一切都在本機執行

### 使用方式

1. 在 [iq.com](https://www.iq.com) 或 [iqiyi.com](https://www.iqiyi.com) 打開任一影片
2. 按 **F** 切換頁內全螢幕
3. 按 **Escape** 退出

### 安裝

- **Chrome 線上應用程式商店** — **[加到 Chrome →](https://go.kvcc.me/ifv)**
- **手動安裝（開發用）** — clone 此 repo → 開 `chrome://extensions/` → 開啟**開發人員模式** → **載入未封裝項目** → 選專案資料夾

### 運作原理

擴充功能會在愛奇藝頁面注入 content script 與 CSS。按下 `F` 時：定位播放器容器、套用 `position: fixed` 撐滿視窗、清掉祖先元素會破壞 fixed 定位的 `transform` / `contain` 屬性、隱藏側欄並鎖住頁面捲動。Manifest V3、僅用 `scripting` 權限、無遠端程式碼。

### 隱私

不收集、不儲存、不傳送任何資料——全部在你的瀏覽器本機執行。詳見 [PRIVACY.md](PRIVACY.md)。

### 更多作品

這是 [kvcc.me](https://kvcc.me) 工具箱的一員，那裡還有更多小而精的網頁工具。

### 授權

MIT
