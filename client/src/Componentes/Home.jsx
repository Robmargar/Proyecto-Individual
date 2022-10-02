import React from 'react'
import Cards from './Cards'
import Filtros from './Filtros'
import { cleanState } from '../actions/videogamesActions'
import { useDispatch, useSelector } from 'react-redux'
import "./Home.css"
import Revisar from '../funciones/revisar'
import sonic from '../imagenes/sonic.gif'

export default function Home() {
  const dispatch=useDispatch();
  
  const gen = useSelector(state => state.app.genres);
  const plat = useSelector(state => state.app.plataforms);
  const vid= useSelector(state=> state.videogames.current)

  dispatch(cleanState());

  Revisar();

  return (

    <div className='Home'>
        <div>
         <div>
         {gen && plat && <Filtros/>}
         </div>
        </div>
        <div>
            <div>
                Paginas
            </div>
            <div>
              {vid.length >0?<Cards/>: <img className='Maquinita'  src={sonic} alt="Sonic Loading" />}
            </div>
        </div>
    </div>
  )
}
