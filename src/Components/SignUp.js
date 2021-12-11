import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
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
    const response = await fetch(
      'https://todo-event-database.herokuapp.com/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          Name: user.Name,
          Email: user.Email,
          Password: user.Password,
        }),
      }
    )
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
    <div className='loginbox'>
      <p className='heading'>Sign Up</p>
      <form onSubmit={handleSubmit}>
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
        <div className='buttonfields'>
          <button
            type='submit'
            className='submit'
            disableElevation
            variant='contained'
          >
            <p>Sign Up</p>
          </button>
          <div className='signup'>
            <div>Already have an account</div>
            <div className='sign'>
              <Link className='link' to='/login'>
                <div className='signuplink'>
                  <LoginIcon fontSize='small' color='primary' />
                  <div className='text'>Log In</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
