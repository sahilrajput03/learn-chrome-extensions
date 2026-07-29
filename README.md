# Learn Chrome Extension

Source: [ChatGPT](https://chatgpt.com/c/6a69af3a-fbbc-83ee-a65e-57bc55831ecd)

**Install an extension:**

1. Open Chrome → `chrome://extensions`.
2. Enable *Developer mode*
3. Click *Load unpacked*
4. Select `my-extension-folder/`
5. Open/reload the matching webpage.


This will be added as an extension on `chrome://extensions` with the name as defined in `name` property in `manifest.json`.


## Q. Can i update the extension code in chrome without deleting it and re-adding it again?

Yes. If you're using an unpacked extension, you don't need to delete/re-add it.

After changing your extension files:

Go to:
1. chrome://extensions
2. Find your extension.
3. Click the ↻ Reload button.

Chrome will reload the updated extension.