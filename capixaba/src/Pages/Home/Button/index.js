import React from 'react'
import { Button } from './style';

const MyButton = ({children}) => {
  return (
    <Button>
      {children}
    </Button>
  )
}

export default MyButton;