import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar";

export function PublicLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}
