import React from "react";
import { Box, Flex, Heading, Grid } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import ServiceCard from "../Shared/serviceCard";

function Services() {
  return (
    <Box mt="100px" bg="blue" py="100px">
      <Box color="white" pl="80px">
        <Heading
          fontSize={{ sm: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
        >
          Full service{" "}
        </Heading>
        <Heading
          fontSize={{ sm: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
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
          icon={<FiSearch />}
          title="Marketing Strategy"
          learnMore="#"
          desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
        />
        <ServiceCard
          icon={<FiSearch />}
          title="Project Management"
          learnMore="#"
          desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
        />
        <ServiceCard
          icon={<FiSearch />}
          title="Consult Specialist"
          learnMore="#"
          desc=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita a animi vitae quae voluptate non officiis voluptatum? Nostrum optio tempore repudiandae numquam delectus quibusdam, officia, suscipit quis esse unde corrupti."
        />
      </Grid>
    </Box>
  );
}

export default Services;
