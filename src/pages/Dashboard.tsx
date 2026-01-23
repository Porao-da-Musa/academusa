import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarDashboard } from '../components/NavBarDashboard';

interface CardInfo {
  title: string;
  description: string;
  route: string;
}

const cards: CardInfo[] = [
  { title: 'Financeiro', description: 'Ver receitas e despesas', route: '/dashboard/financeiro' },
  { title: 'Relatórios', description: 'Performance e dados', route: '/dashboard/relatorios' },
  { title: 'Alunos', description: 'Gerencie seus alunos', route: '/dashboard/alunos' },
  { title: 'Treinos', description: 'Plano de treinos', route: '/dashboard/treinos' },
];

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-1000 pt-20">
      <NavbarDashboard />

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.route}
            className="bg-brand-1050 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition"
            onClick={() => navigate(card.route)}
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
