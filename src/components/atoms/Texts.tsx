import { Text, TextProps } from "@chakra-ui/react";

import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";

export function TextDefault(props: TextProps) {
  return (
    <Text
      color={defaultTheme.colors.white}
      fontSize={pxToRem(18)}
      lineHeight={pxToRem(27)}
      {...props}
    />
  )
}