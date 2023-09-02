import React from 'react'
import "./Certifications.css"
const Certifications = () => {
  return (
    <div id="certifications" className="  text-center container-fluid">
        <h2>Certifications</h2>
        {[1, 2, 3, 4].map((el, index) => (
          <div class="col-sm-4">
            <img src={require('../../Images/certifReact.png')} alt="..." />
          </div>
        ))}
      </div>
  )
}

export default Certifications