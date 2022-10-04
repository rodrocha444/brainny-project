import { EditIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import LogoColor from '../assets/logo-color.svg';
import { DashboardTemplate } from "../components/templates/DashboardTemplate";
import { defaultTheme } from "../styles/defaultTheme";
import { pxToRem } from "../utils/operations";

export function Dashboard() {
  return (
    <DashboardTemplate />
  )
}