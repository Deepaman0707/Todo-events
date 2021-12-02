import React, { useState } from 'react'
import '../Styles/Home.css'
import AddCard from './AddCard'
import Cards from './Cards'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add'

// import noteContext from '../context/noteContext'

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='container'>
      <div className='cardbox'>
        <Cards />
      </div>
      <button className='addcard' onClick={handleOpen}>
        <AddIcon style={{ fontSize: '30px' }} />
      </button>
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
  )
}

export default Home
