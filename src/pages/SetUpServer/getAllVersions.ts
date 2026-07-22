import { fetch } from "@tauri-apps/plugin-http";

export default async function getAllVersions(type:string, variant:string, os: string): Promise<string[]> {

    const data = (os === "linux" || os === "windows") ? await fetch(`https://mcjarfiles.com/api/get-versions/${type}/${variant}/${os}`) : await fetch(`https://mcjarfiles.com/api/get-versions/${type}/${variant}`);
    
    if(!data.ok) {
        throw new Error (
            `Error while loading the versions (${data.status} ${data.statusText})`
        );
    }
    console.log(data);
    return await data.json();
}