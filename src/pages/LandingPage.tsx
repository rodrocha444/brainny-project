import { Box, Container } from "@chakra-ui/react";

import { defaultTheme } from "../styles/defaultTheme";
import { Header } from "../components/organisms/Header";
import { MainBanner } from "../components/organisms/MainBanner";
import { Sponsors } from "../components/organisms/Sponsors";
import { Plans } from "../components/organisms/Plans";
import { Footer } from "../components/organisms/Footer";

export function LandingPage() {
  return (
    <Box
      bg={defaultTheme.colors.principalColor}
      overflowX='hidden'
    >
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