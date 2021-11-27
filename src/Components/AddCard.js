import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import '../Styles/AddCard.css'

const AddCard = (props) => {
  const handleSubmit = () => {
    props.handleClose()
  }
  return (
    <div>
      <h1 className='heading'>Add New Card</h1>
      <form>
        <div className='fields'>
          <TextField
            className='text'
            id='outlined-basic'
            label='Title'
            variant='outlined'
            type='text'
            required
          />
        </div>
        <div className='fields'>
          <TextField
            className='text'
            id='outlined-basic'
            label='Description'
            variant='outlined'
            type='text'
            required
          />
        </div>
        <div className='fields'>
          <TextField
            className='text'
            id='outlined-basic'
            label='Tag'
            variant='outlined'
            type='text'
          />
        </div>
        <div className='fields'>
          <Button
            className='submit'
            disableElevation
            variant='contained'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddCard
