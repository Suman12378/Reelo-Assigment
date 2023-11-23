import React from 'react'
import "../styles/navbar.scss"
import img1 from "../assets/reelo-logo.jpg";

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <img src={img1} alt="error" /> 
            </div>

            <div className="nav-links">
                <a href="/">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar