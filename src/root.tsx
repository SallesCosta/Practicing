import { createGlobalStyle } from 'styled-components'
import { App } from './App'
import 'normalize.css'

const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   margin: 0;
   padding: 0;
}
`

export function Root() {
  return (
    <>
      <GlobalStyled />
      <App />
    </>
  )
}
