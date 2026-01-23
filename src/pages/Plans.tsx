import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Dumbbell, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Plans: React.FC = () => {
    return (
    <div className="min-h-screen bg-gradient-to-b py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-24"></div>
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
                        "Suporte por email"
                    ]
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
                        "Integrações ilimitadas"
                    ],
                    popular: true
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
                        "Consultor pessoal"
                    ]
                    }
                ].map((plan, idx) => (
                    <div 
                    key={idx}
                    className={`
                        relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl
                        hover:bg-white/15 transition-all duration-500 hover:scale-105
                        border border-white/20 shadow-2xl
                        ${plan.popular ? 'ring-4 ring-white/40 scale-105' : ''}
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
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-white/70">{plan.description}</p>
                        </div>
                        
                        <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-black text-white">R$ {plan.price}</span>
                            <span className="text-white/70 text-lg">/{plan.period}</span>
                        </div>
                        </div>
                        
                        <ul className="space-y-4">
                        {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-white/90">
                            <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0" />
                            <span className="text-base">{feature}</span>
                            </li>
                        ))}
                        </ul>
                        
                        <Button 
                        variant={plan.popular ? "secondary" : "outline"}
                        size="lg" 
                        fullWidth
                        className={`font-bold ${!plan.popular ? 'border-2 border-white text-white hover:bg-white hover:text-orange-500' : ''}`}
                        >
                        Escolher {plan.name}
                        </Button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* Footer */}
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Academusa</span>
            </div>
            {/* Rever var para ano atual */}
            <p className="text-white/70 text-center">
            © 2025 Academusa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Plans;
