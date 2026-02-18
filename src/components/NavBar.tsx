import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
{
  /* Outra nav bar para gestao do dashboard */
}
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
            <img
              src="/favicon.png"
              alt="Academusa"
              className="h-6 w-6 object-contain"
            />
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
        <Link
          to="/"
          className="flex items-center gap-2 transition-colors duration-300 group-hover:text-black"
        >
          <div className="p-2 rounded-lg bg-slate-200 group-hover:bg-slate-300 transition-colors">
            <Dumbbell className="h-5 w-5 text-slate-900 group-hover:text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight">Academusa</span>
        </Link>

        {/* Desktop Nav */}
        {["features", "about", "plans"].map((section) => {
          if (section === "about") {
            return (
              <Link
                key={section}
                to="/about"
                className="
                    text-sm font-medium text-slate-800
                    px-3 py-1.5 rounded-full
                    transition-all
                    hover:text-black hover:border-black 
                    border border-transparent 
                    "
              >
                Sobre
              </Link>
            );
          }

          return (
            <a
              key={section}
              href={`#${section}`}
              className="
                    text-sm font-medium text-slate-800
                    px-3 py-1.5 rounded-full
                    transition-all
                    hover:text-black hover:border-black 
                    border border-transparent 
                "
            >
              {section === "features" && "Funcionalidades"}
              {section === "plans" && "Planos"}
            </a>
          );
        })}

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button
              variant="primary"
              size="sm"
              className="border-slate-400 text-slate-800 hover:border-black hover:text-black"
            >
              Entrar
            </Button>
          </Link>

          <Link to="/signup">
            <Button
              variant="primary"
              size="sm"
              className="bg-black text-white hover:bg-slate-800"
            >
              Começar
            </Button>
          </Link>
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
