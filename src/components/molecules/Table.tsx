import {
  Box,
  HStack,
  Table as TableChakra,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'

import { defaultTheme } from '../../styles/defaultTheme'
import { getDateDDMMAA, getTimeHHMM, pxToRem } from '../../utils/operations'

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
              key={th}
              fontFamily='unset'
              textTransform='capitalize'
              fontSize={pxToRem(16)}
            >{th}</Th>)
          }
        </Tr>
      </Thead>

      <Tbody>
        {data.map((value: any) => (
          <Tr bg='white' key={value.id}>
            <Td borderLeftRadius='10px'>
              <HStack align='stretch'>
                <Box w='5px' bg={defaultTheme.colors.secundaryColor} borderRadius='30px' />
                <Box>
                  <Text
                    fontSize={pxToRem(18)}
                    fontWeight={700}
                  >
                    {value.user.name}
                  </Text>

                  <Text opacity='0.6'>
                    {value.id}
                  </Text>
                </Box>
              </HStack>
            </Td>

            <Td opacity={0.7}>
              {getDateDDMMAA(value.created_at)}
            </Td>

            <Td borderRightRadius='10px' opacity={0.7}>
              {getTimeHHMM(value.created_at)}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </TableChakra >
  )
}