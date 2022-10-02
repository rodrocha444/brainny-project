import { Text, TextProps } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

interface TextDefaultProps extends TextProps {
  strong: boolean
}

export function TextDefault(props: TextDefaultProps) {
  return (
    <Text
      fontWeight={props.strong ? 500 : 400}
      color={defaultTheme.colors.white}
      fontSize={pxToRem(18)}
      lineHeight={pxToRem(27)}
      {...props}
    />
  )
}