import React from "react";
import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import SharedButton from "../Shared/Button";

function Grow() {
  return (
    <Box mt="100px">
      <Heading fontSize={{ sm: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}>Grow with the digital Marketing Agency you can trust?</Heading>
      <Flex justify="space-between" mt="70px">
        <Box position="relative" w="47%">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            incidunt cum, totam consequuntur repellat eius dolores modi ab,
            iusto error eum molestias voluptatibus iste tempore tempora nulla
            sequi, maiores quam.
          </Text>
          <Flex alignItems="center">
            <SharedButton title="Learn more" />
            <HiArrowNarrowRight />
          </Flex>

          <Img src="/images/4.jpg" bottom="0" position="absolute"/>
        </Box>
        <Box position="relative" w="47%" >
          <Img src="/images/3.jpg" top="0" maxH="700px" width="100%"/>
        </Box>
      </Flex>
    </Box>
  );
}

export default Grow;
