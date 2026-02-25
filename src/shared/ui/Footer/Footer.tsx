import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer({
  blackText = false,
}: {
  readonly blackText?: boolean;
}) {
  const currentYear = new Date().getFullYear();

  const primaryText = blackText ? "text-black" : "text-white";
  const secondaryText = blackText ? "text-black/70" : "text-white/70";
  const hoverText = blackText ? "hover:text-black" : "hover:text-white";

  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-black/20 p-2 rounded-lg">
            <Dumbbell className={`h-6 w-6 ${primaryText}`} />
          </div>
          <span className={`text-xl font-bold ${primaryText}`}>Academusa</span>
        </div>

        <p className={`${secondaryText} text-center`}>
          © {currentYear} Academusa. Todos os direitos reservados.
        </p>

        <nav className={`flex gap-6 text-sm ${secondaryText}`}>
          <Link to="/terms" className={`${hoverText} transition-colors`}>
            Termos
          </Link>
          <Link to="/privacy" className={`${hoverText} transition-colors`}>
            Privacidade
          </Link>
          <Link to="/contact" className={`${hoverText} transition-colors`}>
            Contato
          </Link>
        </nav>
      </div>
    </footer>
  );
}
