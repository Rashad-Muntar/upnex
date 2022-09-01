import React from "react";
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

interface Props {
    direction?: string
    w?:string
}
const Menu = ({direction, w}: Props) => {
  return (
    <Box>
      <Flex w={w} justify="space-between" direction={direction}>
        <Link href="#">
          <Text className="menuItem">Service</Text>
        </Link>
        <Link href="#">
          <Text className="menuItem">Work</Text>
        </Link>
        <Link href="#">
          <Text className="menuItem">About</Text>
        </Link>
        <Link href="#">
          <Text className="menuItem">Resouces</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Menu;
