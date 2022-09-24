import React,{useState} from 'react'



export default function Formulario() {
    
    const [data, setData]=useState({
        name: "",
        descripcion: "",
        fecha_lanzamiento: "",
        raiting: "",
        plataformas: "",
        generos: ""
    });
    
    function handleOnChange(e){
        setData((prevData)=>{
           return{
            ...prevData,
            [e.target.name]:e.target.value,
         };
        });
    }
    
  return (
    <form
        onSubmit={(e)=>{
        e.preventDefault();
        console.log(data);
    }} 
    >
    
        <div>
            <input
            type="text"
            placeholder="Nombre del Videojuego"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            />
            <span>"mensaje de error"</span>
        </div>

        <div>
            <input
            type="text"
            placeholder="Descripción"
            name="descripcion"
            value={data.descripcion}
            onChange={handleOnChange}
            />
            <span>"mensaje de error"</span>
        </div>

        <div>
            <input
            type="text"
            placeholder="Fecha de lanzamiento"
            name="fecha_lanzamiento"
            value={data.fecha_lanzamiento}
            onChange={handleOnChange}
            />
            <span>"mensaje de error"</span>
        </div>

        <div>
            <input
            type="int"
            placeholder="Rating"
            name="raiting"
            value={data.raiting}
            onChange={handleOnChange}
            />
            <span>"mensaje de error"</span>
        </div>

        <button type='submit'> Crear Videojuego</button>
    </form>

  )
}
