import React, { useContext, useState } from 'react'
import '../Styles/CardItem.css'
import noteContext from '../context/noteContext'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import EditCard from './EditCard.js'

const CardItem = (props) => {
  const context = useContext(noteContext)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { deleteNote } = context
  const { note } = props
  return (
    <div className='cardbox'>
      <Card className='card' sx={{ borderRadius: '10px' }}>
        <CardHeader
          className='content'
          avatar={<Avatar sx={{ bgcolor: '#5f2680' }}></Avatar>}
          title={note.title}
          subheader={note.date}
        />
        <div className='break' />
        <CardContent className='content'>
          <Typography className='header' variant='body2'>
            {note.description}
          </Typography>
          <Typography variant='body2' color='GrayText'>
            {note.tag}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className='action'>
          <IconButton aria-label='edit' onClick={handleOpen}>
            <EditIcon className='icons' />
          </IconButton>
          <IconButton
            aria-label='delete'
            onClick={() => {
              deleteNote(note.card_id)
            }}
          >
            <DeleteOutlinedIcon className='icons' />
          </IconButton>
        </CardActions>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className='box'>
            <EditCard note={note} handleClose={handleClose} />
          </Box>
        </Modal>
      </Card>
    </div>
  )
}

export default CardItem
