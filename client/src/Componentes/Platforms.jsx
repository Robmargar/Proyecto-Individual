import React from 'react'
import Platform from './Platform'

export default function Platforms({platforms}) {
  return (
    <div>
        {platforms.map((p)=>(
           <Platform
            key={p.id}
            name={p.name}
           />
        ))}
    </div>
  );
}
