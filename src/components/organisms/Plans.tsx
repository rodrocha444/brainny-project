import { Flex, Text } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import { H1 } from "../atoms/Headings";
import { Carousel } from "../molecules/Carousel";

export function Plans() {
  return (
    <Flex direction='column' align='center'>
      <H1>Encontre o plano perfeito</H1>
      <Text
        maxW={pxToRem(640)}
        color={defaultTheme.colors.white}
        mt='10px'
      >
        Escolha o plano que melhor se encaixa na sua empresa e  faça sua assinatura, dentro de 72h iremos liberar seus acessos.
      </Text>

      <Carousel my={pxToRem(80)} />
    </Flex>
  )
}