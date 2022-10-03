import { Box, Button, Container, Flex, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import MainLoginImage from '../assets/main-login-image.png';
import LogoColor from '../assets/logo-color.svg';
import { H1 } from "../components/atoms/Headings";
import { TextDefault } from "../components/atoms/Texts";
import { defaultTheme } from "../styles/defaultTheme";
import { pxToRem } from "../utils/operations";
import { PasswordInput } from "../components/atoms/PasswordInput";
import { ButtonWithBG } from "../components/atoms/Buttons";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <Container maxW='1000px' centerContent h='100vh'>
      <Flex align='center' gap={pxToRem(150)} h='100%' direction={['column','row']}>
        <Flex align='center' direction='column' >
          <Image src={MainLoginImage} alt='Login' w={pxToRem(400)} />

          <H1 color={defaultTheme.colors.principalColor} textAlign='center'>
            Bem vindo ao PontoGo
          </H1>

          <TextDefault
            textAlign='center'
            strong={false}
            color={defaultTheme.colors.principalColor}
            maxW={pxToRem(340)}
            fontSize={pxToRem(22)}
            fontWeight='300'
          >
            Aqui você fará toda gestão do seu sistema de pontos.
          </TextDefault>
        </Flex>

        <FormControl maxW={pxToRem(300)}>
          <Flex direction='column' gap={pxToRem(30)}>
            <Image src={LogoColor} w='80%' />

            <H1 color={defaultTheme.colors.principalColor}>Faça login</H1>

            <Box>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id='email' type='email' placeholder="exemplo@email.com" />
            </Box>

            <Box>
              <FormLabel htmlFor="pass">Senha</FormLabel>
              <PasswordInput id='pass' placeholder="*************" />
              <Button
                variant='link'
                color={defaultTheme.colors.principalColor}
                fontWeight='400'
                fontSize={pxToRem(14)}
                alignSelf='flex-start'
              >
                Esqueci minha senha
              </Button>
            </Box>
            <ButtonWithBG
              bgColor={['principalColor', 'midColor']}
              color={['white', "secundaryColor"]}
              onClick={() => navigate('/dashboard')}
            >
              Entrar
            </ButtonWithBG>
          </Flex>
        </FormControl>
      </Flex>
    </Container>
  )
}