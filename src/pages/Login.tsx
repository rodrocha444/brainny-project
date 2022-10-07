import {  Container, Flex } from "@chakra-ui/react";

import { pxToRem } from "../utils/operations";
import { WelcomeBanner } from "../components/organisms/WelcomeBanner";
import { LoginForm } from "../components/molecules/LoginForm";

export function Login() {
  return (
    <Container maxW='1000px' centerContent h='100vh'>
      <Flex align='center' gap={pxToRem(150)} h='100%' direction={['column', 'row']}>
        <WelcomeBanner />

        <LoginForm />
      </Flex>
    </Container>
  )
}