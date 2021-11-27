import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const note = [
    {
      card_id: 50,
      user_id: 19,
      title: 'Personal',
      description: 'Do personal things.',
      tag: 'Personal',
      date: '2021-11-25T18:30:00.000Z',
    },
    {
      card_id: 51,
      user_id: 19,
      title: 'Social',
      description: 'Do social things.',
      tag: 'Personal',
      date: '2021-11-25T18:30:00.000Z',
    },
    {
      card_id: 52,
      user_id: 19,
      title: 'Private',
      description: 'Do private things.',
      tag: 'Personal',
      date: '2021-11-25T18:30:00.000Z',
    },
  ]
  const [notes, setNotes] = useState(note)
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
