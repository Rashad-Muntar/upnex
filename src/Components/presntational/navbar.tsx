import React from 'react'
import { Box, Flex, Heading, Text, Show} from '@chakra-ui/react'
import Link from 'next/link'
import { BsArrow90DegRight } from "react-icons/bs"
import { HiArrowNarrowRight } from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/Gi"





function Navbar() {
  return (
      <Flex alignItems="center" justify="space-between"  py="20px" px={"md" ? "10px" : "5px"} fontWeight="bold">
        <Flex alignItems="center" w="32%">
   <Box><BsArrow90DegRight fontWeight="bold" /></Box> 
              <Heading fontSize={["18px", "20px", "25px", "25px",]} ml="15px">Upnex</Heading>
          </Flex>
          <Show above='md'>
          <Flex w="32%" justify="space-between">
              <Link href="#"><Text >Service</Text></Link>
              <Link href="#"><Text >Work</Text></Link>
              <Link href="#"><Text >About</Text></Link>
              <Link href="#"><Text >Resouces</Text></Link>  
        </Flex>
          </Show>
         
          <Flex alignItems="center" w="32%" justify="end">
              <Link href="#"><Text whiteSpace="nowrap">Get started</Text></Link>
              <Show above='md'>
                <Box mx="4px"><HiArrowNarrowRight fontSize="20px" /></Box>
              
              </Show>
              
              <Show below='md'>
                  <Box  mx="6px"> <GiHamburgerMenu /></Box>
              </Show>
        </Flex>

    </Flex>
  )
}

export default Navbar
