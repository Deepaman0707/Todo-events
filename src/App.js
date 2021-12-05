import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import NoteState from './context/NoteState'
import UserState from './context/UserState'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Alert from './Components/Alert'

function App() {
  const initialAlert = { type: '', message: '' }
  const [alert, setAlert] = useState(initialAlert)
  const [show, setShow] = useState(false)
  const showAlert = (type, message) => {
    setShow(true)
    setAlert({ type: type, message: message })
    setTimeout(() => {
      setShow(false)
      setAlert(initialAlert)
    }, 2000)
  }
  return (
    <>
      <NoteState>
        <UserState>
          <Router>
            <Navbar />
            <div className={`alertbox ${show ? '' : 'hide'}`}>
              <Alert alert={alert} />
            </div>
            <Routes>
              <Route path='/' element={<Home showAlert={showAlert} />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login showAlert={showAlert} />} />
              <Route
                path='/signup'
                element={<SignUp showAlert={showAlert} />}
              />
            </Routes>
          </Router>
        </UserState>
      </NoteState>
    </>
  )
}

export default App
