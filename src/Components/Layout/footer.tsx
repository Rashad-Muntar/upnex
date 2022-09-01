import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import ContainerWrapper from "../presntational/Shared/containerWrapper";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    
    <Box>
      <Flex
        bg="primaryBg"
        h="70px"
        width="100%"
        justify="center"
        alignItems="center"
      >
        <Box mx="10px">
          <AiFillTwitterSquare fontSize="30px" />
        </Box>
        <Box mx="10px" fontSize="30px">
          <AiFillFacebook />
        </Box>
        <Box mx="10px" fontSize="30px">
          <AiFillLinkedin />
        </Box>
        <Box mx="10px" fontSize="30px">
          <AiFillGithub />
        </Box>
      </Flex>
      <Text align="center" fontSize="xs"> Built by Rashad</Text>
    </Box>
  );
};

export default Footer;
