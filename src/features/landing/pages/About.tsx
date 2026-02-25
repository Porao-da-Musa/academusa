import { Users, TrendingUp, Dumbbell, CheckCircle } from "lucide-react";
import { Footer } from "../../../shared/ui/Footer/Footer";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-900">
            Sobre o Academusa
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nossa missão é conectar treinadores e alunos com tecnologia de alto
            nível, proporcionando desempenho, organização e resultados reais.
          </p>
        </div>

        {/* BLOCO 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Feito para Treinadores Modernos
            </h2>
            <p className="text-slate-600 text-lg">
              Dê aos seus alunos uma experiência profissional, visual e
              extremamente motivadora. O FitSync permite monitorar progresso,
              engajamento e performance com poucos cliques.
            </p>
            <p className="text-slate-600 text-lg">
              Tudo isso com dashboards intuitivos, automações inteligentes e
              design de última geração.
            </p>
          </div>

          {/* Card */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              {/* Card Principal */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
                      <div>
                        <p className="font-bold text-slate-900">João Silva</p>
                        <p className="text-sm text-slate-500">
                          Personal Trainer
                        </p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Ativo
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 font-medium">
                        Treinos Esta Semana
                      </span>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-5xl font-black text-slate-900">24</div>
                    <div className="flex gap-1">
                      {[85, 100, 60, 90, 75, 100, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-orange-400 to-orange-500 rounded-full"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                      <Users className="h-6 w-6 text-blue-500 mb-2" />
                      <p className="text-2xl font-bold text-slate-900">156</p>
                      <p className="text-sm text-slate-600">Alunos</p>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                      <Dumbbell className="h-6 w-6 text-purple-500 mb-2" />
                      <p className="text-2xl font-bold text-slate-900">89%</p>
                      <p className="text-sm text-slate-600">Engajamento</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Flutuante */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">
                      +47% Resultados
                    </p>
                    <p className="text-sm text-slate-600">
                      Nos últimos 30 dias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Card invertido */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">
                    Tecnologia Inteligente
                  </h3>
                  <p className="text-slate-600">
                    Criamos ferramentas que trabalham por você: alertas
                    automáticos, análise de performance e insights prontos.
                  </p>
                  <p className="text-slate-600">Você foca no treino</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <p className="font-bold text-slate-900">
                  Automação Inteligente
                </p>
                <p className="text-sm text-slate-600">
                  Sem retrabalho. Sem planilhas.
                </p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">
              Mais Tempo Para o que Importa
            </h2>
            <p className="text-slate-600 text-lg">
              Planejamento, acompanhamento e comunicação — tudo num só lugar.
            </p>
            <p className="text-slate-600 text-lg">
              Reduzimos tarefas repetitivas para você atender mais alunos e
              criar treinos melhores.
            </p>
          </div>
        </div>

        {/* BLOCO 3 */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-slate-900">
            Compromisso com Resultados
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Nosso foco é claro: levar treinadores e alunos a alcançarem seus
            objetivos de forma simples, motivadora e eficiente.
          </p>

          <div className="flex justify-center mt-8">
            <div className="bg-white/90 backdrop-blur-xl px-10 py-6 rounded-3xl shadow-xl transform hover:-translate-y-1 transition-all">
              <p className="font-black text-5xl text-slate-900">+10.000</p>
              <p className="text-slate-600 font-medium">
                Resultados Transformados
              </p>
            </div>
          </div>
        </div>

        <Footer blackText />
      </div>
    </div>
  );
}
