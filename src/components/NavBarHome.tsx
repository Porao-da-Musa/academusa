//components -> navbar

import React, { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";

export const NavbarHome: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = location.pathname === "/login";

  if (isAuthPage) {
    return (
      <nav className="absolute top-0 left-0 w-full p-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors w-fit"
        >
          <div className="bg-brand-500/10 p-2 rounded-lg">
            <Dumbbell className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            FitFlow Academia
          </span>
        </Link>
      </nav>
    );
  }

  const routes = [
    { page: "", label: "Painel" },
    { page: "/map", label: "Mapa da Academia" },
    { page: "/training", label: "Meu Treino" },
    { page: "/exercises", label: "Exercícios" },
  ];

  return (
    <nav
      className={`
        fixed

        w-full
        z-50 px-6 py-3 
        bg-white text-slate-900 
        shadow-lg 
        transition-all duration-300 
        group
        ${isMobileMenuOpen ? "shadow-xl scale-[1.02]" : ""}
        `}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span className="flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
          <div className="p-2">
            <Dumbbell className="h-8 w-8 text-blue-600 hover: transition-transform hover:scale-110" />
          </div>
          <span className="text-xl tracking-tight">FitFlow Academia</span>
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {routes.map((section) => {
            const isActive = location.pathname === `/home${section.page}`;

            return (
              <Link
                key={section.label}
                to={`/home${section.page}`}
                className={`
                  text-lg font-normal
                  px-3 py-1.5 rounded-md
                  transition-all
                  border
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 border-transparent hover:text-black hover:border-black"
                  }
                `}
              >
                {section.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black hover:text-slate-700 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};
