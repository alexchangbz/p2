import React from 'react'
import './navbar.css'

const Navbar = ({ bgColor }) => {
  return (
    <div 
      style={{ backgroundColor: bgColor }}
      className="container__navbar"
    >
        <div className="navbar">
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./portfolio">Portfolio</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar