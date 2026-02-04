import { Outlet } from "react-router-dom";
import { NavbarHome } from "../components/NavBarHome";

export function HomeLayout() {
  return (
    <div className="min-h-screen bg-gray-5 mb-5">
      <NavbarHome />
      <div className="pt-[10vh]">
        <Outlet />
      </div>
    </div>
  );
}
