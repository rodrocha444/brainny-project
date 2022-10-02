import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";

export function ListCheck() {
  return (
    <Flex gap={pxToRem(15)} direction='column'>
      <Flex gap={pxToRem(12)} alignItems='center'>
        <CheckIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
          letterSpacing={0.1}
        >Área de meus registros</Text>
      </Flex>
      <Flex gap={pxToRem(12)} alignItems='center'>
        <CheckIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
          letterSpacing={0.1}
        >Área de meus registros</Text>
      </Flex>
      <Flex gap={pxToRem(12)} alignItems='center'>
        <CheckIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
          letterSpacing={0.1}
        >Área de meus registros</Text>
      </Flex>
      <Flex gap={pxToRem(12)} alignItems='center' opacity={0.3} mb={pxToRem(20)}>
        <CloseIcon />
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
          letterSpacing={0.1}
        >Área de meus registros</Text>
      </Flex>
    </Flex>
  )
}