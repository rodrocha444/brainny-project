import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import { ButtonWithBG, ButtonWithoutBG } from "../atoms/Buttons";
import { H1 } from "../atoms/Headings";
import MainImage from '../../assets/main-image.png'

export function MainBanner() {
  return (
    <Flex
      align='flex-end'
    >
      <Flex
        direction='column'
        gap='1rem'
      >
        <Box maxW={520}>
          <Heading
            as='h3'
            fontSize={pxToRem(24)}
            fontWeight={300}
            letterSpacing='0.165em'
            lineHeight={pxToRem(36)}
            textTransform='uppercase'
            color='white'
          >Esquece o ponto manual</Heading>
          <H1>
            Chegou a nova realidade para {' '}
            <Text
              display='inline'
              color={defaultTheme.colors.secundaryColor}
            >Controle de Pontos</Text>
          </H1>
        </Box>
        <Text
          w={pxToRem(476)}
          fontWeight={500}
          color={defaultTheme.colors.white}
          fontSize={pxToRem(18)}
          lineHeight={pxToRem(27)}
        >
          Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma Dashboard intuitiva.
        </Text>
        <Flex gap='1rem'>
          <ButtonWithBG width={pxToRem(160)}>Assinar agora</ButtonWithBG>
          <ButtonWithoutBG>Ver planos</ButtonWithoutBG>
        </Flex>
      </Flex>
      <Image w={pxToRem(550)} src={MainImage} alt={'Imagem ilustrativa sobre o controle de pontos'} />
    </Flex>
  )
}