import { Box, Center, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      w='100%'
      h='50px'
      // position='absolute'
      padding={2}
      bgGradient='linear(to-r, teal.500, green.900)'
      mb='0'
    >
      <Center><Text>Footer</Text></Center>
    </Box>
  )
}
