<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/lp250isme/iQIYI-Full-View@main/promo/icon-dark.png">
    <img src="https://cdn.jsdelivr.net/gh/lp250isme/iQIYI-Full-View@main/promo/icon.png" width="92" alt="iQIYI Full View">
  </picture>
</p>

<h1 align="center">iQIYI Full View — 愛奇藝頁內滿版</h1>

<p align="center">
  🎬 Press <b>F</b> to expand the iQIYI player to fill the window — no native fullscreen, keep your tabs.<br>
  🎬 按 <b>F</b> 把愛奇藝播放器放大到整個視窗，不用進系統全螢幕，分頁照樣看得到。
</p>

<p align="center">
  <a href="https://go.kvcc.me/ifv"><b>⬇️ Add to Chrome / 加到 Chrome</b></a>
  &nbsp;·&nbsp; <a href="#english">English</a> | <a href="#繁體中文">繁體中文</a>
</p>

---

## English

iQIYI's web player only offers **native browser fullscreen** — which hides your tabs, bookmarks bar, and taskbar, and kicks you out the moment you switch apps. **iQIYI Full View** adds a smarter middle ground: an **in-page fullscreen** that blows the video up to fill the *browser window* while keeping everything else exactly where it is. One tap of `F` and you're immersed; one tap of `Esc` and you're back. 🍿

### ✨ Features

- ⌨️ **One key** — `F` toggles in-page fullscreen, `Esc` exits. That's the whole interface.
- 🖥️ **Fills the window, not the screen** — your tabs, bookmarks, and system taskbar stay visible. Great for second-screen / multitasking.
- 🪟 **Survives tricky layouts** — clears ancestor `transform` / `contain` CSS that normally breaks fixed positioning, hides the sidebar, and locks page scroll so nothing peeks through.
- 🎞️ **Both iQIYI sites** — works on the international **iq.com** and the China **iqiyi.com**.
- 🌐 **Bilingual** — UI follows your browser language (English / 繁體中文).
- 🔒 **Zero data collected** — no tracking, no accounts, no servers. Everything runs locally.
- 🪶 **Featherweight** — Manifest V3, `scripting` permission only, no remote code.

### 🎯 Why it exists

Watching a drama while keeping an eye on chat, docs, or another tab? Native fullscreen makes that miserable — it eats the whole screen and breaks the moment you `Alt-Tab`. In-page fullscreen gives you a big, comfortable picture **inside** the browser you're already using. No mode-switching, no lost context.

### ⌨️ Shortcuts

| Key | Action |
| :-: | :----- |
| <kbd>F</kbd> | Toggle in-page fullscreen |
| <kbd>Esc</kbd> | Exit |

### 📦 Install

- **🟢 Chrome Web Store (recommended)** — **[Add to Chrome →](https://go.kvcc.me/ifv)**
  Works on any Chromium browser: Chrome, Edge, Brave, Arc, Vivaldi.
- **🛠️ Manual (for development)**
  1. Clone or download this repository
  2. Open `chrome://extensions/` and turn on **Developer mode**
  3. Click **Load unpacked** and select the project folder

### ⚙️ How it works

A content script + CSS are injected into iQIYI pages. When you press `F`, it:

1. 🔎 Locates the video player container
2. 📐 Applies `position: fixed` at full viewport size
3. 🧹 Clears ancestor `transform` / `contain` properties that would break fixed positioning
4. 🙈 Hides the sidebar and locks page scroll

No background polling, no network calls — it only acts when you press the key.

### ❓ FAQ

- **Is this the same as the browser's fullscreen?** No — that's the point. This stays *inside* the browser window, so your tabs and taskbar remain visible.
- **Does it collect any data?** None. See [PRIVACY.md](PRIVACY.md). 🔒
- **It's not working on a video page.** Make sure you're on an `iq.com` / `iqiyi.com` **video** page, then reload the tab once after installing.
- **Which browsers?** Any Chromium-based browser (Chrome, Edge, Brave, Arc, Vivaldi).

### 🔒 Privacy

No data is collected, stored, or transmitted — it all runs locally in your browser. Full policy: [PRIVACY.md](PRIVACY.md).

### 🧰 More by kv

Part of the **[kvcc.me](https://kvcc.me)** toolbox — more small, sharp web tools over there.

### 📄 License

MIT

---

## 繁體中文

愛奇藝的網頁播放器只給你**瀏覽器原生全螢幕**——會把分頁、書籤列、工作列全部蓋掉，而且一切換到別的視窗就直接跳出來。**iQIYI Full View** 提供一個更聰明的折衷：**頁內全螢幕**，把影片放大到填滿**瀏覽器視窗**，其他東西原封不動。按一下 `F` 沉浸觀看，按一下 `Esc` 回到原狀。🍿

### ✨ 功能

- ⌨️ **一個鍵** — `F` 切換頁內全螢幕、`Esc` 退出，介面就這麼簡單。
- 🖥️ **填滿視窗，不是整個螢幕** — 分頁、書籤、系統工作列都還在，適合一邊看一邊做事。
- 🪟 **應付難搞的版面** — 清掉祖先元素那些會破壞 fixed 定位的 `transform` / `contain`、隱藏側欄、鎖住頁面捲動，不會有東西露出來。
- 🎞️ **兩個愛奇藝站都支援** — 國際版 **iq.com** 與中國版 **iqiyi.com**。
- 🌐 **雙語** — 介面跟著瀏覽器語言（English / 繁體中文）。
- 🔒 **完全不收集資料** — 不追蹤、不需帳號、不連伺服器，一切都在本機執行。
- 🪶 **極輕量** — Manifest V3、僅用 `scripting` 權限、無遠端程式碼。

### 🎯 為什麼做這個

一邊追劇、一邊盯著聊天視窗或文件？原生全螢幕很痛苦——它佔滿整個螢幕，而且你一 `Alt-Tab` 就跳出來。頁內全螢幕讓你在**正在用的瀏覽器裡**就有一個又大又舒服的畫面，不用切換模式、不會失去上下文。

### ⌨️ 快捷鍵

| 按鍵 | 動作 |
| :-: | :--- |
| <kbd>F</kbd> | 切換頁內全螢幕 |
| <kbd>Esc</kbd> | 退出 |

### 📦 安裝

- **🟢 Chrome 線上應用程式商店（推薦）** — **[加到 Chrome →](https://go.kvcc.me/ifv)**
  支援所有 Chromium 瀏覽器：Chrome、Edge、Brave、Arc、Vivaldi。
- **🛠️ 手動安裝（開發用）**
  1. Clone 或下載此 repo
  2. 開 `chrome://extensions/`，開啟**開發人員模式**
  3. 點**載入未封裝項目**，選擇專案資料夾

### ⚙️ 運作原理

擴充功能會在愛奇藝頁面注入 content script 與 CSS。按下 `F` 時：

1. 🔎 定位影片播放器容器
2. 📐 套用 `position: fixed` 撐滿整個視窗
3. 🧹 清掉祖先元素會破壞 fixed 定位的 `transform` / `contain` 屬性
4. 🙈 隱藏側欄並鎖住頁面捲動

沒有背景輪詢、沒有網路請求——只有在你按鍵時才動作。

### ❓ 常見問題

- **這跟瀏覽器的全螢幕一樣嗎？** 不一樣，這正是重點。它停在**瀏覽器視窗內**，分頁和工作列都還看得到。
- **會收集資料嗎？** 完全不會，詳見 [PRIVACY.md](PRIVACY.md)。🔒
- **在影片頁沒反應？** 確認你在 `iq.com` / `iqiyi.com` 的**影片**頁面，安裝後把分頁重新整理一次。
- **支援哪些瀏覽器？** 任何 Chromium 核心的瀏覽器（Chrome、Edge、Brave、Arc、Vivaldi）。

### 🔒 隱私

不收集、不儲存、不傳送任何資料——全部在你的瀏覽器本機執行。完整政策：[PRIVACY.md](PRIVACY.md)。

### 🧰 更多作品

這是 **[kvcc.me](https://kvcc.me)** 工具箱的一員，那裡還有更多小而精的網頁工具。

### 📄 授權

MIT
