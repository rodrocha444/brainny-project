import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import { CardType, PlanCard } from "./PlanCard";

const cards: CardType[] = [
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

export function Carousel(props: FlexProps) {
  const [selectedCard, setSelectedCard] = useState(1)

  function updateSelectedCard(action: 'INCREMENT' | 'DECREMENT') {
    if (action === 'INCREMENT' && selectedCard < cards.length) {
      setSelectedCard(prevState => prevState += 1)
      console.log('ola')
    }
    if (action === 'DECREMENT' && selectedCard > 1) {
      setSelectedCard(prevState => prevState -= 1)
      console.log('ola')
    }
  }
  return (
    <Flex {...props} align='center'>
      <IconButton
        aria-label="Plano Posterior"
        icon={<ArrowBackIcon
          boxSize={pxToRem(25)}
        />}
        variant='ghost'
        color='white'
        _hover={{
          color: defaultTheme.colors.principalColor,
          backgroundColor: defaultTheme.colors.white
        }}
        mx={6}
        onClick={() => updateSelectedCard('DECREMENT')}
      />

      {
        cards.map(card => <PlanCard
          key={card.id}
          data={card}
          mx={-2}
          selected={card.id === selectedCard}
        />)
      }

      <IconButton
        aria-label="Plano Posterior"
        icon={<ArrowForwardIcon
          boxSize={pxToRem(25)}
        />}
        variant='ghost'
        color='white'
        _hover={{
          color: defaultTheme.colors.principalColor,
          backgroundColor: defaultTheme.colors.white
        }}
        mx={6}
        onClick={() => updateSelectedCard('INCREMENT')}
      />
    </Flex>
  )
}