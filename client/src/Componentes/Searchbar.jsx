import React,{useState} from 'react'
import{getVideogamesSearch} from "../actions/videogamesActions";
import { useDispatch } from "react-redux";
import search from "../imagenes/search.svg"


import "./Searchbar.css"

export default function Searchbar() {
  const dispatch=useDispatch();

  const [data, setData]=useState({
    name:"",
  });

  function handleOnChange(e){
    const newData={...data,[e.target.name]:e.target.value};
    setData(newData);
    console.log(newData);
  }

  return (
    <form 
      onSubmit={(e)=>{
       e.preventDefault();
      dispatch(getVideogamesSearch(data.name));
      setData({name:""});
    }}> 
    
      <div className='Search'>
        <img src={search} className='Search-Icon' alt="Search-icon" />
        <input className='P-Search'
        type="text"
        placeholder= 'Buscar Videojuego...'
        name="name"
        value={data.name}
        onChange={handleOnChange}
        />
       
       <input  className='Btn'
        type="submit"
        value="Buscar"
        /> 
        
      </div>
    </form>
  )
}
