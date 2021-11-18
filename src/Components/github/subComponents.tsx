import { Text, Input, Image, VStack, FormControl, Button, InputGroup, InputRightElement, Heading, Container, HStack } from '@chakra-ui/react'

type UserContentProps = {
  avatar: any,
  name: string,
  userName: string,
  followers: any,
  following: any,
  getRepoList: () => void
  getStarredList: () => void
}

export const UserContent = ({ avatar, name, userName, followers, following, getRepoList, getStarredList }: UserContentProps) => {
  return (
    <Container>
      <Image src={avatar} w='100%' />
      <Text>usuário escolhido {name}</Text>
      <Text>usuário escolhido {userName}</Text>
      <Text>Follower {followers}</Text>
      <Text>Following {following}</Text>
      <Button onClick={getRepoList} colorScheme='blue' variant='outline'>Repositórios</Button>
      <Button onClick={getStarredList} colorScheme='blue' variant='outline'>Starreds</Button>
    </Container>
  )
}

export const Error = ({ msg }: any) => {
  return (
    <Container>
      <Heading as='h2' size='xl'>{msg}</Heading>
      <Heading as='h2' size='lg'>Noooo... something wrong!! better call Batman</Heading>
      <Image
        w='400px'
        h='350px'
        alt='Bat Signal'
        src='https://img.gta5-mods.com/q95/images/bat-signal-moons/35e9c5-Grand%20Theft%20Auto%20V%201_10_2017%2012_10_41%20AM.png'
      />
    </Container>
  )
}

type MyInputProps = {
  userInput: string,
  inputRef: any,
  handleSearch: any,
  handleConfirm: any,
  handleSubmit: any,
}

export const MyInput = ({ userInput, inputRef, handleSearch, handleConfirm, handleSubmit }: MyInputProps) => {
  return (
    <HStack>
      <VStack w='350px'>
        <FormControl>
          <InputGroup size='md' w='100%'>
            <Input
              borderColor='blue'
              value={userInput}
              ref={inputRef}
              placeholder='an user...'
              onChange={handleSearch}
              onKeyUp={handleConfirm}
            />
            <InputRightElement width='4.5rem'>
              <Button onClick={handleSubmit} colorScheme='blue' variant='outline'>Submit</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </VStack>
    </HStack>
  )
}
