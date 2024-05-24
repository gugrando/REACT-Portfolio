/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/sections/Header'
import Home from './components/sections/Home'
import perfil from "/src/assets/perfil.png"
import waving from "/src/assets/waving.png"
import './App.css'
import Techs from './components/sections/Techs'
import DarkButton from './components/Dark'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Techs />
      <DarkButton />
    </>
  )
}

export default App
