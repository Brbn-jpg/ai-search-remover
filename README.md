# AI Search Remover

A simple Chrome extension that automatically adds `-ai` to all your search queries on Google, Bing, DuckDuckGo, and Yahoo.

## Why?

Tired of AI-generated content flooding your search results? This extension helps you filter out AI-generated pages by automatically appending `-ai` to every search query.

## Features

- Works with Google, Bing, DuckDuckGo, and Yahoo
- Lightweight and fast
- No data collection - works entirely locally
- Automatic - no configuration needed

## Installation

![Demo](demo.gif)

1. **Download the extension**

   - Click the green "Code" button above
   - Select "Download ZIP"
   - Extract the ZIP file to a folder on your computer

2. **Load into Chrome**

   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top-right corner)
   - Click "Load unpacked"
   - Select the extracted folder

3. **Done!** The extension is now active. Try searching for something on Google.

## Example

**Before:** `how to train a dog`  
**After:** `how to train a dog -ai`

## Customization

Want to filter something else? Edit the `remove_ai` variable in `background.js`:

```javascript
const remove_ai = "-ai -chatgpt -generated";
```

Then reload the extension in `chrome://extensions/`

## Privacy

This extension:

- Does NOT collect any data
- Does NOT track your searches
- Works entirely on your device
- Is open source - check the code yourself!

## Browser Compatibility

- Chrome
- Edge
- Brave
- Any Chromium-based browser
