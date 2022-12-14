import { WarningIcon } from "@chakra-ui/icons";
import { Box, Button, calc, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import LogoColor from '../../assets/logo-color.svg';
import { logout } from "../../api/operations";

export type Option = {
  description: string
  icon: ReactNode
}

interface SidebarProps {
  options: Option[]
}
export function Sidebar(props: SidebarProps) {
  const navigate = useNavigate()
  return (
    <Flex
      maxW={pxToRem(200)}
      boxShadow='0px 4px 10px rgba(0, 0, 0, 0.1)'
      direction='column'
      position='relative'
    >
      <Box >
        <Image src={LogoColor} alt='Logotipo do PontoGo' p={pxToRem(30)} />
        {
          props.options.map(option => <HStack
            key={option.description}
            borderY='1px solid rgba(0, 0, 0, 0.08)'
            borderLeft='4px solid #330693'
            px={pxToRem(20)}
            py={pxToRem(40)}
            cursor='pointer'
            color={defaultTheme.colors.principalColor}
            transition='all 0.2s'
            _hover={
              {
                filter: 'opacity(0.5)',
              }
            }
          >
            {option.icon}
            <Text>{option.description}</Text>
          </HStack>)
        }
      </Box>
      <Button
        leftIcon={<WarningIcon />}
        colorScheme='blackAlpha'
        onClick={() => {
          logout()
          navigate('/login')
        }}
        position='fixed'
        top={`calc(100vh - 3rem)`}
        w={pxToRem(200)}
      >
        Sair
      </Button>
    </Flex>
  )
}