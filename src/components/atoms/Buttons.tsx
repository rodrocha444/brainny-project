import { Button, ButtonProps } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";

export function ButtonWithoutBG(props: ButtonProps) {
  return (
    <Button
      color='white'
      variant='ghost'
      _hover={
        { bgColor: 'secundaryColor' }
      }
      fontWeight={500}
      {...props}
    />
  )
}

export function ButtonWithBG(props: ButtonProps) {
  return (
    <Button
      color='principalColor'
      _hover={
        {
          bgColor: 'secundaryColor',
          color: 'white',
        }
      }
      fontWeight={500}
      px={pxToRem(38)}
      py={pxToRem(14)}
      {...props}
    />

  )
}