//components -> navbar

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";

export const NavbarDashboard: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Only show navbar logic on landing page or non-app pages
  // If we are on login page, we might want a simpler nav or none
  const isAuthPage = location.pathname === "/login";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 
        z-50 px-6 py-3 
        bg-white text-slate-900 
        rounded-full shadow-lg 
        transition-all duration-300 
        group
        ${isScrolled || isMobileMenuOpen ? "shadow-xl scale-[1.02]" : ""}
        `}
    >
      <div className="flex items-center gap-10">
        {/* Logo */}
        <span className="flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
          <div className="p-2 rounded-lg bg-slate-200 group-hover:bg-slate-300 transition-colors">
            <Dumbbell className="h-5 w-5 text-slate-900 group-hover:text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight">Academusa</span>
        </span>

        {/* Desktop Nav */}
        {["Alunos", "Financeiro", "Treinos", "Relatórios"].map((section) => (
          <Link
            key={section}
            to={`/dashboard/${section.toLowerCase()}`}
            className="
            text-sm font-medium text-slate-800
            px-3 py-1.5 rounded-full
            transition-all
            hover:text-black hover:border-black 
            border border-transparent 
            hover:border-black
          "
          >
            {section}
          </Link>
        ))}

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
