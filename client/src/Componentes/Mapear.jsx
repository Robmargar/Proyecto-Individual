import React from 'react'

import "./Mapear.css"

export default function Mapear({type,items,subtype,handleOnChangeBox}) {


    if(type==="card"){
      return (
        <div className='Generos'>
            {items.map((item)=>(
              <div key={item} >
                {item} 
              </div>
            ))}
        </div>
      );
    }

    if(type==="check"){
      function handleChanges(e){
        handleOnChangeBox(e);
      };
      return(
        <div className='Generoscheck'>        
            {items.map((item)=>(
              <div key={item.name}>
                <input type="checkbox" name={subtype} value={item.name} id={item.name} onChange={handleChanges}/>
                <label>{item.name}</label><br/>
              </div>
            ))}
        </div>
      );
    }



}

