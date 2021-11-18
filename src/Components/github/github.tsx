// TODO
// SETTIMEOUT PARA SIMULAR UM ATRAZO DO GETCH DE 2 SEGUNDOS... AP(USAR SKELETON) AÓS 1 SEGUNDO.. APARECE A FOTO.. AÓÓS O SEGUNDO SEGUNDO APARECEDRA AS OUTRAS INFORMÇOES OU VICE E VERSA.. FOTO POR ULTIMO

import { Box, Flex, HStack, List, ListItem, VStack } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import { UserContent, Error, MyInput } from './subComponents'

export const Github = () => {
  const [initial, setInitial] = useState(false)
  const [name, setName] = useState<string>('')
  const [userName, setUsername] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [avatar, setAvatar] = useState('')
  const [repos, setRepos] = useState([])
  const [repoURL, setRepoURL] = useState([])
  const [starred, setStarred] = useState([])
  const [userInput, setUserInput] = useState('')
  const [userInput2, setUserInput2] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(null)
  const [showRepos, setShowRepos] = useState(false)
  const [showStared, setShowStarred] = useState(false)

  useEffect(() => {
    inputRef.current?.focus()

  })

  const setData = ({
    name,
    login,
    followers,
    following,
    avatar_url,
  }: any) => {
    setName(name),
      setUsername(login),
      setFollowers(followers),
      setFollowing(following),
      setAvatar(avatar_url)
  }

  const handleSearch = (e: any) => {
    setUserInput(e.target.value)
    setUserInput2(e.target.value)
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

  const getRepoList = () => {
    fetch(`https://api.github.com/users/${userInput2}/repos`)
      .then(res => res.json())
      .then(result => {
        Object.values(result)
        setRepos(
          result.map((repo: { name: string; html_url: string }) => ({
            name: repo.name,
            link: repo.html_url,
          }))
        )
      })
    console.log(repos)
    setRepos([])
  }

  const getStarredList = () => {
    fetch(`https://api.github.com/users/${userInput2}/starred`)
      .then(res => res.json())
      .then(result => {
        setStarred(Object.values(result))
      })
    setStarred([])
  }

  const handleSubmit = () => {
    setInitial(true)
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
    getRepoList()
    getStarredList()
  }

  function show(i: string) {
    if (i === 'repo') {
      setShowRepos(!showRepos)
    }
    setShowStarred(!showStared)
  }

  if (initial) {
    return (
      <HStack spacing='6'>
        <VStack>
          <MyInput
            inputRef={inputRef}
            userInput={userInput}
            handleSearch={handleSearch}
            handleConfirm={handleConfirm}
            handleSubmit={handleSubmit}
          />
          {error
            ? <Error msg={error} />
            : <UserContent
              avatar={avatar}
              name={name}
              userName={userName}
              followers={followers}
              following={following}
              show={show}
            />
          }
        </VStack>
        {showRepos &&
          <Box
            w='250px'
            maxH='350px'
            overflow='scroll'
            // border='1px'
            borderColor='gray.200'
          >
            <List>
              {repos.map((index) => (
                <ListItem key={index}>{index}</ListItem>
              ))}
            </List>
          </Box>
        }
        <Box
          w='300px'
          h='300px'
        >
          <List>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
            <ListItem >starred</ListItem>
          </List>
        </Box>
      </HStack>
    )
  }

  return (
    <Flex>
      <MyInput
        inputRef={inputRef}
        userInput={userInput}
        handleSearch={handleSearch}
        handleConfirm={handleConfirm}
        handleSubmit={handleSubmit}
      />
    </Flex>
  )
}
