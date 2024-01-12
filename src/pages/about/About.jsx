import React from 'react'
import './About.css'
import headshot from '../../asset/about/headshot-1.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-banner">
        <div className="about-banner-headshot">
          <img src={headshot} alt="" />
        </div>
        <div className="about-banner-bio">
          <h3>Jasmine Lee</h3>
          <p>
          I've been captivated by the vast expanse of the night sky. I used to spend hours gazing at the stars, feeling a deep connection to the mysteries of the cosmos.
          As I grew older, my fascination with the universe evolved into a profound spiritual journey.
          </p>
          <button>WHAT I DO</button>
        </div>
      </div>
    </div>
  )
}

export default About