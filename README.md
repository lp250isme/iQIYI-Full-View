# iQIYI Full View

A Chrome extension that adds in-page fullscreen mode to iQIYI (iq.com / iqiyi.com) video pages.

## Why

iQIYI's web player lacks a convenient in-page fullscreen option. This extension lets you expand the video player to fill the entire browser viewport without entering the browser's native fullscreen — so you keep your tabs, bookmarks bar, and system taskbar visible.

## Usage

1. Open any video on [iq.com](https://www.iq.com) or [iqiyi.com](https://www.iqiyi.com)
2. Press **F** to toggle in-page fullscreen
3. Press **Escape** to exit

## Install

### Chrome Web Store

*(Coming soon)*

### Manual

1. Clone or download this repository
2. Open `chrome://extensions/` and enable **Developer mode**
3. Click **Load unpacked** and select the project folder

## How It Works

The extension injects a content script and CSS into iQIYI pages. When you press F, it:

1. Locates the video player container
2. Applies `position: fixed` with full viewport dimensions
3. Clears ancestor CSS `transform` / `contain` properties that would break fixed positioning
4. Hides the sidebar and locks page scroll

No data is collected or transmitted. Everything runs locally in your browser.

## Privacy

This extension collects no user data. See [PRIVACY.md](PRIVACY.md) for details.

## License

MIT
