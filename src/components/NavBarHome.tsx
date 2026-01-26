//components -> navbar

import React, { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";

export const NavbarHome: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Only show navbar logic on landing page or non-app pages
  // If we are on login page, we might want a simpler nav or none
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
            Academusa
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

  <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-blue-600 group-hover:text-black" />
          <span className="text-xl text-gray-900">Academusa</span>
        </div>
      </div>
    </div>
  </header>;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-blue-600 group-hover:text-black" />
            <span className="text-xl text-gray-900">Academusa</span>
          </div>
          <nav
            className="hidden md:flex gap-1"
          >
            <div className="flex items-center gap-10">
              {/* Desktop Nav */}
              {routes.map((section) => {
                const isActive = location.pathname === `/home${section.page}`;

                return (
                  <Link
                    key={section.label}
                    to={`/home${section.page}`}
                    className={`
                text-sm font-medium
                px-4 py-2 rounded-lg
                transition-colors
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
                  >
                    {section.label}
                  </Link>
                );
              })}
            </div>
          </nav>

        {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-black hover:text-slate-700 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

          <div
            className={`md:hidden pb-4 flex flex-col gap-2 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {routes.map((section) => (
                <Link
                  key={section.label}
                  to={`/home${section.page}`}
                  className={`block py-2 px-4 rounded-lg  ${
                    location.pathname === `/home${section.page}`
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>
      </div>
    </header>
  );
};
