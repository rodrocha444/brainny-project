import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
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
        lineHeight: 1,
      },
      body: {
        fontFamily: 'Poppins'
      }
    }
  }
})