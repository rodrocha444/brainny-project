import { Box, Flex } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import { Option, Sidebar } from "../organisms/Sidebar";
import { Table } from "../molecules/Table";
import { RegisterButton } from "../molecules/RegisterButton";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";

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
          // ths={}
          // data={}
        />
      </Box>
    </Flex >
  )
}