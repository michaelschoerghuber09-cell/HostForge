import "./styles/headerStylesheet.css";
import { Link } from "react-router-dom";
import { exit } from "@tauri-apps/plugin-process";
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { openUrl } from "@tauri-apps/plugin-opener";

export default function Header() {
  return (
    <div className="HeaderTabs">
        <FileDropDownMenu/>
        <ServerDropDownMenu/>
        <ToolsDropDownMenu/>
        <HelpDropDownMenu />
    </div>

  );
}

function FileDropDownMenu() {
    return(
        <nav>
            <div className="dropdownmenu">
                <button className="dropdownBtn">File</button>

                <div className="dropDownOpt">
                    <Link to="/new-server">New Server</Link>
                    <button onClick={() => openNewWindow(1024, 768, "/importServer-page", "Import Server", "import-server")}>Import Server</button>
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
                <button className="dropdownBtn">Server</button>
                <div className="dropDownOpt">
                    {/* Shows the most recent server and is used for following commands like start/stop */}
                    <p>Current Server</p>
                    <button>Start</button>
                    <button>Stop</button>
                    <button>Restart</button>
                    {/* Creates a backup into the backup folder. Only works if the server is stopped */}
                    <button>BackUp</button>
                    {/* Opens Server Settings */}
                    <Link to={"/dashboard-page"}>Edit Settings</Link>
                    <button>Open Server Folder</button>
                    {/* Opens a command prompt in the server folder */}
                    <button>Open in Command Prompt</button> 
                </div>
            </div>
        </nav>
    );
}

function ToolsDropDownMenu() {
    return(
        <nav>
            <div className="dropdownmenu">
                <button className="dropdownBtn">Tools</button>

                <div className="dropDownOpt">
                    {/*See all used ports*/}
                    <button onClick={() => openNewWindow(400, 400, "/view-ports", "Used Ports", "view-ports")}>Used Ports</button>
                    {/*See the log of current server */}
                    <Link to={"/dashboard-page"}>Log Viewer</Link>
                    <Link to={"/backup-page"}>Backup Manager</Link>

                </div>
            </div>
        </nav>
    );
}

function HelpDropDownMenu() {
    return(
        <nav>
            <div className="dropdownmenu">
                <button className="dropdownBtn">Help</button>

                <div className="dropDownOpt">
                    <button onClick={() => openUrl("https://github.com/michaelschoerghuber09-cell/HostForge/wiki")}>Documentation</button>
                    <button onClick={() => openUrl("https://github.com/michaelschoerghuber09-cell")}>Github</button>
                    {/* Note: user report an error and the data will get fetched and will be sent to my discord server for further analyzation */}
                    <button onClick={() => openNewWindow(400, 400, "/report-error", "Report Error", "report-error")}>Report Error</button>
                    <button onClick={() => openUrl("https://michaellabs.me")}>About Me</button>
                </div>
            </div>
        </nav>
    );
}

async function openNewWindow(width: number, height: number, urlPath: string, title: string, label: string) {
    const existingWindow = await WebviewWindow.getByLabel(label);

    if (existingWindow) {
        await existingWindow.show();
        await existingWindow.setFocus();
        return;
    }

    try {
        const importWindow = new WebviewWindow(label, {
            url: "/#" + urlPath,
            title: title,
            width: width,
            height: height,
        });

        importWindow.once("tauri://error", (event) => {
            console.error("Failed to open window:", event);
        });
    } catch (error) {
        console.error("Failed to create window:", error);
    }
}