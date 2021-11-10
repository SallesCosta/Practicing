import { Box, Center, HStack, Text } from '@chakra-ui/react'

type HeaderProps = {
  color: string,
}

export function Header({ color }: HeaderProps) {
  return (
    <>
      <Box
        h='60px'
        bgGradient='linear(to-r, teal.500, green.200)'
        color={color}
      >
        <HStack>
          <Center><Text>Header</Text></Center>
        </HStack>
      </Box>
    </>
  )
}
