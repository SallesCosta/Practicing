import { Box, Center, HStack, Text } from '@chakra-ui/react'

export function Content() {
  return (
    <>
      <Box
        w='100%'
        h='100vh'
      >
        <HStack>
          <Center><Text>Content</Text></Center>
        </HStack>
      </Box>
    </>
  )
}
