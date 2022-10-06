import { EditIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import LogoColor from '../../assets/logo-color.svg';
import { ReactNode } from "react";
import { gql, useApolloClient, useQuery } from "@apollo/client";
import { Navigate, useNavigate } from "react-router-dom";

export type Option = {
  description: string
  icon: ReactNode
}

interface SidebarProps {
  options: Option[]
}
export function Sidebar(props: SidebarProps) {
  const client = useApolloClient()
  const navigate = useNavigate()
  return (
    <Flex
      maxW={pxToRem(200)}
      boxShadow='0px 4px 10px rgba(0, 0, 0, 0.1)'
      direction='column'
      justifyContent='space-between'

    >
      <Box >
        <Image src={LogoColor} alt='Logotipo do PontoGo' p={pxToRem(30)} />
        {
          props.options.map(option => <HStack
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
      <Button leftIcon={<WarningIcon />} textAlign='left'
        onClick={() => {
          client.resetStore()
          localStorage.removeItem('token')
          navigate('/')
        }}
      >
        Sair
      </Button>
    </Flex>
  )
}