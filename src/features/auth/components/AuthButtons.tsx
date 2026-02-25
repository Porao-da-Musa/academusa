import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/Button/Button";

interface AuthButtonsProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({
  isMobile = false,
  onLinkClick,
}) => {
  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
        <Link to="/login" onClick={onLinkClick}>
          <Button
            variant="outline"
            className="w-full rounded-xl border-slate-300"
          >
            Entrar
          </Button>
        </Link>
        <Link to="/signup" onClick={onLinkClick}>
          <Button className="w-full rounded-xl bg-orange-600 text-white hover:bg-orange-700">
            Começar
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-3">
      <Link to="/login">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full px-5 border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
        >
          Entrar
        </Button>
      </Link>
      <Link to="/signup">
        <Button
          variant="primary"
          size="sm"
          className="rounded-full px-5 bg-orange-600 text-white hover:bg-orange-700 shadow-sm transition-all"
        >
          Começar
        </Button>
      </Link>
    </div>
  );
};
