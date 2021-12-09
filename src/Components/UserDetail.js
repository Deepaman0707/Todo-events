import React, { useEffect, useContext } from 'react'
import '../Styles/UserDetail.css'
import userContext from '../context/userContext'

function UserDetail() {
  const context = useContext(userContext)
  const { user, fetchUser } = context
  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='user'>
      <strong>
        <li>Name : {user.name}</li>
        <li>Email : {user.email}</li>
        <li>Created at : {user.date}</li>
      </strong>
    </div>
  )
}

export default UserDetail
