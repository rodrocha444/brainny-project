import { Flex, Image } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import MainImage from '../../assets/main-image.png'
import { Description } from "../molecules/Description";

export function MainBanner() {
  return (
    <Flex
      align='center'
      py={pxToRem(30)}
    >
      <Description />
      <Image
        w={pxToRem(450)}
        src={MainImage}
        alt={'Imagem ilustrativa sobre o controle de pontos'}
      />
    </Flex>
  )
}