import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './Components/sidebar/sidebar'
import { LoginForm } from './Components/loginForm'
import { Card } from './Components/card'
import { Lista } from './hooks/hooks'
import { ChangeEventHandler, MouseEventHandler } from 'react'
import { Github } from './Components/github/github'

type ContentProps = {
  value: string,
  index: number,
  Array: Lista[],
  onHandleDelete: (id: string) => void,
  onHandleChange: ChangeEventHandler<HTMLInputElement>,
  AddItem: MouseEventHandler<HTMLButtonElement> & MouseEventHandler<Element>,
  bgColor: string,
  color: string,
}

export function Content({
  index,
  Array,
  value,
  AddItem,
  onHandleChange,
  onHandleDelete,
  bgColor,
  color,
}: ContentProps) {
  return (
    <Box
      padding={6}
      w='100%'
      h='89vh'
      bg={bgColor}
      color={color}
    // ml='10px'
    >
      <Flex>
        <Sidebar />
        <Tabs isLazy w='100%'>
          <TabList>
            <Tab>Login</Tab>
            <Tab>GitHub</Tab>
            <Tab>Estatisticas</Tab>
            <Tab>Card</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><LoginForm /></TabPanel>
            <TabPanel><Github /></TabPanel>
            <TabPanel>
              <Card
                value={value}
                index={index}
                Array={Array}
                AddItem={AddItem}
                handleDelete={onHandleDelete}
                onHandleChange={onHandleChange}
              />
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}
