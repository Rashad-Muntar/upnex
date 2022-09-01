import React from "react";
import { Box, Heading, Grid, } from "@chakra-ui/react";
import { FiSearch, FiSettings, FiTarget, FiUser } from "react-icons/fi";
import ServiceCard from "../Shared/serviceCard";
import Container from "../Shared/container";
import ContainerWrapper from "../Shared/containerWrapper";

function Services() {
  return (
    <ContainerWrapper bg="blue" mt="100px" py="70px">
      <Container>
          <Box color="white">
            <Heading
              fontSize={{xs: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
            >
              Full service{" "}
            </Heading>
            <Heading
              fontSize={{ xs: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
            >
              Digital Marketing
            </Heading>
          </Box>

          <Grid mt="70px" templateColumns={"repeat(2, 1fr)"} gap="25px">
            <ServiceCard
              icon={<FiSearch />}
              title="Research and discovery"
              learnMore="#"
              desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
            />
            <ServiceCard
              icon={<FiSettings />}
              title="Marketing Strategy"
              learnMore="#"
              desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
            />
            <ServiceCard
              icon={<FiTarget />}
              title="Project Management"
              learnMore="#"
              desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
            />
            <ServiceCard
              icon={<FiUser />}
              title="Consult Specialist"
              learnMore="#"
              desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
            />
          </Grid>
      </Container>
    </ContainerWrapper>
  );
}

export default Services;
