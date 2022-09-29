import {React} from 'react'
import Mapear from "./Mapear";
import defult from "../imagenes/default.jpg"
import "./Card.css"




export default function Card({key,name,img,genres}){
    console.log(img);
    if(!img) {
        img=defult;
      }
    return (
        <button className="Card">
            <div >
                <div className='Name'>{name}</div>
                <img className="ImgCard" src={img} alt="imgVG"/>
                <div className='SubTitle'>Generos</div>
                <Mapear type="card" items={genres} /> 
            </div>
        </button>
    );
};