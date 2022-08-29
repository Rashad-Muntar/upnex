import React from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
    title: string
    handler?: () => void
  
}
function SharedButton({title, handler}: Props) {
  return (
      <Button onClick={handler}>{title}</Button>
  )
}

export default SharedButton
