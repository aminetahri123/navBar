import { useState,useEffect } from 'react'
import './NavBar.css'
const NavBar = () => {
  const [Open, setOpen] = useState(false)


  return (
    <nav className="Navbar">
      <span className="nav-logo">Portfolio</span>
      <div className={`nav-items ${Open && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/Blog Page">Blog Page</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${Open && "open"}`}
        onClick={() => setOpen(!Open)}
      >
        <div className="bar"></div>
      </div>
    </nav>
    
  )
}

export default NavBar
