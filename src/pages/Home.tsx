import { ActionCard, type ColorVariant} from "../components/ui/ActionCard";
import { Activity, Calendar, Zap } from "lucide-react";

type CardConfig = {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  variant: ColorVariant;
};


export default function Home() {
  

const cards: CardConfig[] = [
  {
    id: "map",
    icon: Activity,
    title: "Ver Mapa da Academia",
    subtitle: "Veja disponibilidade de equipamentos e densidade de pessoas em tempo real",
    variant: "red",
  },
  {
    id: "training",
    icon: Calendar,
    title: "Gerenciar Treino",
    subtitle: "Crie e personalize sua rotina de treino adaptativa",
    variant: "blue",
  },
  {
    id: "exercises",
    icon: Zap,
    title: "Explorar Exercícios",
    subtitle: "Encontre exercícios alternativos quando o equipamento estiver ocupado",
    variant: "purple",
  },
];


  return (
    <div className="min-h-screen column items-center justify-center bg-slate-100 p-6">
      <h1 className="text-4xl font-bold text-black py-20">
        Bem-vindo à Página Home!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => {
          return (<ActionCard key={card.id} {...card} />)
        })}
      </div>
    </div>
  );
}
