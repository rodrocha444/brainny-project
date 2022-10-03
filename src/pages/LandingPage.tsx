import { Box, Container } from "@chakra-ui/react";

import { Header } from "../components/organisms/Header";
import { MainBanner } from "../components/organisms/MainBanner";
import { Sponsors } from "../components/organisms/Sponsors";
import { Plans } from "../components/organisms/Plans";
import { Footer } from "../components/organisms/Footer";
import BgLandingPage from '../assets/bg-landing-page.png'

export function LandingPage() {
  return (
    <Box
      bgImage={BgLandingPage}
      overflowX='hidden'
    >
      <Container maxW='1000px' backdropFilter='blur(0.5px)'>
        <Header />
        <MainBanner />
        <Sponsors />
        <Plans />
        <Footer />
      </Container >
    </Box >
  )
}