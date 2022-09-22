import React from 'react'

export default function Cards({videogames}) {
  return (
    <div>
        {videogames.map((vg)=>(
           <Gen
            key={vg.id}
            img={vg.img}
            genres={vg.genres}
           />
        ))}
    </div>
  );
}
