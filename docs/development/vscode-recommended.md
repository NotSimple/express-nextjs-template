# Recommended vscode settings

## Install Extensions

1. Install prettier extension
   ![](https://i.imgur.com/pGDuaJu.png)

2. Install ESLint extension
   ![](https://i.imgur.com/RmQ2c0X.png)

3. Install Bracket Pair Colorizer (optional)
   ![](https://i.imgur.com/wmT0fVI.png)

## Configure settings.json

2. Create a `.vscode` folder.
3. Inside this folder create a `settings.json` file.
4. Inside this file add the following content to use 2 spaces as default for tabs and auto-format your code on save:

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.format": true
  }
}
```
