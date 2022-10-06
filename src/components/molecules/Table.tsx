import { Box, HStack, Table as TableChakra, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { defaultTheme } from '../../styles/defaultTheme'
import { pxToRem } from '../../utils/operations'

export type TableData = {
  id: string
  colaborador: string
  data: string
  hora: string
}

interface TableProps {
  data: any
}
export function Table({ data }: TableProps) {
  const ths = ['colaborador', 'data', 'hora']
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
        {data.map((value: any) => (
          <Tr bg='white'>
            <Td borderLeftRadius='10px'>
              <HStack align='stretch'>
                <Box w='5px' bg={defaultTheme.colors.secundaryColor} borderRadius='30px' />
                <Box>
                  <Text
                    fontSize={pxToRem(18)}
                    fontWeight={700}
                    letterSpacing='0.02rem'
                  >{value.user.name}</Text>
                  <Text
                    letterSpacing='0.02rem'
                    opacity='0.6'
                  >{new Intl.NumberFormat('pt-br', {
                    minimumIntegerDigits: 3,
                    useGrouping: false
                  }).format(Number(value.id))}</Text>
                </Box>
              </HStack>
            </Td>
            <Td opacity={0.7}>{new Intl.DateTimeFormat('pt-br').format(new Date(value.created_at))}</Td>
            <Td borderRightRadius='10px' opacity={0.7}>{new Intl.DateTimeFormat('pt-br', { timeStyle: 'short' }).format(new Date(value.created_at))}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableChakra >
  )
}