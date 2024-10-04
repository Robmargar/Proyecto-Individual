import React,{useState} from 'react'
import Mapear from "./Mapear";
import { Link } from 'react-router-dom';
import defult from "../imagenes/default.jpg"
import heart from "../imagenes/heart-vacio.svg"
import heart2 from "../imagenes/heart-lleno.svg"
import "./Card.css"
import{ postlike} from "../actions/usersActions"
import { useDispatch } from "react-redux";





export default function Card({name,img,genres,id}){
    const dispatch=useDispatch();
    const [data, setData]=useState({
        videogameId:id,
        userId: "a4a4b7cc-3896-44f5-b418-07e542f7d6f5",
        like:"0"
    });
    
    function handleOnChange(e){
        let newData= {...data};
        data.like==="0"?
         newData={...data,like:"1"}:newData={...data,like:"0"}
        setData(newData);
        dispatch(postlike(data));

       
    };
    if(!img) {
        img=defult;
      }
    return (
        <button className="Card">
            <button onClick={handleOnChange} className='Heart-butn' >
                {
                    data.like==="1"?
                        <img className="Heart" name="1" src={heart2}  alt="corazon_like_lleno"/>
                    :
                        <img className="Heart" name="0" src={heart} alt="corazon_like"/>
                }
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