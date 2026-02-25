import { Users, TrendingUp, Dumbbell, CheckCircle } from "lucide-react";

const CHART_DATA = [85, 100, 60, 90, 75, 100, 95];

export function TrainerShowcaseCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Feito para Treinadores Modernos
        </h2>
        <p className="text-slate-600 text-lg">
          Dê aos seus alunos uma experiência profissional e motivadora.
        </p>
        <p className="text-slate-600 text-lg">
          Dashboards intuitivos e automações inteligentes.
        </p>
      </div>

      <div className="relative hidden lg:block">
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 font-medium">
              Treinos Esta Semana
            </span>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>

          <div className="text-5xl font-black text-slate-900">24</div>

          <div className="flex gap-1">
            {CHART_DATA.map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-orange-400 to-orange-500 rounded-full"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <Stat icon={Users} value="156" label="Alunos" />
            <Stat icon={Dumbbell} value="89%" label="Engajamento" />
          </div>
        </div>

        <FloatingResultCard />
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  readonly icon: typeof Users;
  readonly value: string;
  readonly label: string;
}) {
  return (
    <div className="flex-1 bg-slate-50 rounded-xl p-4">
      <Icon className="h-6 w-6 text-slate-600 mb-2" />
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  );
}

function FloatingResultCard() {
  return (
    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <div>
          <p className="font-bold text-slate-900 text-lg">+47% Resultados</p>
          <p className="text-sm text-slate-600">Nos últimos 30 dias</p>
        </div>
      </div>
    </div>
  );
}
