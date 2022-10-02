import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";

const socialLogos = [
  'src/assets/instagram-logo.png',
  'src/assets/facebook-logo.png',
  'src/assets/linkedin-logo.png',
]

export function Footer() {
  return (
    <Flex direction='column' align='center' gap={pxToRem(20)} my={pxToRem(20)}>
      <Box h='1px' w='100vw' bg='#8A53FF' />

      <Flex gap={pxToRem(40)}>
        <Flex direction='column' gap={pxToRem(5)} color='white'>
          <Text fontWeight={700}>@pontogo</Text>
          <Text fontWeight={300}>Se conecta com a gente</Text>
        </Flex>
        {socialLogos.map(logoSrc => <Image src={logoSrc} alt='' boxSize={pxToRem(60)} />)}
      </Flex>
      <Box h='1px' w='100vw' bg='#8A53FF' />

      <Flex gap={pxToRem(30)} align='center' py={pxToRem(30)}>
        <Box h='1px' flex={1} bg='#8A53FF' />
        <Text color='white' fontWeight={400}>PontoGo - Todos direitos reservados</Text>
        <Box flex={1} h={pxToRem(0.5)} w='100vw' bg='#8A53FF' />
      </Flex>
    </Flex>
  )
}