// navItems.ts
import { LucideIcon, Home, Server, Settings, Archive } from "lucide-react";

export interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { path: "/dashboard-page", label: "Dashboard", icon: Home },
  { path: "/new-server", label: "Neuer Server", icon: Server },
  { path: "/settings-page", label: "Einstellungen", icon: Settings },
  { path: "/backup-page", label: "Backups", icon: Archive },
];