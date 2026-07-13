# Application icons

This folder holds the platform icon set referenced by `tauri.conf.json`
(`32x32.png`, `128x128.png`, `128x128@2x.png`, `icon.icns`, `icon.ico`).

Generate the full set from a single source PNG (1024×1024 recommended) with:

```bash
npm run tauri icon path/to/source-icon.png
```

The generated binary icons are intentionally not committed yet — add them
before producing a distributable build (`npm run tauri:build`).
