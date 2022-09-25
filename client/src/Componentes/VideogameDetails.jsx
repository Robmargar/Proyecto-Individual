import React from 'react';
import Mapear from './Mapear';

export default function VideogameDetails({name,img,description,fecha_lanzamiento,raiting,platforms,genres}) 
{
  genres=[{ name: "Indi" }, { name: "aventura" }];
  platforms=[{ name: "pc" }, { name: "play-one" }];
  
  return (
    <div className='Detail'>
        {console.log("estoy en detalles")}
        <div>
          <img src={img} alt="imgVG"/>
        </div>
        <div>
          <span>{name}</span>
          <span>{raiting}</span>
          <span>{fecha_lanzamiento}</span>
          <span>{description}</span>
          <Mapear type="check" items={genres}/>
          <Mapear type="check" items={platforms}/>          
        </div>
    </div>
  )
}
