import { Flex, Image } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import { ButtonWithBG, ButtonWithoutBG } from "../atoms/Buttons";
import LogoWhite from '../../assets/logo-white.svg';

export function Header() {
  return (
    <Flex
      as='header'
      justify='space-between'
      py={pxToRem(45)}
    >
      <Image src={LogoWhite} alt="Logotipo PontoGO" height={pxToRem(38)} />

      <Flex gap='1rem'>
        <ButtonWithoutBG>Início</ButtonWithoutBG>
        <ButtonWithoutBG>Planos</ButtonWithoutBG>
        <ButtonWithBG
          bgColor={["white", "secundaryColor"]}
          color={["principalColor", "white"]}
        >Fazer Login</ButtonWithBG>
      </Flex>
    </Flex>
  )
}