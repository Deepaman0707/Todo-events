import React from 'react'
import '../Styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'

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
      <Link
        className={`option ${location.pathname === '/search' ? 'active' : ''}`}
        to='/search'
      >
        Search
      </Link>
      <Link
        className={`option logout ${
          location.pathname === '/logout' ? 'active' : ''
        }`}
        to='/logout'
      >
        Logout
      </Link>
    </header>
  )
}

export default Navbar
