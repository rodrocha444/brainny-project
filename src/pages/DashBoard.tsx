import { EditIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import LogoColor from '../assets/logo-color.svg';
import { defaultTheme } from "../styles/defaultTheme";
import { pxToRem } from "../utils/operations";

export function Dashboard() {
  return (
    <Flex h='100vh' border='4px solid principalColor'>
      <Flex
        w='15%'
        boxShadow='0px 4px 10px rgba(0, 0, 0, 0.1)'
        direction='column'
        justifyContent='space-between'
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

      <Box w='85%' bg='#F2F2F2'>
        <TableContainer p={pxToRem(30)} >
          <Table variant='unstyled' sx={{
            borderCollapse: 'separate',
            borderSpacing: `0 ${pxToRem(12)}`,
          }}
          >
            <Thead >
              <Tr>
                <Th
                  w={pxToRem(250)}
                  fontFamily='unset'
                  textTransform='capitalize'
                  fontSize={pxToRem(16)}
                >Colaborador</Th>
                <Th
                  w={pxToRem(100)}
                  fontFamily='unset'
                  textTransform='capitalize'
                  fontSize={pxToRem(16)}
                >Data</Th>
                <Th
                  fontFamily='unset'
                  textTransform='capitalize'
                  fontSize={pxToRem(16)}
                >Hora</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg='white'>
                <Td w='min-content' borderLeftRadius='10px'>
                  <HStack align='stretch'>
                    <Box w='5px' bg={defaultTheme.colors.secundaryColor} borderRadius='30px' />
                    <Box>
                      <Text>Joao Silva</Text>
                      <Text>0001</Text>
                    </Box>
                  </HStack>
                </Td>
                <Td w='min-content'>11/10/19</Td>
                <Td w='min-content' borderRightRadius='10px'>12:00h</Td>
              </Tr>
              <Tr bg='white'>
                <Td w='min-content' borderLeftRadius='10px'>
                  <HStack align='stretch'>
                    <Box w='5px' bg={defaultTheme.colors.secundaryColor} borderRadius='30px' />
                    <Box>
                      <Text>Joao Silva</Text>
                      <Text>0001</Text>
                    </Box>
                  </HStack>
                </Td>
                <Td w='min-content'>11/10/19</Td>
                <Td w='min-content' borderRightRadius='10px'>12:00h</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex >
  )
}