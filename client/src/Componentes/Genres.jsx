import React from 'react'
import Gen from './Gen'

export default function Genres({genres}) {
  return (
    <div>
        {genres.map((gen)=>(
           <Gen
           
            key={gen.id}
            name={gen.name}
           />
        ))}
    </div>
  );
}
