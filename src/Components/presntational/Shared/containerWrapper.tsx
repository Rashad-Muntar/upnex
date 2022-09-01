import React, { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
    bg?: string
    children: ReactNode
    mt?:string
    py?: string
}
const ContainerWrapper = ({bg, children, mt, py}: Props) => {
  return (
    <Flex bg={bg} mt={mt} px={{xs:"20px", md:"80px" }} py={py} justifyContent="center" alignItems="center" direction="column" >
      {children}
    </Flex>
  )
}

export default ContainerWrapper
