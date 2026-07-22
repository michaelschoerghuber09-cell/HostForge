import { useEffect, useState } from "react";
import getAllVersions from "./getAllVersions";

{/*ToDo: Create a stylesheet and and add png to the server options and add an next button to download the jar you selected and to configure your server*/}

{/*Here you can select what kind of minecraft server you want to create*/}

export default function NewServer() {
    const [activeCategory, setActiveCategory] = useState<string>("");

    return (
        <>
        <nav>
            {/*Select the type of server you want to create toogle switch to show you all avaible options from the api */}
            <div className="selectServerOptionContainer">
                <button className="selectServerVariantBtn" onClick={()=> setActiveCategory("vanilla")}>Vanilla</button>
                <button className="selectServerVariantBtn" onClick={()=> setActiveCategory("modded")}>Modded</button>
                <button className="selectServerVariantBtn" onClick={()=> setActiveCategory("servers")}>Plugin</button>
                <button className="selectServerVariantBtn" onClick={()=> setActiveCategory("bedrock")}>Bedrock</button>
                <button className="selectServerVariantBtn" onClick={()=>setActiveCategory("proxies")}>Proxy</button> {/*I have to look into proxies server and how they are setup */}
            </div>
        </nav>
            {activeCategory === "vanilla" && <VanillaServerOption />}
            {activeCategory === "modded" && <ModdedServerOption />}
            {activeCategory === "servers" && <PluginServerOption />}
            {activeCategory === "bedrock" && <BedrockServerOption />}
            {activeCategory === "proxies" && <ProxyServerOption />}
        </>
    );
}

function VersionSelector({
    type,
    variant,
    os,
    selectId,
    selectName,
}: {
    type: string;
    variant: string;
    os?:string;
    selectId: string;
    selectName: string;
}) {
    const [versions, setVersions] = useState<string[]>([]);

    useEffect(() => {
        getAllVersions(type, variant, os!)
            .then(setVersions)
            .catch((err) => console.error("Fetch failed:", err));
    }, [type, variant]);

    return (
        <select name={selectName} id={selectId}>
            {versions.map((version) => (
                <option key={version} value={version}>
                    {version}
                </option>
            ))}
        </select>
    );
}

export function VanillaServerOption() {

    return(
        <div className="vanillaServerOptions">
            <div className="vanillaServerRelease">
                <h1>Vanilla</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="vanilla"
                            variant="release"
                            selectId="versionVanilla"
                            selectName="version-selector-vanilla"
                        />
            </div>

            <div className="snapshotServer">
                <h1>Snapshot</h1>
                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="vanilla"
                            variant="snapshot"
                            selectId="versionSnapshot"
                            selectName="version-selector-snapshot"
                        />
            </div>
        </div>
    );
}

export function ModdedServerOption() {

    return(
        <div className="moddedServerOptions">
            <div className="moddedServerForge">
                <h1>Forge</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="modded"
                            variant="forge"
                            selectId="versionForge"
                            selectName="version-selector-forge"
                        />
            </div>

            <div className="moddedServerNeoForged">
                <h1>NeoForged</h1>
                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="modded"
                            variant="neoforge"
                            selectId="versionNeoForge"
                            selectName="version-selector-neoforge"
                        />
            </div>

            <div className="moddedServerFabric">
                <h1>Fabric</h1>
                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="modded"
                            variant="fabric"
                            selectId="versionFabric"
                            selectName="version-selector-fabric"
                        />
            </div>
        </div>
    );
}

export function PluginServerOption() {

    return(
        <div className="pluginServerOptions">
            <div className="pluginServerPaper">
                <h1>Paper</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="servers"
                            variant="paper"
                            selectId="versionPaper"
                            selectName="version-selector-paper"
                        />
            </div>

            <div className="pluginServerPurper">
                <h1>Purper</h1>
                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="servers"
                            variant="purpur"
                            selectId="versionPurpur"
                            selectName="version-selector-purpur"
                        />
            </div>

            <div className="pluginServerLeaf">
                <h1>Leaf</h1>
                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="servers"
                            variant="leafmc"
                            selectId="versionLeaf"
                            selectName="version-selector-leaf"
                        />
            </div>

            <div className="pluginServerFolia">
                <h1>Folia</h1>
                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="servers"
                            variant="folia"
                            selectId="versionFolia"
                            selectName="version-selector-folia"
                        />
            </div>
        </div>
    );
}

export function BedrockServerOption() {

    return(
        <div className="bedrockServerOptions">
            <div className="bedrockServerLatestLinux">
                <h1>Bedrock Latest Linux</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="bedrock"
                            variant="latest"
                            os="linux"
                            selectId="versionBedrockLatestLinux"
                            selectName="version-selector-bedrock-latest-linux"
                        />
            </div>

            <div className="bedrockServerLatestWindows">
                <h1>Bedrock Latest Windows</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="bedrock"
                            variant="latest"
                            os="windows"
                            selectId="versionBedrockLatestWindoes"
                            selectName="version-selector-bedrock-latest-windows"
                        />
            </div>

            <div className="bedrockServerPreviewLinux">
                <h1>Bedrock Preview Linux</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="bedrock"
                            variant="preview"
                            os="linux"
                            selectId="versionBedrockPreviewLinux"
                            selectName="version-selector-bedrock-preview-linux"
                        />
            </div>

            <div className="bedrockServerPreviewWindows">
                <h1>Bedrock Preview Windows</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="bedrock"
                            variant="preview"
                            os="windows"
                            selectId="versionBedrockPreviewWindows"
                            selectName="version-selector-bedrock-preview-windows"
                        />
            </div>
        </div>
    );
}

export function ProxyServerOption() {

    return(
        <div className="proxyServerOptions">
            <div className="proxyServer">
                <h1>Velocity</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="proxies"
                            variant="velocity"
                            selectId="versionVelocity"
                            selectName="version-selector-velocity"
                        />
            </div>
        </div>
    );
}