import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ bgColor }) => {
  return (
    <div 
      style={{ backgroundColor: bgColor }}
      className="container__navbar"
    >
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/work">Work</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar