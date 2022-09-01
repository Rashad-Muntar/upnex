import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Show,
  useDisclosure,
  SlideFade,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Container from "../presntational/Shared/container";
import Menu from "../presntational/Homepage/menu";
import MobileMenu from "../presntational/Homepage/mobileMenu";
import { BsArrow90DegRight } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  // const [showMenu, setShowmenu] = useState(false)
  const {isOpen, onToggle} = useDisclosure();

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
          <Heading fontSize={["18px", "20px", "25px", "25px"]} ml="15px">
            <Link href="#">Upnex</Link>
          </Heading>
        </Flex>
        <Show above="md">
          <Menu w="32%" />
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
              <GiHamburgerMenu onClick={onToggle} />
            </Box>
          </Show>
        </Flex>
      </Flex>
      <SlideFade in={isOpen} offsetY="20px">
        <MobileMenu />
      </SlideFade>
    </Container>
  );
}

export default Navbar;
