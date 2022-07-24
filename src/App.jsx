import { useState } from 'react'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Work from './Components/Work'
import Techstack from './Components/Techstack'
import Footer from './Components/Footer'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About/>
    <Work/>
    <Techstack/>
    <Footer/>
    </>
  )
}

export default App
