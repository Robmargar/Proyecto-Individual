import React from 'react';
import Revisar from '../funciones/revisar';
import loading2 from '../imagenes/loading2.gif';
import maquinita from '../imagenes/maquinita.jpg';
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";

import"./Lan.css"

export default function Lan() {
  const entrar=useSelector(state=>state.videogames);

  Revisar();
  return (
    <div className='Lan'>
        <img className='Maquinita'  src={maquinita} alt="Img de Carga" />
        <div>
          <Link to="/home">
          {entrar.backup.length>0?<h1><button className="LanBtn">Entrar</button></h1>: <img className='load' src={loading2} alt="Img de Carga" />}
          </Link>
        </div>   
    </div>
  )
}
