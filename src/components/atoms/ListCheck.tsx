import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";

interface ListCheckProps {
  listChecked: string[]
  listNotChecked: string[]
}
export function ListCheck(props: ListCheckProps) {
  return (
    <Flex gap={pxToRem(10)} direction='column' align='flex-start'>
      {props.listChecked.map(check => (
        <Flex key={check} gap={pxToRem(12)} alignItems='center' >
          <CheckIcon />
          <Text
            textAlign='left'
            fontWeight={300}
            fontSize={14}
            whiteSpace='nowrap'
          >{check}</Text>
        </Flex>
      ))}

      {props.listNotChecked.map(check => (
        <Flex key={check} gap={pxToRem(12)} alignItems='center' opacity={0.3}>
          <CloseIcon />
          <Text
            fontWeight={300}
          >{check}</Text>
        </Flex>
      ))}
    </Flex>
  )
}