import { Box, Button, Flex, FormControl, FormControlProps, FormLabel, Image, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

import LogoColor from '../../assets/logo-color.svg';
import { H1 } from "../atoms/Headings";
import { PasswordInput } from "../atoms/PasswordInput";

export function LoginForm() {
  const navigate = useNavigate();
  return (
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
        <Button
          onClick={() => navigate('/dashboard')}
          bg={defaultTheme.colors.principalColor}
          color={defaultTheme.colors.white}
          _hover={{
            bg: defaultTheme.colors.secundaryColor
          }}
        >
          Entrar
        </Button>
      </Flex>
    </FormControl>
  )
}