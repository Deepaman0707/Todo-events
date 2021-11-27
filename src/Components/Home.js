import React, { useState } from 'react'
import '../Styles/Home.css'
import AddCard from './AddCard'
import Cards from './Cards'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'

// import noteContext from '../context/noteContext'

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='container'>
      <div className='addcard'>
        <Button style={{ borderRadius: '50%' }} onClick={handleOpen}>
          <AddIcon fontSize='large' />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className='box'>
            <AddCard handleClose={handleClose} />
          </Box>
        </Modal>
      </div>
      <br />
      <div className='fields'>
        <Cards />
      </div>
    </div>
  )
}

export default Home
