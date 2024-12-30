// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
// import Service from './components/Service'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Projects/>
      <Contact/>
     
    </div>
  )
}

export default App
