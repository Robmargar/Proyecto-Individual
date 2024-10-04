import React from 'react'
import Card from './Card';

export default function Like(data){

    return(
        <section>
            <div className='Cards'>
               {data.map((vg) => (
               <Card
                 name={vg.name}
                 img={vg.imagen}
                 genres={vg.generos}
                 id={vg.id} /> 
           ))}
            </div>
        </section>
    )
}