import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { ButtonWithBG } from "../atoms/Buttons";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

export function PlanCard(props: FlexProps) {
  return (
    <Flex
      direction='column'
      align='center'
      bg='rgba(255, 255, 255, 0.08)'
      border='1px solid #8A53FF'
      borderRadius={10}
      p={pxToRem(40)}
      color='white'
      {...props}
    >
      <Text
        fontSize={pxToRem(20)}
      >Plano Prata</Text>
      <Text
        fontWeight={800}
        fontSize={pxToRem(50)}
        lineHeight={1}
      >R$ 50</Text>
      <Text
        fontWeight={300}
        lineHeight={pxToRem(24)}
        color='#8A53FF'
      >Uso de 10 colaboradores</Text>
      <Flex>
        <CheckIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
        >Área de meus registros</Text>
      </Flex>
      <Flex>
        <CheckIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
        >Área de meus registros</Text>
      </Flex>
      <Flex>
        <CheckIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
        >Área de meus registros</Text>
      </Flex>
      <Flex opacity={0.3}>
        <CloseIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
        >Área de meus registros</Text>
      </Flex>
      <Flex opacity={0.3}>
        <CloseIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
        >Área de meus registros</Text>
      </Flex>
      <ButtonWithBG>Assinar Agora</ButtonWithBG>
    </Flex>
  )
}