import { Box, HStack, Table as TableChakra, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { defaultTheme } from '../../styles/defaultTheme'
import { pxToRem } from '../../utils/operations'

type Registers = {
  id: number
  colaborador: string
  data: string
  hora: string
}
const data = [
  
]
interface TableProps {
  ths: string[]
  data: Registers[]
}
export function Table({ ths, data }: TableProps) {
  ths = ['colaborador', 'data', 'hora']

  return (
    <TableChakra
      sx={{
        borderCollapse: 'separate',
        borderSpacing: `0 ${pxToRem(6)}`,
      }}
    >
      <Thead >
        <Tr>
          {
            ths.map(th => <Th
              fontFamily='unset'
              textTransform='capitalize'
              fontSize={pxToRem(16)}
            >{th}</Th>)
          }
        </Tr>
      </Thead>
      <Tbody>
        {data.map(value => (
          <Tr bg='white'>
            <Td borderLeftRadius='10px'>
              <HStack align='stretch'>
                <Box w='5px' bg={defaultTheme.colors.secundaryColor} borderRadius='30px' />
                <Box>
                  <Text
                    fontSize={pxToRem(18)}
                    fontWeight={700}
                    letterSpacing='0.02rem'
                  >{value.colaborador}</Text>
                  <Text
                    letterSpacing='0.02rem'
                    opacity='0.6'
                  >{new Intl.NumberFormat('pt-br', {
                    minimumIntegerDigits: 3,
                    useGrouping: false
                  }).format(value.id)}</Text>
                </Box>
              </HStack>
            </Td>
            <Td opacity={0.7}>{value.data}</Td>
            <Td borderRightRadius='10px' opacity={0.7}>{value.hora}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableChakra >
  )
}