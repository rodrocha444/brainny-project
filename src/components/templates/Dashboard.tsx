import { Box, Flex } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import { Option, Sidebar } from "../organisms/Sidebar";
import { Table } from "../molecules/Table";
import { RegisterButton } from "../molecules/RegisterButton";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Pagination } from "../molecules/Pagination";
import { useQuery } from "@apollo/client";
import { GET_USERS_EMAIL } from "../../api/querys";

const optionsColaborador: Option[] = [
  {
    description: 'Meus Registros',
    icon: <CalendarIcon />
  },
]
const optionsAdmin: Option[] = [
  {
    description: 'Dashboard',
    icon: <EditIcon />
  },
]
interface DashboardProps {
  userType: 'admin' | 'colaborador'
}
export function Dashboard(props: DashboardProps) {
  return (
    <Flex h='100vh'>
      <Sidebar options={
        props.userType === 'colaborador' ? optionsColaborador : optionsAdmin
      } />

      <Box flex='1' bg='#F2F2F2' p={pxToRem(30)}>
        {props.userType === 'colaborador' &&
          <RegisterButton />
        }
        <Table
          ths={['colaborador', 'data', 'hora']}
          data={[
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
              colaborador: 'Miriam',
              data: '13/10/18',
              hora: '12:10h'
            },
          ]}
        />
        <Pagination />
      </Box>
    </Flex >
  )
}