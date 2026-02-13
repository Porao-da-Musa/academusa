import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import {
  Dumbbell,
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo à Esquerda */}
            <div className="space-y-8 z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold shadow-xl border border-white/30">
                <Zap className="h-4 w-4" fill="currentColor" />
                <span>Revolucione sua academia agora</span>
              </div>

              {/* Título Principal */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                Transforme
                <br />
                Sua Academia
              </h1>

              {/* Subtítulo */}
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-xl font-medium">
                A plataforma completa para gestão inteligente. Gerencie treinos,
                acompanhe resultados e impulsione seu negócio.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup" className="group">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-10 py-5 shadow-2xl font-bold group-hover:shadow-3xl"
                  >
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/plans">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-orange-500 shadow-2xl font-bold backdrop-blur-sm"
                  >
                    Ver Planos
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-white shadow-lg"
                      ></div>
                    ))}
                  </div>
                  <div className="text-white">
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold">
                      + de 1.000 usuários ativos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem/Card à Direita */}
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
                      <div className="text-5xl font-black text-slate-900">
                        24
                      </div>
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
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                Funcionalidades
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Tudo Que Você Precisa
              <br />
              Em Um Só Lugar
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ferramentas poderosas para levar sua academia ao próximo nível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-10 w-10" />,
                title: "Gestão Completa de Treinos",
                description:
                  "Crie, personalize e acompanhe treinos individuais ou em grupo com facilidade absoluta",
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "Relatórios em Tempo Real",
                description:
                  "Monitore o progresso, evolução e métricas de cada aluno instantaneamente",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Comunidade Engajada",
                description:
                  "Conecte alunos, professores e crie uma comunidade forte e motivada",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-md p-10 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 space-y-6">
                  <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 text-white group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/85 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-32 px-6 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagem/Mockup mudar */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
                  <Dumbbell className="h-32 w-32 text-white/30 relative z-10" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Sobre Nós
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Feito Por Quem Entende do Assunto
              </h2>

              <p className="text-xl text-white/90 leading-relaxed">
                Desenvolvido por profissionais de educação física e tecnologia,
                a Academusa nasceu para revolucionar a forma como academias
                gerenciam seus negócios e se conectam com seus alunos.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Interface moderna e intuitiva",
                  "Suporte dedicado 24/7",
                  "Atualizações constantes e gratuitas",
                  "Segurança e privacidade garantidas",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg group-hover:bg-white/30 transition-all">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white/95 text-lg font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                Planos e Preços
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Escolha Seu Plano Ideal
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Planos flexíveis que crescem junto com sua academia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "99",
                period: "mês",
                description: "Perfeito para começar",
                features: [
                  "Até 50 alunos",
                  "Gestão de treinos",
                  "Relatórios básicos",
                  "Suporte por email",
                ],
              },
              {
                name: "Professional",
                price: "199",
                period: "mês",
                description: "Para academias em crescimento",
                features: [
                  "Até 200 alunos",
                  "Relatórios avançados",
                  "App mobile incluso",
                  "Suporte prioritário",
                  "Integrações ilimitadas",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "399",
                period: "mês",
                description: "Para grandes redes",
                features: [
                  "Alunos ilimitados",
                  "API customizada",
                  "Suporte 24/7 dedicado",
                  "Consultor pessoal",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`
                  relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl
                  hover:bg-white/15 transition-all duration-500 hover:scale-105
                  border border-white/20 shadow-2xl
                  ${plan.popular ? "ring-4 ring-white/40 scale-105" : ""}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-orange-500 px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-white/70">{plan.description}</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-white">
                        R$ {plan.price}
                      </span>
                      <span className="text-white/70 text-lg">
                        /{plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-white/90"
                      >
                        <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "secondary" : "outline"}
                    size="lg"
                    fullWidth
                    className={`font-bold ${!plan.popular ? "border-2 border-white text-white hover:bg-white hover:text-orange-500" : ""}`}
                  >
                    Escolher {plan.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Pronto Para Transformar
            <br />
            Sua Academia?
          </h2>
          <p className="text-2xl text-white/95 max-w-3xl mx-auto">
            Junte-se a milhares de profissionais que já revolucionaram sua
            gestão
          </p>
          <Link to="/signup" className="inline-block group">
            <Button
              variant="secondary"
              size="lg"
              className="text-xl px-16 py-6 shadow-2xl font-bold group-hover:shadow-3xl"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <p className="text-white/80 text-sm">
            Teste grátis • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Academusa</span>
            </div>
            {/* Alterar data com var */}
            <p className="text-white/70 text-center">
              © 2025 Academusa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-white/70 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
