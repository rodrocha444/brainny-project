import { Flex, FlexProps } from "@chakra-ui/react";
import { PlanCard } from "../atoms/PlanCard";

export function Carousel(props: FlexProps) {
  return (
    <Flex {...props}>
      <PlanCard mx={-10} opacity={0.2} filter='blur(1px)' />
      <PlanCard mx={-10} transform='scale(1.2)' />
      <PlanCard mx={-10} opacity={0.2} filter='blur(1px)' />
    </Flex>

  )
}