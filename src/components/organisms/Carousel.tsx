import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, IconButton } from "@chakra-ui/react";
import { useState } from "react";

import { cards } from "../../data/cards";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import { PlanCard } from "../molecules/PlanCard";

export function Carousel(props: FlexProps) {
  const [selectedCard, setSelectedCard] = useState(2)

  function updateSelectedCard(action: 'INCREMENT' | 'DECREMENT') {
    switch (action) {
      case 'INCREMENT':
        selectedCard < cards.length && setSelectedCard(prevState => prevState += 1)
        break
      case 'DECREMENT':
        selectedCard > 1 && setSelectedCard(prevState => prevState -= 1)
        break
    }
  }

  return (
    <Flex align='center' justifyContent='center' {...props} position='relative' w={'100vw'}>
      <IconButton
        position='absolute'
        left='0'
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
        onClick={() => updateSelectedCard('DECREMENT')}
        zIndex={1}
        mx={10}
      />

      {
        cards.map(card => <PlanCard
          key={card.id}
          data={card}
          mx={[pxToRem(-152), pxToRem(-152), pxToRem(-30)]}
          selected={card.id === selectedCard}
        />)
      }

      <IconButton
        position='absolute'
        right='0'
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
        onClick={() => updateSelectedCard('INCREMENT')}
        mx={10}
      />
    </Flex>
  )
}