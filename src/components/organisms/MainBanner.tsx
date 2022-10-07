import { Flex, Image } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import MainImage from '../../assets/main-image.png'
import { Description } from "../molecules/Description";
import { DirectiveLocation } from "graphql";

export function MainBanner() {
  return (
    <Flex
      align='center'
      direction={['column-reverse', 'column-reverse', 'row']}
      py={pxToRem(30)}
      gap={[pxToRem(50), 0]}
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