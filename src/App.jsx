/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import ContentContainer from './components/ContentContainer'
import HomePage from './components/HomePage.jsx'
import ProjectPage from './components/ProjectsPage.jsx'
import './App.css'

function App() {
  return (
      <Router>
        <Header />
          <ContentContainer>
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/home" element={<HomePage/>} />
              <Route path="/project" element={<ProjectPage/>} />
            </Routes>
          </ContentContainer>
        <Footer />
      </Router>
  )
}

export default App
