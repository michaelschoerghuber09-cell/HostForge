# HostForge
<<<<<<< HEAD

Cross-platform **Minecraft server management** application for Windows, Linux
and macOS.

> Project foundation only. No features, UI, styling, or server logic are
> implemented yet — this repository currently contains the clean project
> structure it will be built on.

## Tech stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Desktop    | [Tauri 2](https://v2.tauri.app) |
| Backend    | Rust                    |
| Frontend   | React + TypeScript      |
| Build tool | Vite                    |

## Project structure

```
HostForge/
├── src/                 # React + TypeScript frontend
│   ├── assets/          # Static assets imported by the app
│   ├── components/      # Reusable presentational components
│   ├── features/        # Feature modules (self-contained slices)
│   ├── pages/           # Top-level views / routes
│   ├── hooks/           # Reusable React hooks
│   ├── lib/             # Frontend utilities and Tauri bindings
│   ├── services/        # Frontend-side API/service wrappers
│   ├── stores/          # Client state stores
│   ├── types/           # Shared TypeScript types
│   ├── App.tsx          # Application root
│   └── main.tsx         # Entry point
│
├── src-tauri/           # Rust backend + Tauri desktop configuration
│   ├── src/
│   │   ├── commands/    # Tauri command handlers (frontend-facing API)
│   │   ├── core/        # Framework-agnostic domain logic
│   │   ├── models/      # Shared serde data models
│   │   ├── services/    # Long-lived application services
│   │   ├── state/       # Managed application state
│   │   ├── error.rs     # Unified backend error type
│   │   ├── lib.rs       # Library crate (builds & runs the app)
│   │   └── main.rs      # Binary entry point
│   ├── capabilities/    # Tauri permission capabilities
│   ├── icons/           # Application icon set
│   ├── build.rs         # Tauri build script
│   ├── Cargo.toml       # Rust crate manifest
│   └── tauri.conf.json  # Tauri application configuration
│
├── shared/              # Cross-cutting resources shared by both layers
│   ├── assets/
│   └── config/
│
├── index.html           # Vite HTML entry
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Node dependencies & scripts
```

## Prerequisites

- [Node.js](https://nodejs.org) 18+
- [Rust](https://www.rust-lang.org/tools/install) (stable toolchain)
- Platform-specific Tauri dependencies — see the
  [Tauri prerequisites guide](https://v2.tauri.app/start/prerequisites/).

## Getting started

```bash
# Install frontend dependencies
npm install

# Run the app in development (starts Vite + the Tauri window)
npm run tauri:dev

# Produce a distributable build
npm run tauri:build
```

### Useful scripts

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server (frontend only)    |
| `npm run build`        | Type-check and build the frontend            |
| `npm run typecheck`    | Run the TypeScript compiler with no emit     |
| `npm run tauri:dev`    | Run the full desktop app in development       |
| `npm run tauri:build`  | Build the packaged desktop application        |

## License

_TBD_
=======
A self hosted server management platform designed to simplify the setup, confiquration, and management of Minecraft servers an interface.
>>>>>>> 10bfb83af1588b55d6a0a81bb2cd913b4b116d6c
