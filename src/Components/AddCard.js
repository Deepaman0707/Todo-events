import React, { useContext, useState } from 'react'
import noteContext from '../context/noteContext'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import '../Styles/AddCard.css'

const AddCard = (props) => {
  const context = useContext(noteContext)
  const { addNote } = context

  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    props.handleClose()
    props.showAlert('Success', 'Successfully created a new note! ')
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <p className='heading'>Add New Card</p>
      <form>
        <div className='fields'>
          <TextField
            className='text'
            id='outlined-basic'
            label='Title'
            variant='outlined'
            type='text'
            name='title'
            onChange={onChange}
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
            name='description'
            onChange={onChange}
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
            name='tag'
            onChange={onChange}
          />
        </div>
        <div className='fields'>
          <Button
            className='submit'
            disabled={note.title.length < 3 || note.description.length < 3}
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
