import { Outlet } from "react-router-dom";
import { NavbarHome } from "../components/NavBarHome";

export function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">      
      <NavbarHome />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
