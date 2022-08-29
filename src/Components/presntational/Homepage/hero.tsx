import React from 'react'
import Image from 'next/image'

import { Flex, Box , Heading, Text, Img} from '@chakra-ui/react'
import SharedButton from '../Shared/Button'
import { SiTrustpilot } from "react-icons/si"

function Hero() {
  return (
    <Flex mt="3rem" flexDirection={{xs: "column", md:"row"}}>
          <Box w={{xs: "100%", md:"60%"}} mr="50px">
              <Heading mb="1rem" fontSize={{ sm: "2.5rem", md: "3.5rem", lg: "4rem", xl:"5rem" }}>
                  Drive <Box p="0px" m="0px" display="inline" position="relative">Revenue</Box> Digital Marketing Agency That
              </Heading>
              <Text fontWeight="semibold" w={{ sm:"95%", lg:"80%"}} mb="1rem" >Choose upnex as your digital marketing and propel your business ro new heights with our award winning digital marketing services and technology platforms</Text>
              <SharedButton title='Get started' />
              <Flex  w="70%" mt="30px" justify="space-between" alignItems="center" >
              <SiTrustpilot />
              <Img src="/images/7.png"  h="15Px" w="70px"/>
              <Img src="/images/8.png" h="20Px" w="70px"/>
              <Img src="/images/9.png" h="50Px" w="50px"/>
              </Flex>
          </Box>
          <Img src="/images/2.jpg" w={{xs: "100%", md:"40%"}} h={{lg:"600px", xl:"600px" }} /> 
    </Flex>
  )
}

export default Hero
