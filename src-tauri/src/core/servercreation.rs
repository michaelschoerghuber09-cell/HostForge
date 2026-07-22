//! Server creation.
//!
//! Everything needed to set up a new Minecraft server instance, including
//! downloading the server jar.

#![allow(unused_imports)]

use std::path::{Path, PathBuf};

pub fn download_server_jar () -> Result<(), Box<dyn std::error::Error>> {
    let response = reqwest::blocking::get("https://mcjarfiles.com/api/get-latest-jar/servers/paper")?;
    let content = response.bytes()?;
    let mut file = std::fs::File::create("paper.jar")?;
    std::io::copy(&mut content.as_ref(), &mut file)?;
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_download() {
        download_server_jar().unwrap();
    }
}