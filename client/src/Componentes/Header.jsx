import React from 'react'
import Searchbar from './Searchbar.jsx'
import pacman from '../imagenes/pacman.gif'
import Nav from './Nav'

export default function Header() {
  return (
    <header>
        <div>
            <img src={pacman} alt="Logo" />
        </div>
        <div>
            <Searchbar/>
            <Nav/>
        </div>
    </header>
  )
}
