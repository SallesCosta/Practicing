import { HStack, VStack, Box, Input, Spacer, Text, Flex, Checkbox, Link, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { CheckIcon, ViewIcon } from '@chakra-ui/icons'
import { OkIcon } from './ui/stackIcons'

function MeuInput({ type, placeholder, w }: any) {
  return (<Input type={type} placeholder={placeholder} w={w} h='40px' isRequired />)
}

type LoginFormProps = {
  color?: string,
  bg?: string,
}

export const LoginForm = ({ color, bg }: LoginFormProps) => {
  const wd = '167px'
  return (
    <>
      <Box
        m='auto'
        w='350px'
        p='5px'
        color={color}
        bg={bg}
      >
        <Flex>
          <Box>
            <Text fontSize='4xl'>Create account</Text>
          </Box>
          <Spacer />
          <Box>
            <OkIcon />
          </Box>
        </Flex>
        <Flex mb='9' mt='9'>
          <MeuInput type='text' placeholder='First name..' w={wd} />
          <Spacer />
          <MeuInput type='text' placeholder='Last name..' w={wd} />
        </Flex>
        <VStack spacing='10'>
          <InputGroup>
            <InputRightElement><CheckIcon color='green.500' /></InputRightElement>
            <MeuInput type='email' placeholder='Email' />
          </InputGroup>
          <InputGroup>
            <InputRightElement><CheckIcon color='green.500' /></InputRightElement>
            <MeuInput type='email' placeholder='Confirm email' />
          </InputGroup>
          <InputGroup>
            <MeuInput type='password' placeholder='password' />
            <InputRightElement><ViewIcon color='green.500' /></InputRightElement>
          </InputGroup>
          <Button
            bgColor='#82AAAD'
            color='whitesmoke'
            type='submit'
            h='40px'
            w='100%'
            fontSize='16px'
          >
            Enviar
          </Button>
        </VStack>

        <HStack mt='9'>
          <Checkbox
            // isDisabled
            isChecked
            size='lg'
          />
          <Spacer />
          <Text
            fontSize='xl'
          >
            I agree to the
            <Link color='teal.500' href='#' target='_blank'> My Rules </Link>
            and acknowledge the
            <Link color='teal.500' href='#' target='_blank'> Privacy Statement</Link>
            .
          </Text>
        </HStack>
      </Box>
    </>
  )
}
