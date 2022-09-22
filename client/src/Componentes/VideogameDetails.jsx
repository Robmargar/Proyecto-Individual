import React from 'react'
import Genres from './Genres'
import Platform from "./Platform";

export default function VideogameDetails({name,img,description,fecha_lanzamiento,raiting,platforms,genres}) {
  return (
    <div>
        <div><img src={img} alt="imgVG"/></div>
        <div>
        <span>{name}</span>
        <span>{raiting}</span>
        <span>{fecha_lanzamiento}</span>
        <span>{description}</span>
        <Genres genres={genres} / >
        <Platform platfomrs={platforms}/>
        </div>
    </div>
  )
}
