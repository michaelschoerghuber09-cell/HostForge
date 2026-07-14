/**
 * Application root.
 *
 * Intentionally minimal — this is the project foundation only.
 * UI, routing, state and feature modules are added under `src/` later.
 */
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from './Header';
import NewServer from "./pages/NewServer";
import Settings from "./pages/Settings";
import ImportServer from "./pages/importServer";
import Dashboard from "./pages/Dashboard";

function LayoutWithHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
        <Routes>
          <Route element={<LayoutWithHeader />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-server" element={<NewServer />} />
            <Route path="/settings-page" element={<Settings />} />
          </Route>
          <Route path="/importServer-page" element={<ImportServer />}></Route>
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
