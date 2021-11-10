import { Box, Center, HStack, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <>
      <Box
        h='60px'
        bgGradient='linear(to-r, teal.500, green.200)'
      >
        <HStack>
          <Center><Text>Header</Text></Center>
        </HStack>
      </Box>
    </>
  )
}
