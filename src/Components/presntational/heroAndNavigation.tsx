import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './navbar'
import Hero from './hero'

function HeroAndNavigation() {
  return (
      <Box bg="primaryBg" w="100%" >
          <Navbar />
          <Hero />  
    </Box>
  )
}

export default HeroAndNavigation
