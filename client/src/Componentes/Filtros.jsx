import React from 'react';
import Mapear from './Mapear';
import { orderBy , filterBy, getVideogames} from '../actions/videogamesActions';
import { useDispatch,useSelector } from 'react-redux';


import "./Filtros.css";
 
// const genres=[{name:"indi"}, {name:"adventure"},{ name:"shooter"}, {name:"meromero"}, {name:"puzzle"}, {name:"changuito"}, {name:"sobroson"}, {name:"spaguetti"},{name:"pasion"}, {name:"ahora"}, {name:"dices"}, {name:"reconocer"}, {name:"ayer"}, {name:"aplacar"},{name:"shalala"}];

export default function Filtros() {
    
    const dispatch=useDispatch();
       const genres=useSelector(state=>state.app.genres);
  

function handleOnGet(e){
    dispatch(getVideogames())
}
 function handleOnChange(e){
    console.log(e.target.value)
    dispatch(orderBy(e.target.value));

 }

 function handleOnChangeGenres(e){
    console.log("lo que mando---->"+e.target.value);
    dispatch(filterBy(e.target.name));
    e.target.checked=false;
 }

    return (
    <div>
        <div>
            <button type='submit' className='GetAll' onClick={handleOnGet}>TRAER TODOS</button>
            <h2 className='TitleF'>ORDENAMIENTO</h2>
            <div>
                <div className='TitleOrden'>Nombre</div>
                <input
                 className="BtnOrden" 
                 type="submit" 
                 name="name" 
                 value='A-->Z'
                 onClick={handleOnChange} 
                 />
                <input 
                className="BtnOrden" 
                type="submit" 
                name="name"
                value='Z-->A'
                onClick={handleOnChange} 
                />
            </div>
            <div>
                <div className='TitleOrden'>Rating</div>
                <input 
                className="BtnOrden" 
                type="submit" 
                name="name" 
                value='Rating +'
                onClick={handleOnChange} 
                />
                <input 
                className="BtnOrden" 
                type="submit" 
                name="name" 
                value='Rating -'
                onClick={handleOnChange} 
                />
            </div>
        </div>

        <h2 className='TitleF'>FILTROS </h2>
        
        <div>
            <div className='TitleOrden'>Origen Videojuego</div>
                <input
                    className="BtnOrden" 
                    type="submit" 
                    name="name" 
                    value='Api'
                    onClick={handleOnChange} 
                />
                
                <input 
                    className="BtnOrden" 
                    type="submit" 
                    name="name"
                    value='Creado'
                    onClick={handleOnChange} 
                />
        </div>

        <div>
            <form                
                onSubmit={(e)=>{
                e.preventDefault();  
                console.log(e.target.value)
                dispatch(orderBy(e.target.value));
               
                }} 
            >
                <div className='TitleFiltros'>Generos</div>
                <Mapear type="checkfilter" items={genres} subtype="generos" handleOnChangeBox={handleOnChangeGenres}/> 
            </form>
        </div>
       
    </div>
  )
}
