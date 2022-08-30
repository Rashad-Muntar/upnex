import React from "react";
import Link from "next/link";
import { Box, Text, Flex } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Props {
  icon: string;
  title: string;
  desc: string;
  learnMore: string;
}
const ServiceCard = ({ icon, title, desc, learnMore }: Props) => {
  return (
    <Box bg="primaryYellow" p="80px" borderRadius="10px">
      <Box
        bg="black"
        display="inline-flex"
        color="white"
        p="15px"
        borderRadius="100%"
        fontSize="50px"
      >
        {icon}
      </Box>
      <Text fontSize="2.5rem" my="30px" w="60%">{title}</Text>
      <Text w="80%">{desc}</Text>
      <Flex
        mt="25px"
        alignItems="center"
        borderBottom="1px"
        display="inline-flex"
      >
        <Link href={learnMore}>
          <Text fontWeight="bold" mr="20px">
            Learn more
          </Text>
        </Link>
        <HiArrowNarrowRight />
      </Flex>
    </Box>
  );
};

export default ServiceCard;
