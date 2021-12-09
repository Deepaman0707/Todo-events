import React from 'react'
import '../Styles/About.css'
import getsetgo from '../images/getsetgo.png'
import programmer from '../images/programmer.png'

const About = () => {
  return (
    <div className='aboutBox'>
      <h1 className='aboutheading'>About website</h1>
      <div className='aboutPage'>
        <img className='pagelogo' src={getsetgo} alt='logo' />
        <div>
          Are you tired by missing deadlines of the day? Time to say goodbye to
          all the missing deadlines. Start from today, start from now with Get
          Set Go, that will make your day more organized !
        </div>
      </div>
      <h1 className='aboutheading'>About me?</h1>
      <div className='aboutPage'>
        <img className='pagelogo' src={programmer} alt='logo' />
        Well, I am a self-taught programmer who is a tech enthusiast and
        passionate about learning new things. <br />I can spend my whole day
        with DSA, HTML, CSS, React and other web technologies. As a web
        developer, I take care about creating amazing and useful website. For
        me, coding can break a very big problem into fragments. Looking forward
        to new opportunities !
      </div>
    </div>
  )
}

export default About
