import React from 'react'
import { Box } from '@chakra-ui/react'
import Container from '../Shared/container'
import Navbar from '../../Layout/navbar'
import Hero from './hero'

function HeroAndNavigation() {
    return (
        <Container>
      <Box bg="primaryBg" w="100%" pl="50px" >
          
          <Navbar />
          <Hero />  
          
      
            </Box>
            </Container>
  )
}

export default HeroAndNavigation
