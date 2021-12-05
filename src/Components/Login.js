import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

function Login(props) {
  const [user, setUser] = useState({
    Email: '',
    Password: '',
  })

  let history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ Email: user.Email, Password: user.Password }),
    })
    const json = await response.json()
    if (json.success === true) {
      localStorage.setItem('token', json.authToken)
      history('/')
      props.showAlert('Success', 'Login successfully! ')
    } else {
      props.showAlert('Error', 'Invalid Credentials! ')
    }
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className='box'>
      <form className='login' onSubmit={handleSubmit}>
        <p className='heading'>
          <strong>Log In</strong>
        </p>
        <div className='fields'>
          <TextField
            className='text'
            id='email'
            label='E-mail'
            variant='outlined'
            type='text'
            name='Email'
            value={user.Email}
            onChange={onChange}
            required
          />
        </div>
        <div className='fields'>
          <TextField
            className='text'
            id='password'
            label='Password'
            variant='outlined'
            type='Password'
            name='Password'
            value={user.Password}
            onChange={onChange}
            required
          />
        </div>
        <div className='fields'>
          <Button
            type='submit'
            className='submit'
            disableElevation
            variant='contained'
          >
            Log In
          </Button>
          <div className='signup'>
            <p>Create new account </p>
            <Link className='signupbox' to='/signup'>
              <div className='signupbox'>
                <div className='signupicon'>
                  <PersonAddIcon fontSize='small' />
                </div>
                <div>Sign Up</div>
              </div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
