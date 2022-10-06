import { Box, Flex } from "@chakra-ui/react";

import { constructDataForTable, pxToRem } from "../../utils/operations";
import { Option, Sidebar } from "../organisms/Sidebar";
import { Table, TableData } from "../molecules/Table";
import { RegisterButton } from "../molecules/RegisterButton";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Pagination } from "../molecules/Pagination";
import { authenticate, getRegisteredTimes } from "../../api/operations";
import { useEffect, useState } from "react";
import { RegisteredTime } from "../../gql/graphql";

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
  const [data, setData] = useState([])
  useEffect(() => {
    updateData()
  }, [])

  async function updateData() {
    if (props.userType === 'admin') {
      const data = await getRegisteredTimes()
      setData(data)
    }else{
      const data = await getRegisteredTimes(2)
      setData(data)
    }
  }
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
          data={data}
        />
        <Pagination />
      </Box>
    </Flex >
  )
}