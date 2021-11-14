import { Box, useColorModeValue } from '@chakra-ui/react'
import { Header } from './header'
import { Footer } from './footer'
import { Content } from './content'
import { useHooks } from 'source/hooks'

export function App() {
  const bgColor = useColorModeValue('gray.50', 'withealpha.50')
  const bgColor2 = useColorModeValue('gray.50', 'white')
  const border = useColorModeValue('gray.50', 'gray.600')

  const color = useColorModeValue('gray.600', 'withealpha.400')

  const {
    handleChange,
    handleDelete,
    AddItem,
    value,
    Array,
    index,
    inputRef,
    handleAdd,
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
        handleChange={handleChange}
        onHandleDelete={handleDelete}
        inputRef={inputRef}
        handleAdd={handleAdd}
      />
      <Footer color={color} />
    </Box>
  )
}
