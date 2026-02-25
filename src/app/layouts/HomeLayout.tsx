import { Outlet } from "react-router-dom";
import { Navbar } from "../../shared/ui/NavBar/NavBar";
import { NavbarVariant } from "../../shared/ui/NavBar/types/navbar.types";

const homeRoutes = [
  { label: "Painel", path: "/home" },
  { label: "Mapa da Academia", path: "/home/map" },
  { label: "Meu Treino", path: "/home/training" },
  { label: "Exercícios", path: "/home/exercises" },
];

export function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        variant={NavbarVariant.HOME}
        routes={homeRoutes}
        logoText="FitFlow Academia"
      />
      <div className="pt-[10vh]">
        <Outlet />
      </div>
    </div>
  );
}
