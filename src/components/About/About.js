import React from 'react'
import img from '../../Images/image-amine.jpg'
import "./About.css"
const About = () => {
  return (
    <div id="about" class="jumbotron row">
        <div class="jumbotron text-center col-sm-6">
          <img
            style={{ borderRadius: '50%' }}
            src={img}
            alt="Img"
            width="300"
            height="300"
          />
        </div>
        <div class="jumbotron text-center col-sm-6">
          <h1>TAHRI Amine</h1>
          <p>specialize in the development of web applications.</p>
        </div>
      </div>
  )
}

export default About