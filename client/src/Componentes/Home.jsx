import React from 'react'
import Cards from './Cards'
import Filtros from './Filtros'

import "./Home.css"

export default function Home() {
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
