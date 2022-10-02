import { Button, ButtonProps } from "@chakra-ui/react";
import { ColorsThemeType, defaultTheme } from "../../styles/defaultTheme";

import { pxToRem } from "../../utils/operations";

export function ButtonWithoutBG(props: ButtonProps) {
  return (
    <Button
      color='white'
      variant='ghost'
      _hover={
        { bgColor: defaultTheme.colors.midColor }
      }
      fontWeight={500}
      {...props}
    />
  )
}

interface ButtonWithBGProps extends ButtonProps {
  bgColor: [ColorsThemeType, ColorsThemeType]
  color: [ColorsThemeType, ColorsThemeType]
}

export function ButtonWithBG(props: ButtonWithBGProps) {
  return (
    <Button
      {...props}
      _hover={
        {
          bgColor: props.bgColor[1],
          color: props.color[1]
        }
      }
      color={props.color[0]}
      bgColor={props.bgColor[0]}
      fontWeight={500}
      px={pxToRem(38)}
      py={pxToRem(14)}
    />
  )
}