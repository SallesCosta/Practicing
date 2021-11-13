import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from '@chakra-ui/react'
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, RefObject } from 'react'
import { Sidebar } from './Components/sidebar/sidebar'
import { LoginForm } from './Components/loginForm'
import { Github } from './Components/github/github'
import { Card } from './Components/card'
import { Lista } from './hooks/hooks'

type ContentProps = {
  value: string,
  index: number,
  Array: Lista[],
  onHandleDelete: (id: string) => void,
  onHandleChange: ChangeEventHandler<HTMLInputElement>,
  AddItem: MouseEventHandler<HTMLButtonElement> & MouseEventHandler<Element>,
  bgColor: string,
  bgColor2: string,
  border: string,
  color: string,
  inputRef: RefObject<HTMLInputElement>,
  handleAdd: KeyboardEventHandler,
}

export function Content({
  index,
  Array,
  value,
  AddItem,
  onHandleChange,
  onHandleDelete,
  bgColor,
  bgColor2,
  border,
  color,
  inputRef,
  handleAdd,
}: ContentProps) {
  return (
    <Box
      padding={6}
      w='100%'
      h='89vh'
      bg={bgColor}
      color={color}
    >
      <Flex>
        <Sidebar />
        <Tabs isLazy w='100%'>
          <TabList>
            <Tab>GitHub</Tab>
            <Tab>Login</Tab>
            <Tab>Card</Tab>
            <Tab>Estatisticas</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Github /></TabPanel>
            <TabPanel><LoginForm /></TabPanel>
            <TabPanel>
              <Card
                handleAdd={handleAdd}
                value={value}
                index={index}
                Array={Array}
                AddItem={AddItem}
                handleDelete={onHandleDelete}
                onHandleChange={onHandleChange}
                bgColor2={bgColor2}
                border={border}
                color={color}
                inputRef={inputRef}
              />
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}
