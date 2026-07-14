import "./styles/headerStylesheet.css";
import { Link } from "react-router-dom";
import { exit } from "@tauri-apps/plugin-process";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

export default function Header() {
  return (
    <div className="HaeaderTabs">
        <FileDropDownMenu/>
        <ServerDropDownMenu/>
    </div>

  );
}

function FileDropDownMenu() {
    return(
        <nav>
            <div className="dropdownmenu">
                <button className="dropdownFileBtn">File</button>

                <div className="dropDownOpt">
                    <Link to="/new-server">New Server</Link>
                    <button onClick={openImportServerWindow}>Import Server</button>
                    <Link to="/settings-page">Settings</Link>
                    <button onClick={() => exit(0)}>Beenden</button>
                </div>
            </div>
        </nav>
    );
}

function ServerDropDownMenu() {
    return(
        <nav>
            <div className="dropdownmenu">
                <button className="dropdownFileBtn">Server</button>
                <div className="dropDownOpt">
                    {/* Shows the most recent server and is used for following commands like start/stop */}
                    <p>Current Server</p>
                    <button>Start</button>
                    <button>Stop</button>
                    <button>Restart</button>
                    {/* Creates a backup into the backup folder. Only works if the server is stopped */}
                    <button>BackUp</button>
                    {/* Opens Server Settings */}
                    <Link to={"/Dashboard"}>Edit Settings</Link>
                    <button>Open Server Folder</button>
                    {/* Opens a command prompt in the server folder */}
                    <button>Open in Command Prompt</button> 
                </div>
            </div>
        </nav>
    );
}

async function openImportServerWindow() {
    const existingWindow = await WebviewWindow.getByLabel("import-server");

    if (existingWindow) {
        await existingWindow.show();
        await existingWindow.setFocus();
        return;
    }

    try {
        const importWindow = new WebviewWindow("import-server", {
            url: "/#/importServer-page",
            title: "Import Server",
            width: 1024,
            height: 768,
        });

        importWindow.once("tauri://error", (event) => {
            console.error("Failed to open Import Server window:", event);
        });
    } catch (error) {
        console.error("Failed to create Import Server window:", error);
    }
}