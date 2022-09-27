import React from 'react'
import { Link } from 'react-router-dom'

import "./Nav.css"

export default function Nav() {
  return (
    <nav className='Nav'>
        <Link to="/home" className='Link'>Home</Link>
        <Link to="/home/crear" className='Link' >Crear Videojuego</Link>   
    </nav>
  )
}
