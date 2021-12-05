import React, { useState } from 'react'
import userContext from './userContext'

function UserState(props) {
  const [user, setUser] = useState([])
  const fetchUser = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/details', {
        method: 'POST',
        headers: {
          token: localStorage.getItem('token'),
        },
      })

      const parseRes = await response.json()
      setUser(parseRes)
    } catch (err) {
      alert(err)
      console.error(err.message)
    }
  }

  return (
    <userContext.Provider value={{ user, fetchUser }}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState
