import React from 'react'
import '../Styles/CardItem.css'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditIcon from '@mui/icons-material/Edit'

const CardItem = (props) => {
  const { note } = props
  return (
    <div>
      <Card className='cards' sx={{ maxWidth: 345 }}>
        <CardHeader
          className='content'
          avatar={<Avatar sx={{ bgcolor: '#6d4c41' }}></Avatar>}
          title={note.title}
          subheader={note.date}
        />
        <div className='break' />
        <CardContent className='content'>
          <Typography variant='body2' color='text.secondary'>
            {note.description}
          </Typography>
          <Typography className='header' variant='body2' color='text.secondary'>
            {note.tag}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='share'>
            <EditIcon />
          </IconButton>
          <IconButton aria-label='add to favorites'>
            <DeleteOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default CardItem
