import {
  Box,
  Text,
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  HStack,
} from '@chakra-ui/react'

type FooterProps = {
  color: string
}

export function Footer({ color }: FooterProps) {
  const { toggleColorMode } = useColorMode()
  const tog = () => console.log('toggou')
  return (
    <Box
      w='100%'
      h='50px'
      padding={2}
      bgGradient='linear(to-r, teal.500, green.900)'
      mb='0'
    >
      <HStack
        color={color}
      >
        <Text>Footer</Text>
        <FormControl display='flex' alignItems='center'>
          <FormLabel mb='0'>
            {/* {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'} */}
            {/* Dark Mode */}
          </FormLabel>
          <Switch onChange={toggleColorMode} onClick={tog} />
        </FormControl>
      </HStack>
    </Box>
  )
}
