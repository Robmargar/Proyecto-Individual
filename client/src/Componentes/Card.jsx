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
        id:"",
        name: "",
        like:"0"
    });
    
    function handleOnChange(e){
        let newData= {...data};
        console.log(data.like)
        data.like==="0"?
         newData={...data,like:"1"}:newData={...data,like:"0"}
        setData(newData);
       
    };
    if(!img) {
        img=defult;
      }
    return (
        <button
        
         className="Card">
            <button
                  onSubmit={(e)=>{
                    e.preventDefault();  
                    dispatch(postlike(data));
                     }}
             className='Heart-butn' onClick={handleOnChange}>
                {
                    data.like==="1"?
                        <img className="Heart" name="1" src={heart2} alt="corazon_like_lleno"/>
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