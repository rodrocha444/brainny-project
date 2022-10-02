import { Box, Flex, Image } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";

const socialLogos = [
  'src/assets/instagram-logo.png',
  'src/assets/facebook-logo.png',
  'src/assets/linkedin-logo.png',
]

export function Footer() {
  return (
    <Flex direction='column' align='center'>
      <Box h='2px' w='100vw' bg='#fff' />
      <Flex>
        {socialLogos.map(logoSrc => <Image src={logoSrc} alt='' boxSize={pxToRem(60)}/>)}
      </Flex>
      <Box h='2px' w='100vw' bg='#fff' />
    </Flex>
  )
}