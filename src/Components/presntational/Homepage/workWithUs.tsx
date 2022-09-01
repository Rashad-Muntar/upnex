import React from "react";
import Link from "next/link";
import { Box, Heading, Text, Img, Flex } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Container from "../Shared/container";
import ContainerWrapper from "../Shared/containerWrapper";
function WorkWithUs() {
  return (
    <ContainerWrapper>
      <Container>
        <Flex justify="space-between" direction={{xs: "column", md: "row" }} mt="90px">
          <Box width={{ xs: "100%", md: "40%" }} position="relative">
            <Img
              src="/images/1.jpg"
              borderTopRightRadius="10px"
              borderBottomLeftRadius="10px"
              w="50rem"
            />
            <Box
              position="absolute"
              className="yelbox"
              bottom="-15"
              left="40%"
              height="70px"
              w="70px"
              bg="primaryYellow"
              borderRadius="8px"
            />
          </Box>
          <Box w={{ xs: "100%", md: "55%"}} mt={{ xs: "50px", md: "0" }}>
            <Heading
              fontSize={{ xs: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
            >
              Work With Us,
            </Heading>
            <Heading
              fontSize={{ xs: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
            >
              {" "}
              Not For Us
            </Heading>
            <Text fontWeight="semibold" width={{ xs: "100%", md: "80%" }}>
              There are 100 definitions of marketing. But we undersrtand that
              marketing is what happens in every company here and now: finding
              new solutions and launching new Products
            </Text>
            <Flex alignItems="center" mt="20px" className="menuItem">
              <Link href="#">
                <Text fontWeight="bold" mr="10px">
                  learn more
                </Text>
              </Link>
              <HiArrowNarrowRight />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </ContainerWrapper>
  );
}

export default WorkWithUs;
