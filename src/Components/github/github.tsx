import { Text, Input, Image, VStack, Box, Flex, FormControl, Button, InputGroup, InputRightElement, Heading, Container, ListItem, List, Link } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'

export const Github = () => {
  const [name, setName] = useState<string>('')
  const [userName, setUsername] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [avatar, setAvatar] = useState('')
  const [reposURL, setReposURL] = useState([])
  const [repos, setRepos] = useState([])
  const [reposName, setReposName] = useState([])
  const [reposLink, setReposLink] = useState([])
  const [starred, setStarred] = useState([])
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })

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
    avatar_url,
    public_repos,
    starred,
    repository_url,
  }: any) => {
    setName(name),
      setUsername(login),
      setFollowers(followers),
      setFollowing(following),
      setReposURL(repository_url),
      setRepos(public_repos),
      setAvatar(avatar_url),
      setStarred(starred)
  }

  const handleSearch = (e: any) => {
    setUserInput(e.target.value)
  }

  const handleConfirm = (e: any) => {
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      handleSubmit()
      setUserInput('')
      inputRef.current?.focus()
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
    setUserInput('')
    inputRef.current?.focus()
  }

  // function getGitHubApiUrl(username: any, type: any) {
  //   const internalUser = username ? `/${username}` : ''
  //   const internalType = type ? `/${type}` : ''
  //   return `https://api.github.com/users${internalUser}${internalType}`
  // }

  const getRepoList = () => {
    fetch(`https://api.github.com/users/${userInput}repos`)
      .then(res => res.json())
      .then(result => {
        setRepos(result)
      })
  }

  return (
    <Flex>
      <VStack>
        <FormControl>
          <InputGroup size='md'>
            <Input borderColor='blue' value={userInput} ref={inputRef} placeholder='an user...' onChange={handleSearch} onKeyUp={handleConfirm} />
            <InputRightElement width='4.5rem'>
              <Button onClick={handleSubmit} colorScheme='blue' variant='outline'>Submit</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {error
          ? <Heading as='h2' size='xl'>{error} Noooo... something wrong!! better call Batman</Heading>
          : <>
            <Container>
              <Image src={avatar} />
              <Text>usuário escolhido {name}</Text>
              <Text>usuário escolhido {userName}</Text>
              <Text>Follower {followers}</Text>
              <Text>Following {following}</Text>
              <Text>Repositórios {repos}</Text>
              <Text>Following {following}</Text>
              <Text>Starred {starred}</Text>
            </Container>
            <Button onClick={getRepoList} colorScheme='blue' variant='outline'>Repositórios</Button>
            {/* <Button onClick={() => getList('starred')} colorScheme='blue' variant='outline'>Starred</Button> */}
            {/* <List>
              {repos.map((r, index) => (
                <ListItem key={index}>
                  <Link target='_blank'>{r}</Link>
                </ListItem>
              ))
              }
            </List> */}
          </>}
      </VStack>
    </Flex>
  )
}
