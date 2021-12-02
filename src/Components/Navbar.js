import React from 'react'
import '../Styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

function Navbar() {
  const location = useLocation()
  return (
    <header className='navbar'>
      <div className='todo'>To-Do</div>

      <Link
        className={`option ${location.pathname === '/' ? 'active' : ''}`}
        to='/'
      >
        Home
      </Link>

      <Link
        className={`option ${location.pathname === '/about' ? 'active' : ''}`}
        to='/about'
      >
        About
      </Link>
      <div className='icons'>
        <div className='option'>
          <AccountCircleIcon />
        </div>
        <div className='option'>
          <LogoutIcon />
        </div>
      </div>
    </header>
  )
}

export default Navbar
