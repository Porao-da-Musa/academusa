import { Outlet } from "react-router-dom";
import { NavbarDashboard } from "../components/NavBarDashboard";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarDashboard />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
