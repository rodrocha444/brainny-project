import { Box, HStack, Table as TableChakra, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { defaultTheme } from '../../styles/defaultTheme'
import { pxToRem } from '../../utils/operations'

const data = [
  {
    id: 1,
    colaborador: 'Joao Silva',
    data: '11/10/19',
    hora: '12:00h'
  },
  {
    id: 2,
    colaborador: 'Rodrigo Rocha',
    data: '01/10/22',
    hora: '06:00h'
  },
  {
    id: 3,
    colaborador: 'Miriam Raquel',
    data: '13/10/18',
    hora: '12:00h'
  },
]

export function Table() {
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
        {data.map(value => (
          <Tr bg='white'>
            <Td borderLeftRadius='10px'>
              <HStack align='stretch'>
                <Box w='5px' bg={defaultTheme.colors.secundaryColor} borderRadius='30px' />
                <Box>
                  <Text>{value.colaborador}</Text>
                  <Text>{new Intl.NumberFormat('pt-br', {
                    minimumIntegerDigits: 3,
                    useGrouping: false
                  }).format(value.id)}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>{value.data}</Td>
            <Td borderRightRadius='10px'>{value.hora}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableChakra >
  )
}