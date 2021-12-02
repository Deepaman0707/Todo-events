import React, { useContext, useState } from 'react'
import noteContext from '../context/noteContext'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import '../Styles/AddCard.css'

const EditCard = (props) => {
  const context = useContext(noteContext)
  const { editNote } = context
  const { note } = props

  const [data, setData] = useState({
    title: note.title,
    description: note.description,
    tag: note.tag,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    editNote(note.card_id, data.title, data.description, data.tag)
    props.handleClose()
  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <p className='heading'>Edit Card</p>
      <form>
        <div className='fields'>
          <TextField
            className='text'
            id='outlined-basic'
            label='Title'
            variant='outlined'
            type='text'
            name='title'
            value={data.title}
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
            value={data.description}
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
            value={data.tag}
            onChange={onChange}
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

export default EditCard
