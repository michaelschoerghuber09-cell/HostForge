import { useEffect, useState } from "react";
import getAllVersions from "./getAllVersions";
{/*Here you can select what kind of minecraft server you want to create*/}

export default function NewServer() {
    const [activeCategory, setActiveCategory] = useState<string>("");

    return (
        <>
        <nav>
            {/*Select the type of server you want to create toogle switch to show you all avaible options from the api */}
            <div className="selectServerOptionContainer">
                <button className="selectServerVariantBtn" onClick={()=> setActiveCategory("vanilla")}>Vanilla</button>
                <button className="selectServerVariantBtn">Modded</button>
                <button className="selectServerVariantBtn">Plugin Server</button>
                <button className="selectServerVariantBtn">Bedrock</button>
                <button className="selectServerVariantBtn">Proxies</button> {/*I have to look into proxies server and how they are setup */}
            </div>
        </nav>
            {activeCategory === "vanilla" && <VanillaServerOption />}
        </>
    );
}

function VersionSelector({
    type,
    variant,
    selectId,
    selectName,
}: {
    type: string;
    variant: string;
    selectId: string;
    selectName: string;
}) {
    const [versions, setVersions] = useState<string[]>([]);

    useEffect(() => {
        getAllVersions(type, variant)
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
                <h1>Vanilla Server</h1>

                    <label htmlFor="version">Choose your version:</label>
                        <VersionSelector
                            type="vanilla"
                            variant="release"
                            selectId="versionVanilla"
                            selectName="version-selector-vanilla"
                        />
            </div>

            <div className="snapshotServer">
                <h1>Snapshot Server</h1>
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