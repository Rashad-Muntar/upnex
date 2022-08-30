import React from "react";
import Link from "next/link";
import { Box, Heading, Text, Img, Flex } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Container from "../Shared/container";

function WorkWithUs() {
  return (
    <Flex justify="space-between" mt="90px">
      <Box width="40%" position="relative">
        <Img
          src="/images/1.jpg"
          borderTopRightRadius="10px"
          borderBottomLeftRadius="10px"
        />
        <Box position="absolute" bottom="-10" left="40%" height="70px" w="70px" bg="primaryYellow" borderRadius="8px"/>
      </Box>
      <Box w="54%">
        <Heading
          fontSize={{ sm: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
        >
          Work With Us,
        </Heading>
        <Heading
          fontSize={{ sm: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
        >
          {" "}
          Not For Us
        </Heading>
        <Text fontWeight="semibold" width="80%">
          There are 100 definitions of marketing. But we undersrtand that
          marketing is what happens in every company here and now: finding new
          solutions and launching new Products
        </Text>
        <Flex alignItems="center" mt="40px">
          <Link href="#">
            <Text fontWeight="bold" mr="10px">
              learn more
            </Text>
          </Link>
          <HiArrowNarrowRight />
        </Flex>
      </Box>
    </Flex>
  );
}

export default WorkWithUs;
