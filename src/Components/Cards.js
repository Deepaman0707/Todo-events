import React, { useEffect, useContext } from 'react'
import noteContext from '../context/noteContext'
import CardItem from './CardItem'
import '../Styles/Cards.css'
import Grid from '@mui/material/Grid'

const Cards = () => {
  const context = useContext(noteContext)
  const { notes, fetchNote } = context
  useEffect(() => {
    fetchNote()
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
              <CardItem
                key={note.card_id}
                note={note}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Cards
