import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const [notes, setNotes] = useState([])

  // API Call to fetch all notes

  const fetchNote = async () => {
    try {
      const response = await fetch('https://todo-event-database.herokuapp.com/notes/fetchnotes', {
        method: 'GET',
        headers: {
          token:
            localStorage.getItem('token'),
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
      await fetch('https://todo-event-database.herokuapp.com/notes/createnote', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          token:
            localStorage.getItem('token'),
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
      await fetch(`https://todo-event-database.herokuapp.com/notes/deletenote/${card_id}`, {
        method: 'DELETE',
        headers: {
          token:
            localStorage.getItem('token'),
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
      await fetch(`https://todo-event-database.herokuapp.com/notes/updatenote/${card_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          token:
            localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      })
      // const parseRes = await response.json()
      let newNotes = JSON.parse(JSON.stringify(notes))

      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index]
        if (element.card_id === card_id) {
          newNotes[index].title = title
          newNotes[index].description = description
          newNotes[index].tag = tag
          break
        }
      }
      setNotes(newNotes)
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
