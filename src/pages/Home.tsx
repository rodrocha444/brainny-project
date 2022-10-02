import { Box, Container } from "@chakra-ui/react";
import { Footer } from "../components/organisms/Footer";

import { Header } from "../components/organisms/Header";
import { MainBanner } from "../components/organisms/MainBanner";
import { Plans } from "../components/organisms/Plans";
import { Sponsors } from "../components/organisms/Sponsors";

export function Home() {
  return (
    <Box bg='principalColor' >
      <Container maxW='1000px' bgClip='border-box'>
        <Header />
        <MainBanner />
        <Sponsors />
        <Plans />
        <Footer />
      </Container >
    </Box >
  )
}