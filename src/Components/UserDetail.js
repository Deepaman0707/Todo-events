import React, { useEffect, useContext } from 'react'
import '../Styles/UserDetail.css'
import userContext from '../context/userContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

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
      <div className='userprofile'>
        <AccountCircleIcon style={{ color: '#5f2680', fontSize: '100px' }} />
      </div>
    </div>
  )
}

export default UserDetail
