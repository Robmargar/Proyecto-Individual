import React from "react";
import Mapear from "./Mapear";


export default function Card({img, name, genres}){
    return (
    <a href="/home/detalle" >
        <button className="Card">
            <div >
                <div>{name}</div>
                <img className="ImgCard" src={img} alt="imgVG"/>
                <Mapear type="card" items={genres} / >    

            </div>
        </button>
    </a>
    );
};