import { Link } from "react-router-dom";
import "../../styles/createServerStylesheet.css"

{/*Just the page with an Link to the Server Setup Page*/}
export default function createServer () {
    return (
        <nav>
            <div className="createServerContainer">
                <Link to={"/new-server"} className="createServerBtn">Create Server</Link>
            </div>
        </nav>
    )
}