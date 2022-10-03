import React from 'react'
import { Link } from 'react-router-dom'
import gameover from "../imagenes/game over.jpg"
import "./NotFound.css"

function NotFound() {
  return (
    <div className='Not'>
        <div>404 Page not found</div>
        <img src={gameover} alt="Not_found_img" />
        <Link to="/home">
          <div >
            <button className='GoHome'>Home</button>
          </div>
        </Link>
    </div>
  )
}

export default NotFound