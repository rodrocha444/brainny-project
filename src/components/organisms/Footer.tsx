import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import { socialMedias } from "../../data/socialMedias";
import { pxToRem } from "../../utils/operations";

export function Footer() {
  return (
    <Flex direction='column' align='center' gap={pxToRem(20)} my={pxToRem(20)}>
      <Box h='1px' w='100vw' bg='#8A53FF' />

      <Flex gap={pxToRem(40)}>
        <Flex direction='column' gap={pxToRem(5)} color='white'>
          <Text fontWeight={700}>@pontogo</Text>
          <Text fontWeight={300}>Se conecta com a gente</Text>
        </Flex>
        {socialMedias.map((logo, index) => (
          <Link key={index} href={logo.href} target="_blank" transition='all 0.2s' _hover={{ filter: 'opacity(0.8)' }}>
            <Image src={logo.src} alt='' boxSize={pxToRem(60)} />
          </Link>
        ))}
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