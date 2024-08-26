import React from 'react'
import Searchbar from './Searchbar.jsx'
import pacman from '../imagenes/pacman.gif'
import Nav from './Nav'
import {Link} from 'react-router-dom';


import "./Header.css";


export default function Header() {  
  return (
    <header className='Back'>
        <div className='Header'>
          <Link to="/" ><img src={pacman} alt="Logo" className='Pcman' /></Link>
          <Searchbar />
          <div>
            <div>
            <Link to="/home/inicio">Iniciar Sesion</Link>
            </div>
          </div>
        </div> 
        <Nav/>     
    </header>
  )
}
