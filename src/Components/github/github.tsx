import { useState, useRef } from 'react'
import { Text, Input, Image, VStack, Box, Flex, FormControl, Button } from '@chakra-ui/react'

export const Github = () => {
  const [name, setName] = useState<string>('')
  const [userName, setUsername] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [repos, setRepos] = useState('')
  const [avatar, setAvatar] = useState('')
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)
  const inputRef = useRef()

  // useEffect(() => {
  //   // fetch('https://api.github.com/users/exemple')
  //   // fetch('https://api.github.com/users/fdaciuk')
  //   fetch('https://api.github.com/users/sallesCosta')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data)
  //     })
  // }, [])

  const setData = ({
    name,
    login,
    followers,
    following,
    // eslint-disable-next-line camelcase
    public_repos, avatar_url,
  }: any) => { setName(name), setUsername(login), setFollowers(followers), setFollowing(following), setRepos(public_repos), setAvatar(avatar_url) }

  const handleSearch = (e: any) => {
    setUserInput(e.target.value)
  }

  const handleConfirm = (e: any) => {
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data)
          setError(null)
        }
      })
    // inputRef=''
  }

  return (
    <Flex>
      <VStack>
        <FormControl>
          <Input placeholder='Basic usage' onChange={handleSearch} onKeyUp={handleConfirm} />
          <Button onClick={handleSubmit} colorScheme='blue' variant='outline'>Submit</Button>
        </FormControl>
        <Box>
          <Image src={avatar} />
          <Text>usuário escolhido {name}</Text>
          <Text>usuário escolhido {userName}</Text>
          <Text>Follower {followers}</Text>
          <Text>Following {following}</Text>
          <Text>Repositórios {repos}</Text>
          <Text>Following {following}</Text>
        </Box>
      </VStack>
    </Flex>
  )
}
