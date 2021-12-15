import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import ReactLoading from 'react-loading'

function Login(props) {
  const [user, setUser] = useState({
    Email: '',
    Password: '',
  })

  const [loading, setLoading] = useState(false)

  let history = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch(
      'https://todo-event-database.herokuapp.com/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ Email: user.Email, Password: user.Password }),
      }
    )
    const json = await response.json()
    if (json.success === true) {
      localStorage.setItem('token', json.authToken)
      history('/')
      setLoading(false)
      props.showAlert('Success', 'Login successfully! ')
    } else {
      props.showAlert('Error', 'Invalid Credentials! ')
    }
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <div>
      {loading ? (
        <div class='outer'>
          <div class='middle'>
            <div class='inner'>
              <ReactLoading type={'spinningBubbles'} color='#fff' />
            </div>
          </div>
        </div>
      ) : (
        <div className='loginbox'>
          <p className='heading'>Log In</p>
          <form onSubmit={handleSubmit}>
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
                className='submit'
                type='submit'
                disableElevation
                variant='contained'
              >
                <p>Log In</p>
              </button>
              <div className='signup'>
                <div>Create new account</div>
                <div className='sign'>
                  <Link className='link' to='/signup'>
                    <div className='signuplink'>
                      <PersonAddIcon fontSize='small' color='primary' />
                      <div className='text'>Sign Up</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Login
