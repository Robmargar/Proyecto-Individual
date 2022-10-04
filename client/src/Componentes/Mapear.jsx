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
              <div key={item.id}>
                <input type="checkbox" name={subtype} value={item.id} id={item.id} onChange={handleChanges}/>
                <label>{item.name}</label><br/>
              </div>
            ))}
        </div>
      );
    }

    if(type==="checkfilter"){
      function handleChanges(e){
        handleOnChangeBox(e);
      };
      return(
        <div className='GeneroscheckFilter'>        
            {items.map((item)=>(
              <div key={item.name}>
                <input type="radio" name={item.name} value={item.name} id={item.id} onChange={handleChanges}/>
                <label>{item.name}</label><br/>
              </div>
            ))}
        </div>
      );
    }


}

