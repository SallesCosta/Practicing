import { Box, Center, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      w='100%'
      h='50px'
      mb='0'
      padding={2}
      bgGradient='linear(to-r, teal.500, green.200)'
    >
      <Center><Text>Footer</Text></Center>
    </Box>
  )
}
