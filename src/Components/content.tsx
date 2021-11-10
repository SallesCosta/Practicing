import { Box, Center, HStack, Text } from '@chakra-ui/react'

export function Content() {
  return (
    <>
      <Box
        display='flex'
        flexDir='column'
        w='100%'
        h='89vh'
      >
        <HStack>
          <Center><Text>Content</Text></Center>
        </HStack>
      </Box>
    </>
  )
}
