import React from "react";
import Genres from "./Genres";


export default function Card({img, name, genres}){
    return (
    <a href="/home/detalle" >
        <button className="Card">
            <div >
                <div>{name}</div>
                <img className="ImgCard" src={img} alt="imgVG"/>
                <Genres genres={genres} / >    
            </div>
        </button>
    </a>
    );
};