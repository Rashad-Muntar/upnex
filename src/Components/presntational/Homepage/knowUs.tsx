import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import ContainerWrapper from "../Shared/containerWrapper";

const KnowUs = () => {
  return (
    <ContainerWrapper>
      <Heading
       my="100px" fontSize={{ xs: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
      >
        Out tech-enabled marketing services help your business grow online
        leads, calls and revenue
      </Heading>
    </ContainerWrapper>
  );
};

export default KnowUs;
