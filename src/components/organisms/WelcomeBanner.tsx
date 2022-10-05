import { Flex, Image } from "@chakra-ui/react";

import { defaultTheme } from "../../styles/defaultTheme";
import { H1 } from "../atoms/Headings";
import { TextDefault } from "../atoms/Texts";
import { pxToRem } from "../../utils/operations";

import MainLoginImage from '../../assets/main-login-image.png';

export function WelcomeBanner() {
  return (
    <Flex align='center' direction='column' >
      <Image src={MainLoginImage} alt='Login' w={pxToRem(400)} />

      <H1 color={defaultTheme.colors.principalColor} textAlign='center'>
        Bem vindo ao PontoGo
      </H1>

      <TextDefault
        textAlign='center'
        color={defaultTheme.colors.principalColor}
        maxW={pxToRem(340)}
        fontSize={pxToRem(22)}
        fontWeight='300'
      >
        Aqui você fará toda gestão do seu sistema de pontos.
      </TextDefault>
    </Flex>
  )
}