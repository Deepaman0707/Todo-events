import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const [notes, setNotes] = useState([])

  // API Call to fetch all notes

  const fetchNote = async () => {
    try {
      const response = await fetch('http://localhost:4000/notes/fetchnotes', {
        method: 'GET',
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkRhdGEiOjE5LCJpYXQiOjE2MzgzNjIxMzF9.1tIcGBoZJLvapp4H8lgdyXS7XOifB5mOltQJxnr74C0',
        },
      })

      const parseRes = await response.json()
      setNotes(parseRes)
    } catch (err) {
      alert(err)
      console.error(err.message)
    }
  }

  // API Call to add a note

  const addNote = async (title, description, tag) => {
    try {
      await fetch('http://localhost:4000/notes/createnote', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkRhdGEiOjE5LCJpYXQiOjE2MzgzNjIxMzF9.1tIcGBoZJLvapp4H8lgdyXS7XOifB5mOltQJxnr74C0',
        },
        body: JSON.stringify({ title, description, tag }),
      })
      fetchNote()
    } catch (err) {
      alert(err)
      console.error(err.message)
    }
  }

  // API Call to delete a note

  const deleteNote = async (card_id) => {
    try {
      await fetch(`http://localhost:4000/notes/deletenote/${card_id}`, {
        method: 'DELETE',
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkRhdGEiOjE5LCJpYXQiOjE2MzgzNjIxMzF9.1tIcGBoZJLvapp4H8lgdyXS7XOifB5mOltQJxnr74C0',
        },
      })
      const newNote = notes.filter((note) => {
        return note.card_id !== card_id
      })
      setNotes(newNote)
    } catch (err) {
      alert(err)
      console.error(err.message)
    }
  }

  // API Call to edit a note

  const editNote = async (card_id, title, description, tag) => {
    try {
      // const response =
      await fetch(`http://localhost:4000/notes/updatenote/${card_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbkRhdGEiOjE5LCJpYXQiOjE2MzgzNjIxMzF9.1tIcGBoZJLvapp4H8lgdyXS7XOifB5mOltQJxnr74C0',
        },
        body: JSON.stringify({ title, description, tag }),
      })
      // const parseRes = await response.json()
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index]
        if (element.card_id === card_id) {
          element.title = title
          element.description = description
          element.tag = tag
          break
        }
      }
      fetchNote()
    } catch (err) {
      alert(err)
      console.error(err.message)
    }
  }

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, fetchNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
