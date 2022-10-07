import { CardType } from "../components/molecules/PlanCard";

export const cards: CardType[] = [
  {
    id: 1,
    title: 'Plano Bronze',
    price: 30,
    quantColaboradores: 5,
    features: [
      ' Área de meus registros',
      'Dashboard',
      'Acesso de 5 colaboradores',
    ],
    notFeatures: [
      'Suporte exclusivo',
      'Email corporativo'
    ]
  },
  {
    id: 2,
    title: 'Plano Prata',
    price: 50,
    quantColaboradores: 10,
    features: [
      ' Área de meus registros',
      'Dashboard',
      'Acesso de 10 colaboradores',
    ],
    notFeatures: [
      'Suporte exclusivo',
      'Email corporativo'
    ]
  },
  {
    id: 3,
    title: 'Plano Ouro',
    price: 100,
    quantColaboradores: 20,
    features: [
      ' Área de meus registros',
      'Dashboard',
      'Acesso de 20 colaboradores',
      'Suporte exclusivo',
    ],
    notFeatures: [
      'Email corporativo'
    ]
  },
]