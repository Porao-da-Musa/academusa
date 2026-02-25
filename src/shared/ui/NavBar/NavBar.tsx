import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { AuthButtons } from "../../../features/auth/components/AuthButtons";
import { NavbarVariant } from "./types/navbar.types";

type NavRoute = {
  label: string;
  path: string;
  isAnchor?: boolean;
};

type NavBarProps = {
  readonly variant?: NavbarVariant;
  readonly routes?: NavRoute[];
  readonly logoText?: string;
};

export function Navbar({
  variant = NavbarVariant.PUBLIC,
  routes = [],
  logoText = "Academusa",
}: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

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
            {logoText}
          </span>
        </Link>
      </nav>
    );
  }

  const isHomeVariant = variant === NavbarVariant.HOME;

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-300
        ${
          isHomeVariant
            ? "w-full px-6 py-3 bg-white border-b border-slate-200 shadow-sm"
            : "top-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-md border border-slate-100"
        }
        ${
          !isHomeVariant && (isScrolled || isMobileMenuOpen)
            ? "shadow-lg scale-[1.01]"
            : ""
        }
      `}
    >
      <div
        className={`flex items-center ${
          isHomeVariant ? "justify-between" : "gap-10"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group transition-all">
          <div
            className={`p-2 rounded-lg transition-colors ${
              isHomeVariant ? "bg-orange-50" : "bg-slate-100"
            }`}
          >
            <Dumbbell
              className={`${
                isHomeVariant
                  ? "h-7 w-7 text-orange-600"
                  : "h-5 w-5 text-slate-700"
              } group-hover:scale-105 transition-transform`}
            />
          </div>
          <span
            className={`font-bold tracking-tight text-slate-900 ${
              isHomeVariant ? "text-xl" : "text-lg"
            }`}
          >
            {logoText}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {routes.map((route) => {
            const isActive = location.pathname === route.path;
            const baseClass =
              "text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 border";

            if (route.isAnchor) {
              return (
                <a
                  key={route.label}
                  href={route.path}
                  className={`${baseClass} text-slate-600 border-transparent hover:text-orange-600 hover:bg-orange-50`}
                >
                  {route.label}
                </a>
              );
            }

            return (
              <Link
                key={route.label}
                to={route.path}
                className={`${baseClass} ${
                  isActive
                    ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                    : "text-slate-600 border-transparent hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </div>

        {variant === NavbarVariant.PUBLIC && <AuthButtons />}

        <button
          className="md:hidden p-2 text-slate-600 hover:text-orange-600 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`
            md:hidden absolute left-0 top-full mt-2 w-full bg-white border border-slate-200 shadow-xl p-4
            ${isHomeVariant ? "" : "rounded-2xl"}
          `}
        >
          <div className="flex flex-col gap-2">
            {routes.map((route) => {
              const isActive = location.pathname === route.path;

              return (
                <Link
                  key={route.label}
                  to={route.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-orange-600 text-white"
                      : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {route.label}
                </Link>
              );
            })}

            {variant === NavbarVariant.PUBLIC && (
              <AuthButtons
                isMobile
                onLinkClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
