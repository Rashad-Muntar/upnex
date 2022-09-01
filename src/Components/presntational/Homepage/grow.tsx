import React from "react";
import Link from "next/link";
import { Box, Flex, Heading, Img, Text, Show } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";
import SharedButton from "../Shared/Button";
import Container from "../Shared/container";
import ContainerWrapper from "../Shared/containerWrapper";

function Grow() {
  return (
    <ContainerWrapper>
      <Container>
        <Box mt="100px">
          <Heading
            w={{ xs: "100%", md: "90%", lg: "80%" }}
            fontSize={{ xs: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" }}
          >
            Grow with the digital Marketing Agency you can trust?
          </Heading>
          <Flex
            direction={{ xs: "column", md: "row" }}
            justify="space-between"
            mt="30px"
          >
            <Box position="relative" width={{ xs: "100%", md: "47%" }}>
              <Text noOfLines={5} textAlign="justify" lineHeight="30px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                incidunt cum, totam consequuntur repellat eius dolores modi ab,
                iusto error eum molestias voluptatibus iste tempore tempora
                nulla sequi, maiores quam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae quaerat iusto asperiores
                eligendi. Consequuntur ratione quaerat veritatis, similique
                accusantium dolore suscipit perspiciatis nihil rerum quasi ab
                vero expedita ipsum quas.
              </Text>
              <Flex alignItems="center" my="30px" className="menuItem">
                <Link href="#">
                  <Text fontWeight="bold" mr="10px">
                    learn more
                  </Text>
                </Link>
                <HiArrowNarrowRight />
              </Flex>
              <Img
                src="/images/4.jpg"
                bottom="0"
                position={{ xs: "relative", md: "absolute" }}
              />
            </Box>
            <Show above="md">
              <Box position="relative" w="47%">
                <Img src="/images/3.jpg" top="0" maxH="700px" width="100%" />
              </Box>
            </Show>
          </Flex>
        </Box>
      </Container>
    </ContainerWrapper>
  );
}

export default Grow;
