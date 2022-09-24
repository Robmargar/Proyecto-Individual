import React from 'react'
import maquinita from '../imagenes/maquinita.jpg'
export default function Lan() {
  return (

    <div>
        <h1>Landing Page</h1>
        <img src={maquinita} alt="Img de Carga" />
        <a href="/home">
            <button>
                Entrar
            </button>
        </a>
    </div>
  )
}
