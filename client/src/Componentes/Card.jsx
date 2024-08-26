import React from 'react'
import Mapear from "./Mapear";
import { Link } from 'react-router-dom';
import defult from "../imagenes/default.jpg"
import heart from "../imagenes/heart-vacio.svg"
import "./Card.css"




export default function Card({name,img,genres,id}){
    if(!img) {
        img=defult;
      }
    return (
        <button className="Card">
            <button className='Heart-butn' onClick={()=>alert("Hola soy corazon muaja")}>
                <img className="Heart" src={heart} alt="corazon_like"/>
            </button>
            <Link to={`/home/detalle/${id}`} key={id}>
            <div >
                <div className='Name'>{name}</div>
                <img className="ImgCard" src={img} alt="imgVG"/>
                <div className='SubTitle'>Generos</div>
                <Mapear type="card" items={genres} /> 
            </div>
            </Link>
        </button>
    );
};