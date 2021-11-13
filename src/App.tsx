import { Box, useColorModeValue } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'
import { Content } from './content'
import { useHooks } from 'hooks/hooks'

export function App() {
  const bgColor = useColorModeValue('gray.50', 'withealpha.50')
  const bgColor2 = useColorModeValue('gray.50', '#f0f0f0')
  const border = useColorModeValue('', 'gray.600')

  const color = useColorModeValue('gray.600', 'withealpha.400')

  const {
    handleChange,
    handleDelete,
    AddItem,
    value,
    Array,
    index,
  } = useHooks()
  return (
    <Box>
      <Header color={color} />
      <Content
        bgColor={bgColor}
        bgColor2={bgColor2}
        border={border}
        color={color}
        index={index}
        Array={Array}
        value={value}
        AddItem={AddItem}
        onHandleChange={handleChange}
        onHandleDelete={handleDelete}
      />
      <Footer color={color} />
    </Box>
  )
}
