import { Text, Input, Image } from '@chakra-ui/react'
import { useEffect } from 'react'
import { ChangeEventHandler, useState } from 'react'

// export type GithubProps = {
//   handleChange: ChangeEventHandler<HTMLInputElement>
//   value: string,
// }

useEffect(() => {
  fetch('https://api.github.com/users/mojombo')
    .then(r => r.json).then(data => console.log(data))
}, [])

export const Github = () => {
  const [user, setUser] = useState('')

  const url = 'https://api.github.com/users/mojombo'
  // const img = "https://avatars.githubusercontent.com/u/1?v=4"

  // const user_url= `https://api.github.com/users/${user}`
  // console.log(user_url)

  // const followers = `https://api.github.com/${user}/followers`
  // console.log(followers)

  const handleSearch = () => {
    console.log({ user })
  }
  // function handleSearch(e: any) {
  //   const usuario = e.target.value
  //   const keyCode = e.which || e.keyCode
  //   const ENTER = 13

  // if (keyCode === ENTER) {
  //   fetch(url)
  //     .then(r => setUser(r.
  //       // user: r.name,
  //       // photo: r.avatar_url,
  //       // login: r.login,
  //       // repos: r.public_repos,
  //       // followers: r.followers,
  //       // following: r.following,
  //     ))
  // }

  return (
    <>
      <Input placeholder='Basic usage' value='mojombo' onKeyUp={handleSearch} onChange={(e) => setUser(e.target.value)} />
      {/* <Image src={img} /> */}
      <Text>usuário escolhido {user}</Text>
    </>
  )
}
