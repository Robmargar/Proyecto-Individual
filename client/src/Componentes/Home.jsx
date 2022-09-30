import React from 'react'
import Cards from './Cards'
import Filtros from './Filtros'
import { cleanState } from '../actions/videogamesActions'
import { useDispatch } from 'react-redux'

import "./Home.css"

export default function Home() {
  const dispatch=useDispatch();
  dispatch(cleanState());
  
  return (
    <div className='Home'>
        <div>
         <div>
            <Filtros/>
         </div>
        </div>
        <div>
            <h2>
                Paginado
            </h2>
            <div>
                <Cards/>
            </div>
        </div>
    </div>
  )
}
