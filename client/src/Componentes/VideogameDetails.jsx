import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import Mapear from './Mapear';
import { useSelector, useDispatch } from "react-redux";
import { getVideogamesId } from "../actions/videogamesActions.js";
import defult from "../imagenes/default.jpg";
import sonic from "../imagenes/sonic.gif"
import { Link } from "react-router-dom"

import "./VideogameDetails.css"


export default function VideogameDetails() 
{
  const code=useParams();
  const dispatch = useDispatch();  

  const vid= useSelector(state=> state.videogames.gamedetail);
 
  useEffect(() => {
   setTimeout(()=> dispatch ( getVideogamesId(code.id)),50)
  }, [dispatch,code]);

  return (
    <div className='All'>
      <Link to="/home">
          {<button className='Cerrar'>X</button>}
      </Link> 
      {vid.name?<div>
        <div className='NameDetail'>{vid.name}</div>
        <div className='Detail'>
            <div >
            {/* className={errors.fecha_lanzamiento? "Danger":"PlaceForm"} */}
                <img className="ImgDetail" src={vid.imagen?vid.imagen:defult} alt="imgVG"/>
            </div>
            <div className='DataDetail'>
              <div>
                <div>
                  <h2 className='Data'>Descripción:</h2>
                  <p className='Description'>{vid.descripcion}</p>
                </div>
              </div>
              <div >
                <h2 className='Data'>Rating:    {vid.raiting}</h2>
                <h2 className='Data'>Fecha Lanzamiento:   {vid.fecha_lanzamiento}</h2>
                <h2 className='Data2'>Generos: </h2>
                {vid.generos&&<Mapear type="card" items={vid.generos}/>}
              </div>
            </div>    
        </div>         
      </div>:<img className='Maquinita'  src={sonic} alt="Sonic Loading" />}
    </div>
  );
}
