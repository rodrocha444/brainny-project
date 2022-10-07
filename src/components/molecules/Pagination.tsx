import {  ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { pxToRem } from "../../utils/operations";

export function Pagination() {
  const [selected, setSelected] = useState(1)
  const pages = 3
  function constructPages() {
    let result = []
    for (let i = 0; i < pages; i++) {
      result.push(<Center
        key={i}
        boxSize={pxToRem(30)}
        borderRadius='6px'
        border='0.5px solid #20292E'
        opacity={selected === i + 1 ? '0.8' : '0.3'}
        transition='all 0.2s'
        margin='0'
        _hover={{
          cursor: 'pointer',
          opacity: 1
        }}
      >{i + 1}</Center>)
    }
    return result
  }
  return (
    <Flex gap={pxToRem(5)}>
      <Center
        boxSize={pxToRem(30)}
        borderRadius='6px'
        border='0.5px solid #20292E'
        opacity='0.3'
        transition='all 0.2s'
        _hover={{
          cursor: 'pointer',
          opacity: 1
        }}
      >
        <ChevronLeftIcon />
      </Center>

      {
        constructPages()
      }

      <Center
        boxSize={pxToRem(30)}
        borderRadius='6px'
        border='0.5px solid #20292E'
        opacity='0.3'
        transition='all 0.2s'
        _hover={{
          cursor: 'pointer',
          opacity: 1
        }}
      >
        <ChevronRightIcon />
      </Center>
    </Flex>
  )
}