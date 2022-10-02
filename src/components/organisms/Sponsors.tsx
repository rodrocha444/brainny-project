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
      justify='space-between'
      my={pxToRem(46)}
    >
      {sponsorsLogos.map((logoSrc => <Image src={logoSrc} alt='fas' h={pxToRem(68)}/>))}
    </Flex>
  )
}