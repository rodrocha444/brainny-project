import { Box, Flex } from "@chakra-ui/react";

import { pxToRem } from "../../utils/operations";
import { Sidebar } from "../organisms/Sidebar";
import { Table } from "../molecules/Table";
import { RegisterButton } from "../molecules/RegisterButton";

export function DashboardTemplate() {
  return (
    <Flex h='100vh'>
      <Sidebar />

      <Box flex='1' bg='#F2F2F2' p={pxToRem(30)}>
        <RegisterButton />
        <Table />
      </Box>
    </Flex >
  )
}