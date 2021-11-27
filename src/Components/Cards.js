import React, { useContext } from 'react'
import noteContext from '../context/noteContext'
import CardItem from './CardItem'
import '../Styles/Cards.css'
import Grid from '@mui/material/Grid'

const Cards = () => {
  const context = useContext(noteContext)
  const { notes, setNotes } = context
  return (
    <Grid container spacing={2}>
      {notes.map((note) => {
        return (
          <Grid item xs={12} md={6} lg={3}>
            <CardItem note={note} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Cards
