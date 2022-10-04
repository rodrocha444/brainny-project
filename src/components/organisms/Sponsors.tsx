import { Flex, Image } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";
const sponsorsLogos = [
  'src/assets/brainny-logo.png',
  'src/assets/amo-pet-logo.png',
  'src/assets/dot-bus-logo.png',
  'src/assets/go-study-logo.png',
]
export function Sponsors() {
  return (
    <Flex
      align='center'
      justify='space-around'
      my={pxToRem(90)}
    >
      {sponsorsLogos.map((logoSrc => <Image key={logoSrc} src={logoSrc} alt='Empresas Envolvidas' h={pxToRem(60)} />))}
    </Flex>
  )
}