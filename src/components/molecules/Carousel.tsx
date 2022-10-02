import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, IconButton } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import { PlanCard } from "./PlanCard";

export function Carousel(props: FlexProps) {
  return (
    <Flex {...props} align='center'>
      <IconButton
        aria-label="Plano Posterior"
        icon={<ArrowBackIcon
          boxSize={pxToRem(25)}
        />}
        variant='ghost'
        color='white'
        _hover={{
          color: defaultTheme.colors.principalColor,
          backgroundColor: defaultTheme.colors.white
        }}
        mx={6}
      />
      <PlanCard mx={-1} selected={false} />
      <PlanCard mx={-1} selected={true} />
      <PlanCard mx={-1} selected={false} />

      <IconButton
        aria-label="Plano Posterior"
        icon={<ArrowForwardIcon
          boxSize={pxToRem(25)}
        />}
        variant='ghost'
        color='white'
        _hover={{
          color: defaultTheme.colors.principalColor,
          backgroundColor: defaultTheme.colors.white
        }}
        mx={6}
      />
    </Flex>
  )
}