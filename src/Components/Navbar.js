import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import UserDetail from './UserDetail'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <header className='navbar'>
      <h1 className='todo'>To-Do</h1>

      <Link
        className={`option ${location.pathname === '/' ? 'active' : ''}`}
        to='/'
      >
        <HomeIcon />
        <p className='word'>Home</p>
      </Link>

      <Link
        className={`option ${location.pathname === '/about' ? 'active' : ''}`}
        to='/about'
      >
        <InfoIcon />
        <p className='word'>About</p>
      </Link>
      <div className='icons'>
        {localStorage.getItem('token') ? (
          <>
            <button className='option user' onClick={handleOpen}>
              <AccountCircleIcon />
              <p className='word userword'>User</p>
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box className='box'>
                <UserDetail handleClose={handleClose} />
              </Box>
            </Modal>

            <button
              className='option user'
              onClick={() => {
                localStorage.removeItem('token')
                navigate('/login')
              }}
            >
              <LogoutIcon />
              <p className='word userword'>Log Out</p>
            </button>
          </>
        ) : (
          <>
            <Link className='option' to='/login'>
              <LoginIcon />
              <p className='word'>Log In</p>
            </Link>
            <Link className='option' to='/signup'>
              <PersonAddIcon />
              <p className='word'>Sign Up</p>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
