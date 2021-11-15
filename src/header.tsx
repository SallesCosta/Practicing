import { Box, Center, HStack, Text } from '@chakra-ui/react'
import CopyToClipboard from 'react-copy-to-clipboard'

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
          <CopyToClipboard text='sallesCosta'>
            <Center><Text>Header</Text></Center>
          </CopyToClipboard>
        </HStack>
      </Box>
    </>
  )
}
