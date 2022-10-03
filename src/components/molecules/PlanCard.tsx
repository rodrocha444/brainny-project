import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { ButtonWithBG } from "../atoms/Buttons";
import { pxToRem } from "../../utils/operations";
import { defaultTheme } from "../../styles/defaultTheme";
import { ListCheck } from "../atoms/ListCheck";

const notSelectedStyle = {
  opacity: 0.2,
  filter: 'blur(1px)',
  userSelect: 'none'
}

const selectedStyle = {
  transform: 'scale(1.2)'
}

interface PlanCardProps extends FlexProps {
  selected: boolean
}
export function PlanCard(props: PlanCardProps) {
  return (
    <Flex
      sx={props.selected ? selectedStyle : notSelectedStyle}
      direction='column'
      align='center'
      bg='rgba(255, 255, 255, 0.08)'
      border='1px solid #8A53FF'
      borderRadius={10}
      p={pxToRem(40)}
      color={defaultTheme.colors.white}
      gap={pxToRem(10)}
      fontSize={14}
      {...props}
    >

      <Text fontSize={pxToRem(20)}>Plano Prata</Text>

      <Box textAlign='center'>
        <Text
          fontWeight={800}
          fontSize={pxToRem(50)}
          lineHeight={1}
        >R$ 50</Text>
        <Text
          fontWeight={300}
          lineHeight={pxToRem(24)}
          color='#8A53FF'
        >Uso de 10 colaboradores</Text>
      </Box>

      <ListCheck />
      
      {props.selected && <ButtonWithBG
        bgColor={["secundaryColor", "principalColor"]}
        color={["white", "white"]}
        w={pxToRem(160)}
      >Assinar Agora</ButtonWithBG>
      }

    </Flex>
  )
}