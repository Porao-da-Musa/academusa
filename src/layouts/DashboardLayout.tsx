import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { NavbarVariant } from "../types/navbar.types";

const dashboardRoutes = [
  { label: "Alunos", path: "/dashboard/alunos" },
  { label: "Financeiro", path: "/dashboard/financeiro" },
  { label: "Treinos", path: "/dashboard/treinos" },
  { label: "Relatórios", path: "/dashboard/relatorios" },
];

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant={NavbarVariant.DASHBOARD} routes={dashboardRoutes} />
      <div className="p-4 pt-24">
        <Outlet />
      </div>
    </div>
  );
}
