// SideBar.tsx
import { NavLink } from "react-router-dom";
import "./styles/sidebarstylesheet.css";
import { navItems } from "./navItems.ts";

export default function SideBar() {
  return (
    <nav className="sidebar-item-container">
      <div className="icons">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            <item.icon />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}