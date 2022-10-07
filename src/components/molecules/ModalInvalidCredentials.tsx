import { Center, Modal, ModalContent, Text } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";

interface ModalInvalidCredentialsProps{
  isOpen: boolean
  onClose: () => void
  message: string
}

export function ModalInvalidCredentials(props: ModalInvalidCredentialsProps) {
  return (
    <Modal
      {...props}
    >
      <ModalContent p={pxToRem(10)}
        bg='red.400'
        color='white'
        mt={pxToRem(10)}
        boxShadow='2px 2px 10px rgba(0,0,0,0.5)'
      >
        <Center>
          <Text>{props.message}</Text>
        </Center>
      </ModalContent>
    </Modal>
  )
}