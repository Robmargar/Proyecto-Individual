import React from 'react'


import "./InicioSesion.css";


export default function InicioSesion() {  
  return (
    <div>
        <div >
            <input className='Place'
            type="text"
            placeholder= 'Email'
            name="name"
            // value={data.name}
            // onChange={handleOnChange}
            />
            
            <input className='Place'
            type="text"
            placeholder= 'Contraseña...'
            name="name"
            // value={data.cont}
            // onChange={handleOnChange}
            />
            
            <input  className='Btn'
            type="submit"
            value="Iniciar Sesión"
            /> 
        </div>      
    </div>
  )
}