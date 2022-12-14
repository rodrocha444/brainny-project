import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import LogoColor from '../../assets/logo-color.svg';
import { H1 } from "../atoms/Headings";
import { PasswordInput } from "../atoms/PasswordInput";
import { login } from "../../api/operations";
import { ModalInvalidCredentials } from "./ModalInvalidCredentials";

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit() {
    try {
      localStorage.removeItem('token')
      const userType = await login(email, pass)
      navigate(userType === 'admin' ? '/dashboard' : '/meus-registros')
    }
    catch (err) {
      console.error('Dados inválidos')
      setIsModalVisible(true)
      setTimeout(() => setIsModalVisible(false), 3000)
    }
  }

  return (
    <>
      <FormControl maxW={pxToRem(300)}>
        <Flex direction='column' gap={pxToRem(30)}>
          <Image src={LogoColor} w='80%' />

          <H1 color={defaultTheme.colors.principalColor}>Faça login</H1>

          <Box>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id='email'
              type='email'
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="pass">Senha</FormLabel>
            <PasswordInput
              id='pass'
              placeholder="*************"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit}
            />
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
            onClick={handleSubmit}
            bg={defaultTheme.colors.principalColor}
            color={defaultTheme.colors.white}
            _hover={{
              bg: defaultTheme.colors.secundaryColor
            }}
            _disabled={{
              cursor: 'not-allowed'
            }}
          >
            Entrar
          </Button>
        </Flex>
      </FormControl>

      <ModalInvalidCredentials
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        message='Dados inválidos'
      />
    </>
  )
}