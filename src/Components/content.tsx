import { Box, Center, HStack, Text } from '@chakra-ui/react'

export function Content({ bgColor, color }:any) {
  return (
    <>
      <Box
        bg={bgColor}
        display='flex'
        flexDir='column'
        w='100%'
        h='89vh'
        color={color}
      >
        <HStack>
          <Center><Text>Content</Text></Center>
        </HStack>
      </Box>
    </>
  )
}
