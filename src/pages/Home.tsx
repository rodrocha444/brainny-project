import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import LogoWhite from '../assets/logo-white.svg'
import { pxToRem } from "../utils/operations";

export function Home() {
  return (
    <Box bg='principalColor' >
      <Container maxW='1000px' bgClip='border-box'>
        <Flex as='header'
          justify='space-between'
          py={pxToRem(45)}
          

        >
          <Image src={LogoWhite} alt="Logotipo PontoGO" height={pxToRem(38)} />
          <Flex gap={'1rem'}>
            <Button
              color='white'
              variant='ghost'
              _hover={
                { bgColor: 'secundaryColor' }
              }
              fontWeight={500}
            >
              Início
            </Button>
            <Button
              color='white'
              variant='ghost'
              _hover={
                { bgColor: 'secundaryColor' }
              }
              fontWeight={500}
            >
              Planos
            </Button>
            <Button
              color='principalColor'
              _hover={
                {
                  bgColor: 'secundaryColor',
                  color: 'white',
                }
              }
              fontWeight={500}
              px={pxToRem(38)}
              py={pxToRem(14)}
            >
              Fazer Login
            </Button>
          </Flex>

        </Flex>
      </Container >
    </Box>
  )
}