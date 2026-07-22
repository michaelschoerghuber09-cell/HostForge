# HostForge
A desktop app that turns Minecraft server setup and management into a few clicks instead of a folder full of manual config.
 
## Quick start

If you want to try it follow these steps.
 
```bash
# Clone the repo
git https://github.com/michaelschoerghuber09-cell/HostForge.git
cd hostforge
 
# Install frontend dependencies
npm install
 
# Run in development mode
npm run tauri dev
```
 
## Features it will have
 
- Guided server setup wizard, pick a version and server type, HostForge handles the rest
- Automatic file handling, downloads server jars, accepts the EULA, generates default configs
- Central dashboard to start, stop, and monitor multiple servers at once
- Configuration management without hand editing `propertie` files
- Plugin and mod support
- Player and whitelist management
- Backup and monitoring tools

**Note these features will come in the future and I am nowhere near finished!!**
 
## How to run it locally
 
**Requirements:**
- Rust (stable toolchain) — install via [rustup](https://rustup.rs/)
- Node.js 20+
- Tauri CLI (`cargo install tauri-cli` or via `npm`)
**Steps:**
```bash
npm install
npm run tauri dev
```
 
This starts the React frontend and builds the Rust backend together in a dev window with hot reload.
 
## How it works
 
HostForge's backend is written in Rust with **no async runtime** server downloads and file operations run synchronously via `reqwest::blocking`. This keeps the backend simple and predictable for what is fundamentally a sequence of file I/O tasks (download jar → write config → accept EULA, choosing port etc.), without pulling in the complexity of `tokio` for work that doesn't benefit from it.
 
The frontend is a Tauri 2 + React/TypeScript app, communicating with the Rust core through Tauri commands. The UI uses a data-driven sidebar (`NavLink` + `lucide-react`) and `HashRouter` with layout routes to keep navigation and window management consistent across HostForge's multi-window setup.
 
## About the project
 
The idea came from thinking about how repetitive and manual Minecraft server setup is downloading the right jar, accepting the EULA, editing `server properties`, all by hand, every time.
 
Some existing tools solve parts of this problem already. One in particular, [MC Server Soft](https://www.mcserversoft.com/), shares a lot of the same idea, and deserves credit as inspiration for this project.
 
## Tech stack
 
- **Rust** — backend, system operations, server management
- **Tauri 2** — desktop application framework
- **React + TypeScript** — user interface
- **Git** — version control
## Credits
 
- [MC Server Soft](https://www.mcserversoft.com/) — inspiration for the project