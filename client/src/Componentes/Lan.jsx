import {React} from 'react';
import Revisar from '../funciones/revisar';
import maquinita from '../imagenes/maquinita.jpg';
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";

import"./Lan.css"

export default function Lan() {

  const entrar=useSelector(state=>state.videogames)
  console.log(entrar);
  Revisar();
  return (

    <div className='Lan'>
        
        <img  src={maquinita} alt="Img de Carga" />
        <Link to="/home">
        {entrar.backup.length>0?<h1><button className="LanBtn" >Entrar</button></h1>: <h1>Loading...</h1>}
        </Link>
    </div>
  )
}
