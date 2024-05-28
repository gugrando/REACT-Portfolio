/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/sections/Header'
import Home from './components/sections/Home'
import Techs from './components/sections/Techs'
import About from './components/sections/About'
import DarkButton from './components/Dark'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Techs />
      <DarkButton />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
