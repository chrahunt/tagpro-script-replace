# TagPro global-game Replace

Replaces global-game in TagPro games with `global-game.js` in the `js` directory of this extension. This is useful for ensuring that an edited version of `globa-game.js` still functions after unminification and for easier real-time inspection using the Chrome Developer Tools.

To use:
1. Clone or download the repository.
2. Place the `global-game.js` that you'd like to use in the `js` folder.
3. Follow the instructions [here](https://developer.chrome.com/extensions/getstarted#unpacked) to load the extension into chrome.

Thereafter, tagpro will use the provided `global-game.js` file in place of the version loaded from the server. Make sure to disable when not needed, and update `global-game.js` when new versions are pushed out.
