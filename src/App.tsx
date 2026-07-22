/**
 * Application root.
 *
 * Intentionally minimal — this is the project foundation only.
 * UI, routing, state and feature modules are added under `src/` later.
 */
import { HashRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from './Header';
import SideBar from './SideBar'
import NewServer from "./pages/SetUpServer/NewServer";
import Settings from "./pages/Settings";
import ImportServer from "./pages/importServer";
import Dashboard from "./pages/Dashboard";
import Backups from "./pages/Backups";
import UsedPorts from "./pages/UsedPorts";
import CreateServer from "./pages/SetUpServer/CreateServer";

function LayoutWithHeader() {
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <Header/>
      <div style={{display: "flex", flex: 1, minHeight: 0}}>
        <SideBar/>
        <div style={{flex: 1, minWidth: 0, overflow: "auto"}}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
        <Routes>
          <Route element={<LayoutWithHeader />}>
            <Route path="/" element={<Navigate to="/dashboard-page" replace />} />
            <Route path="/dashboard-page" element={<Dashboard />} />
            <Route path="/new-server" element={<NewServer />} />
            <Route path="/create-server" element={<CreateServer/>}/>
            <Route path="/settings-page" element={<Settings />} />
            <Route path="/backup-page" element={<Backups/>}></Route>
          </Route>
          <Route path="/importServer-page" element={<ImportServer />} />
          <Route path="/view-ports" element={<UsedPorts/>} />
        </Routes>
  );
}

export default function AppRoot() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
