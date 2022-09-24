import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{
        width: '100%',
        height: '64px',
        color: 'white',
        display:'flex',
        textDecoration:'none',
        gap:'16px'
    }}>
        <Link to="/home">Home</Link>
        <Link to="/home/crear">Crear Videojuego</Link>
       
    </nav>
  )
}
