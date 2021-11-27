import React, { useContext } from 'react'
import noteContext from '../context/noteContext'

const About = () => {
  const a = useContext(noteContext)
  return (
    <div>
      <h1>{a.name}</h1>
      <h1>{a.class}</h1>
    </div>
  )
}

export default About
