//! HostForge core library.
//!
//! This crate holds the entire backend for the HostForge desktop application.
//! The desktop binary (`main.rs`) is a thin wrapper that calls [`run`].
//!
//! Module overview (all currently empty scaffolding):
//! - [`commands`] — Tauri command handlers exposed to the frontend.
//! - [`services`] — long-lived application services / orchestration.
//! - [`core`]     — domain logic independent of Tauri.
//! - [`models`]   — shared data types (serde-serializable DTOs).
//! - [`state`]    — application state managed by the Tauri runtime.
//! - [`error`]    — unified error type for the backend.

mod commands;
mod core;
mod error;
mod models;
mod services;
mod state;

/// Builds and runs the HostForge Tauri application.
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running the HostForge application");
}
