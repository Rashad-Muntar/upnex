import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

import ContainerWrapper from "../Shared/containerWrapper";
import Navbar from "../../Layout/navbar";
import Hero from "./hero";

function HeroAndNavigation() {
  return (
    <ContainerWrapper bg="primaryBg">
      <Navbar />
      <Hero />
    </ContainerWrapper>
  );
}

export default HeroAndNavigation;
