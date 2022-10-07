import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

import { defaultTheme } from "../../styles/defaultTheme"

export function PasswordInput(props: InputProps) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>

      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        {...props}
      />
      
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick} variant='ghost'>
          {show
            ? <ViewOffIcon color={defaultTheme.colors.principalColor} />
            : <ViewIcon color={defaultTheme.colors.principalColor} />
          }
        </Button>
      </InputRightElement>

    </InputGroup>
  )
}