import {React} from 'react'
import Mapear from "./Mapear";
import "./Card.css"




export default function Card({key,name,img,genres}){
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