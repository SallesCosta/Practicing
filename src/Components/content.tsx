import { Box, Center, HStack, Text } from '@chakra-ui/react'

type ContentProps = {
  color: string,
  bgColor: string,
}

export function Content({ bgColor, color }:ContentProps) {
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
