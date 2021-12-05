import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/noteContext'
import CardItem from './CardItem'
import '../Styles/Cards.css'
import Grid from '@mui/material/Grid'

const Cards = (props) => {
  const navigate = useNavigate()
  const context = useContext(noteContext)
  const { notes, fetchNote } = context
  const { showAlert } = props
  useEffect(() => {
    if (localStorage.getItem('token')) fetchNote()
    else navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let count = 0
  return (
    <div className='gridbox'>
      <Grid container>
        {notes.map((note) => {
          return (
            <Grid
              key={(count = count + 1)}
              className='grid'
              item
              sm={12}
              md={6}
              lg={4}
            >
              <CardItem key={note.card_id} showAlert={showAlert} note={note} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Cards
