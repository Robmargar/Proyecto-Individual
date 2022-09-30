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
          <Link to="/home" ><img src={pacman} alt="Logo" className='Pcman' /></Link>
          <Searchbar />
        </div> 
        <Nav/>
       
    </header>
  )
}
