import { Flex, Text } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";
import { H1 } from "../atoms/Headings";
import { TextDefault } from "../atoms/Texts";
import { Carousel } from "../molecules/Carousel";

export function Plans() {
  return (
    <Flex direction='column' textAlign='center' align='center' gap={pxToRem(20)}>
      <H1>Encontre o plano perfeito</H1>
      <TextDefault
        strong={false}
        maxW={pxToRem(640)}
      >
        Escolha o plano que melhor se encaixa na sua empresa e  faça sua assinatura, dentro de 72h iremos liberar seus acessos.
      </TextDefault>

      <Carousel my={pxToRem(90)} />
    </Flex>
  )
}