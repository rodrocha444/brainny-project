import { Button, ButtonProps, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react'
import { TimeIcon } from "@chakra-ui/icons";
import { H1 } from "../atoms/Headings";

export function RegisterButton(props: ButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        bg={defaultTheme.colors.principalColor}
        color={defaultTheme.colors.white}
        fontWeight={300}
        fontSize={pxToRem(16)}
        px={pxToRem(40)}
        _hover={{
          bg: defaultTheme.colors.secundaryColor
        }}
        onClick={onOpen}
        {...props}
      >
        Registrar Ponto
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />

        <ModalContent px={pxToRem(92)} py={pxToRem(60)} >
          <VStack>
            <ModalHeader>Registrar novo ponto</ModalHeader>
            <TimeIcon boxSize={pxToRem(88)} color={defaultTheme.colors.principalColor} />
            <H1
              fontFamily='Poppins'
              color={defaultTheme.colors.principalColor}
              fontWeight='700'
              fontSize={pxToRem(30)}
            >10:30</H1>
            <Text>20/20/22</Text>
            <Button
              color={defaultTheme.colors.white}
              bg={defaultTheme.colors.principalColor}
              fontWeight='300'
              w={pxToRem(200)}
              _hover={{
                bg: defaultTheme.colors.secundaryColor
              }}
            >Bater Ponto</Button>
            <Button variant='outline'
              color={defaultTheme.colors.principalColor}
              borderColor={defaultTheme.colors.principalColor}
              fontWeight='300'
              w={pxToRem(200)}
              onClick={onClose}
            >
              Cancelar
            </Button>
          </VStack>
          <ModalCloseButton />

        </ModalContent>

      </Modal>
    </>
  )
}