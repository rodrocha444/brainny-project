import { EditIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { defaultTheme } from "../../styles/defaultTheme";
import { pxToRem } from "../../utils/operations";
import LogoColor from '../../assets/logo-color.svg';

export function Sidebar() {
  return (
    <Flex
      w='15%'
      boxShadow='0px 4px 10px rgba(0, 0, 0, 0.1)'
      direction='column'
      justifyContent='space-between'
      sx={{
        zIndex: 1
      }}
    >
      <Box>
        <Image src={LogoColor} alt='Logotipo do PontoGo' p={pxToRem(30)} />
        <HStack
          justify='center'
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
          <EditIcon />
          <Text>Dashboard</Text>
        </HStack>
      </Box>
      <Button leftIcon={<WarningIcon />} textAlign='left'>
        Sair
      </Button>
    </Flex>
  )
}