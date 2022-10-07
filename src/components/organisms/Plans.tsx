import { Flex, FlexProps } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import { H1 } from "../atoms/Headings";
import { TextDefault } from "../atoms/Texts";
import { Carousel } from "./Carousel";

export function Plans(props: FlexProps) {
  return (
    <Flex direction='column' textAlign='center' align='center' gap={pxToRem(20)} {...props}>
      <H1>Encontre o plano perfeito</H1>
      <TextDefault
        fontWeight={300}
        maxW={pxToRem(640)}
      >
        Escolha o plano que melhor se encaixa na sua empresa e  faça sua assinatura, dentro de 72h iremos liberar seus acessos.
      </TextDefault>

      <Carousel mt={pxToRem(30)} mb={pxToRem(90)} />
    </Flex>
  )
}