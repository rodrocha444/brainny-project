import {
  Box, Button, Center, Flex, FormControl,
  FormLabel, Image, Input, Modal, ModalContent, Text
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

import LogoColor from '../../assets/logo-color.svg';
import { H1 } from "../atoms/Headings";
import { PasswordInput } from "../atoms/PasswordInput";
import { useState } from "react";
import { useMutation, useApolloClient } from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import { LOGIN_MUTATION, LOGIN_MUTATION_VARIABLES } from "../../api/mutations";
import { Login } from "../../pages/Login";

export function LoginForm() {
  const client = useApolloClient()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [authLogin, { loading }] = useMutation<any, LOGIN_MUTATION_VARIABLES>(LOGIN_MUTATION)

  function handleSubmit() {
    authLogin({
      variables: {
        identifier: email,
        password: pass,
      },
      onError: (error) => {
        console.error(error.message)
        setIsModalVisible(true)
        setTimeout(() => { return setIsModalVisible(false) }, 3000)
        setEmail('')
        setPass('')
      },
      onCompleted: (data) => {
        if (data.login.user.role.type === 'admin') navigate('/dashboard')
        if (data.login.user.role.type === 'user') navigate('/meus-registros')
      },
    })
    // if (email === 'admin' && pass === 'pass') navigate('/dashboard')
    // if (email === 'user' && pass === 'pass') navigate('/meus-registros')
    // else {
    //   console.error('dados invalidos')
    //   setIsModalVisible(true)
    //   setTimeout(() => { return setIsModalVisible(false) }, 3000)
    //   setEmail('')
    //   setPass('')
    // }
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
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              value={email}
            />
          </Box>

          <Box>
            <FormLabel htmlFor="pass">Senha</FormLabel>
            <PasswordInput
              id='pass'
              placeholder="*************"
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
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
            disabled={loading}
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