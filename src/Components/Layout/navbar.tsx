import React from "react";
import { Box, Flex, Heading, Text, Show } from "@chakra-ui/react";
import Link from "next/link";
import Container from "../presntational/Shared/container";
import { BsArrow90DegRight } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <Container>
      <Flex
        alignItems="center"
        justify="space-between"
        py="20px"
        fontWeight="bold"
      >
        <Flex className="brand" alignItems="center" w="32%">
          <Box>
            <BsArrow90DegRight fontWeight="bold" />
          </Box>
          <Heading  fontSize={["18px", "20px", "25px", "25px"]} ml="15px">
            <Link href="#">Upnex</Link> 
          </Heading>
        </Flex>
        <Show above="md">
          <Flex w="32%" justify="space-between">
            <Link href="#">
              <Text className="menuItem">Service</Text>
            </Link>
            <Link href="#" >
              <Text className="menuItem">Work</Text>
            </Link>
            <Link href="#">
              <Text className="menuItem">About</Text>
            </Link>
            <Link href="#">
              <Text className="menuItem">Resouces</Text>
            </Link>
          </Flex>
        </Show>

        <Flex alignItems="center" w="32%" justify="end" className="menuItem">
          <Link href="#">
            <Text whiteSpace="nowrap">Get started</Text>
          </Link>
          <Show above="md">
            <Box mx="4px">
              <HiArrowNarrowRight fontSize="20px" />
            </Box>
          </Show>

          <Show below="md">
            <Box mx="6px">
              {" "}
              <GiHamburgerMenu />
            </Box>
          </Show>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
