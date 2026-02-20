import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";

const publicRoutes = [
  { label: "Funcionalidades", path: "/features", isAnchor: true },
  { label: "Sobre", path: "/about" },
  { label: "Planos", path: "/plans", isAnchor: true },
];

export function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Navbar variant="public" routes={publicRoutes} />
      <Outlet />
    </div>
  );
}
