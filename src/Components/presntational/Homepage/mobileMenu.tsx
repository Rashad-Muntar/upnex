import React from "react";
import { Box, Show } from "@chakra-ui/react";
import Menu from "./menu";

const MobileMenu = () => {
  return (
    <Show above="sm">
      <Box
      borderRadius="10px"
        shadow="lg"
        width="100%"
        position="absolute"
        zIndex={10}
        bg="white"
        p="50px"
        fontWeight="bold"
        fontSize="25px"
      >
        <Menu direction="column" />
      </Box>
    </Show>
  );
};

export default MobileMenu;
