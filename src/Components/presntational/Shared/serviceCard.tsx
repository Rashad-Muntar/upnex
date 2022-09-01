import React from "react";
import Link from "next/link";
import { Box, Text, Flex, GridItem } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Props {
  icon: JSX.Element;
  title: string;
  desc: string;
  learnMore: string;
}
const ServiceCard = ({ icon, title, desc, learnMore }: Props) => {
  return (
    <GridItem colSpan={{xs: 2, sm: 2, md:1}}>
    <Box className="service" h="100%" bg="primaryYellow" p={{xs:"20px",md:"40px" }} borderRadius="10px">
      <Box
        bg="black"
        display="inline-flex"
        color="white"
        p={{xs:"10px",md:"15px" }}
        borderRadius="100%"
        fontSize={{xs:"20px",md:"40px" }}
      >
        {icon}
      </Box>
      <Text fontSize={{xs:"1.8rem",md:"2.5rem" }} my="30px" w="60%">{title}</Text>
      <Text w="80%">{desc}</Text>
      <Flex
        mt="25px"
        alignItems="center"
        borderBottom="1px"
        display="inline-flex"
        className="serviceMenuItem"
      >
        <Link href={learnMore}>
          <Text fontWeight="bold" mr="20px" >
            Learn more
          </Text>
        </Link>
        <HiArrowNarrowRight />
      </Flex>
    </Box>
    </GridItem>
  );
};

export default ServiceCard;
