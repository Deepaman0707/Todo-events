import React, { useState } from 'react'
import '../Styles/Home.css'
import AddCard from './AddCard'
import Cards from './Cards'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add'

const Home = (props) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { showAlert } = props
  return (
    <div className='container'>
      <div className='cards'>
        <Cards showAlert={showAlert} />
      </div>
      <div className='add'>
        <button className='addcard' onClick={handleOpen}>
          <AddIcon style={{ fontSize: '30px' }} />
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='box'>
          <AddCard showAlert={showAlert} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

export default Home
