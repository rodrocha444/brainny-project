import {
  Box, Button, Center, Flex, FormControl,
  FormLabel, Image, Input, Modal, ModalContent, Text
} from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

import LogoColor from '../../assets/logo-color.svg';
import { H1 } from "../atoms/Headings";
import { PasswordInput } from "../atoms/PasswordInput";
import { useEffect, useState } from "react";
import { authenticate, login } from "../../api/operations";
import { useNavigate } from "react-router-dom";

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
      <FormControl maxW={pxToRem(300)} isRequired>
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
            />
          </Box>

          <Box>
            <FormLabel htmlFor="pass">Senha</FormLabel>
            <PasswordInput
              id='pass'
              placeholder="*************"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
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

      <Modal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <ModalContent p={pxToRem(10)}
          bg='red.400'
          color='white'
          mt={pxToRem(10)}
          boxShadow='2px 2px 10px rgba(0,0,0,0.5)'
        >
          <Center>
            <Text>Dados Inválidos</Text>
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}