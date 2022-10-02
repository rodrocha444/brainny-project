import { extendTheme } from "@chakra-ui/react";
import { pxToRem } from "../utils/operations";

const configTheme = {
  colors: {
    principalColor: "#330693",
    secundaryColor: "#8A53FF",
    grey: "#20292E",
    white: "#FFFFFF",
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        lineHeight: pxToRem(24),
      },
      body: {
        fontFamily: 'Poppins'
      }
    }
  }
}
export const defaultTheme = extendTheme(configTheme) as typeof configTheme
export type ColorsThemeType = keyof typeof configTheme.colors