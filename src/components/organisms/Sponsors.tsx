import { Flex, Image } from "@chakra-ui/react";

import { sponsorsLogos } from "../../data/sponsorsLogos";
import { pxToRem } from "../../utils/operations";

export function Sponsors() {
  return (
    <Flex
      align='center'
      justify='space-around'
      direction={['column', 'column', 'row']}
      gap={[pxToRem(20), pxToRem(20), 0]}
      my={[pxToRem(40), pxToRem(40), pxToRem(90)]}
    >

      {sponsorsLogos.map((logoSrc => (
        <Image
          key={logoSrc}
          src={logoSrc}
          alt='Empresas Envolvidas'
          h={pxToRem(60)}
        />
      )))}

    </Flex>
  )
}