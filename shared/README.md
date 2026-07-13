# Shared resources

Cross-cutting resources that are not owned exclusively by the frontend
(`src/`) or the backend (`src-tauri/`).

- `config/` — shared, static configuration (defaults, schemas, presets).
- `assets/` — shared static assets (bundled or referenced by both layers).

Keep only source-of-truth, human-authored files here. Generated artifacts
belong in each layer's build output and stay untracked.
