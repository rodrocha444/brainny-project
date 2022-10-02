import { Heading, HeadingProps } from "@chakra-ui/react";
import { pxToRem } from "../../utils/operations";

export function H1(props: HeadingProps) {
  return (
    <Heading
      as='h1'
      fontSize={pxToRem(40)}
      fontWeight={800}
      lineHeight={pxToRem(60)}
      color='white'
      {...props}
    />
  )
}