import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'


function SignUp(props) {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Password: '',
  })

  let history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Name: user.Name,
        Email: user.Email,
        Password: user.Password,
      }),
    })
    const json = await response.json()
    console.log(json)
    if (json.success === true) {
      localStorage.setItem('token', json.authToken)
      history('/')
      props.showAlert('Success', 'Registered your account successfully! ')
    } else {
      props.showAlert(
        'Error',
        'Invalid Credential. Failed to create an account! '
      )
    }
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div className='box'>
      <form className='login' onSubmit={handleSubmit}>
        <p className='heading'>
          <strong>Sign Up</strong>
        </p>
        <div className='fields'>
          <TextField
            className='text'
            id='name'
            label='Name'
            variant='outlined'
            type='text'
            name='Name'
            value={user.Name}
            onChange={onChange}
            required
          />
        </div>
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
            Sign Up
          </Button>
          <div className='signup'>
            <p>Already have an account</p>
            <Link className='signupbox' to='/login'>
              <div className='signupbox'>
                <div className='signupicon'>
                  <LoginIcon fontSize='small' />
                </div>
                <div>Log In</div>
              </div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
