<h1 align="center">Save To GoodLinks</h1>

*Save To GoodLinks is a web browser extension that save current website to GoodLinks.*

### Installation Instructions
**Google Chrome / Brave**
1. Download this repo as a [ZIP file from GitHub](https://github.com/YogevKr/save-to-goodlinks-chrome-extension/archive/main.zip).
1. Unzip the file and you should have a folder named `save-to-goodlinks-chrome-extension-main`.
1. In Chrome/Brave go to the extensions page (`chrome://extensions` or `brave://extensions/`).
1. Enable Developer Mode.
1. Drag the `save-to-goodlinks-chrome-extension-main` folder anywhere on the page to import it (do not delete the folder afterwards).
1. Run the following command to get rid from "A website wants to open this application."
    * Chrome ```defaults write com.google.Chrome URLWhitelist -array 'goodlinks://*'```
    * Brave ```defaults write com.brave.Browser URLWhitelist -array 'goodlinks://*'```
