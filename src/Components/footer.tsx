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
          <FormLabel htmlFor='email-alerts' mb='0'>
            Dark Mode
          </FormLabel>
          <Switch id='email-alerts' onChange={toggleColorMode} />
        </FormControl>
      </HStack>
    </Box>
  )
}
