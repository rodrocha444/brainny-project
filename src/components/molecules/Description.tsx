import { Box, Flex, Text } from "@chakra-ui/react";

import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import { ButtonWithBG, ButtonWithoutBG } from "../atoms/Buttons";
import { H1, HSpaced } from "../atoms/Headings";
import { TextDefault } from "../atoms/Texts";

export function Description() {
  return (
    <Flex
      direction='column'
      gap='1rem'
    >
      <Box maxW={520}>
        <HSpaced>Esquece o ponto manual</HSpaced>
        <H1>Chegou a nova realidade para {' '}
          <Text
            display='inline'
            color={defaultTheme.colors.secundaryColor}
          >Controle de Pontos</Text>
        </H1>
      </Box>

      <TextDefault>
        Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma Dashboard intuitiva.
      </TextDefault>

      <Flex gap='1rem'>
        <ButtonWithBG
          bgColor={["secundaryColor", "midColor"]}
          color={["white", "white"]}
          width={pxToRem(160)}
        >Assinar agora</ButtonWithBG>
        <ButtonWithoutBG
          variant={"outline"}
          width={pxToRem(160)}
          onClick={() => location.href = '#plans'}
        >Ver planos</ButtonWithoutBG>
      </Flex>
    </Flex>
  )
}