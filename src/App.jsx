import { useContext, useEffect, useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import { UserContextProvider } from './context/UserContextProvider'
import { Usercontext } from './context/Usercontext'
import { ThemeProvider } from './context/Themecontext'

function App() {
  
const {user} = useContext(Usercontext);
const [theme, setTheme] = useState('light')
const setDarkTheme = ()=> {
  setTheme("dark")
}
const setLightTheme = ()=> {
  setTheme("light")
}

useEffect(()=> {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(theme)
}, [theme])
  return (
    <ThemeProvider value={{theme, setDarkTheme, setLightTheme}} >
      <h1>Learning for Context api : {user}</h1>
      <Profile />
    </ThemeProvider>
  )
}

export default App
