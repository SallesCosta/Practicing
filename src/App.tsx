import { Box, useColorModeValue } from '@chakra-ui/react'
import { Header } from './Components/header'
import { Footer } from './Components/footer'
import { Content } from './Components/content'


export function App() {
  const bgColor = useColorModeValue('gray.50', 'withealpha.50')
  const color = useColorModeValue('gray.600', 'withealpha.400')
  return (
    <Box>
      <Header color={color} />
      <Content bgColor={bgColor} color={color} />
      <Footer color={color} />
    </Box>
  )
}
