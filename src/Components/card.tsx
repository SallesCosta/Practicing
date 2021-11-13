import {
  Flex, Box, Input, Text, Divider, WrapItem, List, ListItem, Heading, EditablePreview,
  Button, Icon, HStack, Tooltip, Circle, Menu, MenuItem, MenuList, MenuButton,
  Editable, EditableInput,
} from '@chakra-ui/react'

import { ChangeEventHandler, MouseEventHandler, RefObject } from 'react'
import { ChevronDownIcon, CopyIcon } from '@chakra-ui/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard' // npm i copy-to-clipboard     @types/react-copy-to-clipboard
import { RiDeleteBinLine } from 'react-icons/ri'
import { GrFormAdd } from 'react-icons/gr'
import { Lista } from '../hooks/hooks'

export type CardProps = {
  index: number,
  Array: Lista[],
  value?: string,
  inputRef?: RefObject<HTMLInputElement>,
  handleDelete: (id: string) => void
  onHandleChange: ChangeEventHandler<HTMLInputElement>,
  AddItem: MouseEventHandler<HTMLButtonElement> & MouseEventHandler<Element>,
}

export function Card({
  Array,
  value,
  inputRef,
  AddItem,
  handleDelete,
  onHandleChange,
}: CardProps) {
  return (
    <Box p='18px'>
      <Box
        maxW='500px'
        w='500px'
        p='32px'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        bgColor='whiteAlpha.800'
        shadow='lg'
      >
        <Heading
          borderRadius='inherit'
          borderWidth='1px'
          fontSize='2xl'
          align='center'
          color='grey'
        >
          Higher Order Functions
        </Heading>
        <Text
          fontSize='lg'
          align='center'
        >
          Insira um novo Item
        </Text>
        <Input
          ref={inputRef}
          onChange={onHandleChange}
          value={value}
          placeholder='escreva aqui'
          focusBorderColor='lime'
          variant='filled'
          size='lg'
          maxLength={34}
          isRequired
        />
        <Divider mb='4' mt='4' maxW='500px' w='500px' />
        <Button
          onClick={AddItem}
          rightIcon={<GrFormAdd />}
          colorScheme='green'
          variant='outline'
          size='lg'
          w='100%'
        >Adicionar
        </Button>
        {Array.length === 0
          ? <Text fontSize='xl' align='center' mb='4' mt='4'>Array vazio</Text>
          : <Text fontSize='xl' align='center' mb='4' mt='4'>Lista dentro do Array:</Text>}
        <List spacing={8}>
          {Array !== undefined && Array.map(file => (
            <ListItem key={(file.id)} w='100%' h='12px'>
              <Flex
                bgColor={
                  file.index % 2 === 0
                    ? 'green.200'
                    : 'whiteAlpha.100'
                }
                size='md' borderRadius='full'
              >
                <HStack>
                  <Text pl='5' w='377px'>{file.content}</Text>
                  <WrapItem>
                    <CopyToClipboard text={file.content}>
                      <Circle
                        size='24px'
                        as='button'
                        _hover={{
                          color: 'red.400',
                          borderRadius: 'full',
                          bgColor: 'orange.200',
                        }}
                      >
                        <Tooltip placement='left' label='Copy' openDelay={300}>
                          <Icon as={CopyIcon} />
                        </Tooltip>
                      </Circle>
                    </CopyToClipboard>
                  </WrapItem>
                  <WrapItem>
                    <Tooltip placement='right' label='Delete' openDelay={300}>
                      <Circle
                        size='24px'
                        as='button'
                        onClick={() => handleDelete(file.id)}
                        _hover={{
                          color: 'red.400',
                          borderRadius: 'full',
                          bgColor: 'orange.200',
                        }}
                      >
                        <Icon
                          as={RiDeleteBinLine}
                        />
                      </Circle>
                    </Tooltip>
                  </WrapItem>
                </HStack>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider mb='4' mt='4' maxW='500px' w='500px' />
      <Editable
        placeholder='Paste here'
        bgColor='ThreeDFace'
        maxW='500px'
        w='500px'
      >
        <EditablePreview width='100%' />
        <EditableInput />
      </Editable>
      <Divider mb='4' mt='4' maxW='500px' w='500px' />
      <Menu>
        <MenuButton
          as={Button}
          maxW='500px'
          w='500px'
          rightIcon={<ChevronDownIcon />}
        >
          Itens do Array
        </MenuButton>
        <MenuList>
          {Array.map(item => (
            <MenuItem key={(item.id)}>{item.content}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}
