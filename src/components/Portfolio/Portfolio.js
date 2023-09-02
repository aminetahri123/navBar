import React from 'react'
import './Portfolio.css'
//import "./Portfolio.scss"
const Portfolio = () => {
  return (
    // <div id="portfolio" className="container-fluid text-center bg-grey">
    //   <h2>My Projects </h2>
    //   {[1, 2, 3, 4].map((el, index) => (
    //     <div class="item col-sm-6">
    //       <img
    //         class="image"
    //         src={require('../../Images/projects.jpg')}
    //         alt="..."
    //       />
    //     </div>
    //   ))}
    // </div>

    <div className="portfolio" id="portfolio">
      <h1>My Projects</h1>
      <div className="containera">
        {[1, 2, 3, 4].map((el) => (
          <div className="item">
            <img
              className="image"
              src={require('../../Images/projects.jpg')}
              alt="..."
            />

            <h3>
              <b2 className="project-stack">MERN Stack</b2>
              <h1 className="project-title">Project...</h1>
              <p className="project-description">Description...........</p>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
