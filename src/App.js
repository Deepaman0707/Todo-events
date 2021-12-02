import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import NoteState from './context/NoteState'

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  )
}

export default App
