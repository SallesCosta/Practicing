// TODO
// SETTIMEOUT PARA SIMULAR UM ATRAZO DO GETCH DE 2 SEGUNDOS... AP(USAR SKELETON) AÓS 1 SEGUNDO.. APARECE A FOTO.. AÓÓS O SEGUNDO SEGUNDO APARECEDRA AS OUTRAS INFORMÇOES OU VICE E VERSA.. FOTO POR ULTIMO

import { Text, Input, Image, VStack, Box, Flex, FormControl, Button, InputGroup, InputRightElement, Heading, Container, ListItem, List, Link, Stack, HStack } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import { UserContent, Error, MyInput } from './userContent'

export const Github = () => {
  const [initial, setInitial] = useState(false)
  const [name, setName] = useState<string>('')
  const [userName, setUsername] = useState('')
  const [followers, setFollowers] = useState('')
  const [following, setFollowing] = useState('')
  const [avatar, setAvatar] = useState('')
  const [repos, setRepos] = useState([])
  const [starred, setStarred] = useState([])
  const [userInput, setUserInput] = useState('')
  const [userInput2, setUserInput2] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(null)

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
        setRepos(Object.values(result))
      })
    console.log('Lista de Repositórios: ', repos)
    setRepos([])
  }

  const getStarredList = () => {
    fetch(`https://api.github.com/users/${userInput2}/starred`)
      .then(res => res.json())
      .then(result => {
        setStarred(Object.values(result))
      })
    console.log('Lista de Starreds: ', starred)
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

  if (initial) {
    return (
      <>
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
              getRepoList={getRepoList}
              getStarredList={getStarredList}
          />
        }
      </>
    )
  }

  return (
    <MyInput
      inputRef={inputRef}
      userInput={userInput}
      handleSearch={handleSearch}
      handleConfirm={handleConfirm}
      handleSubmit={handleSubmit}
    />
  )
}

// <HStack>
//         <VStack w='400px'>
//           <FormControl>
//             <InputGroup size='md' w='100%'>
//               <Input borderColor='blue' value={userInput} ref={inputRef} placeholder='an user...' onChange={handleSearch} onKeyUp={handleConfirm} />
//               <InputRightElement width='4.5rem'>
//                 <Button onClick={handleSubmit} colorScheme='blue' variant='outline'>Submit</Button>
//               </InputRightElement>
//             </InputGroup>
//           </FormControl>
//         </VStack>
//       </HStack>

// if (!initial) {
//   return <Error msg={error} />
// }


// ? <Error msg={error} />
{/* <UserContent
  avatar={avatar}
  name={name}
  userName={userName}
  followers={followers}
  following={following}
  getRepoList={getRepoList}
  getStarredList={getStarredList}
/> */}
