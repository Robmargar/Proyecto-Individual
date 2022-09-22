import React from "react";
import Genres from "./Genres";


export default function Card({img, name, genres}){
    return (<div>
        <span>{name}</span>
        <img src={img} alt="imgVG"/>
        {console.log(genres)}
        {/* <span>{genres}</span> */}
        <Genres genres={genres} / >
    </div>
    );
};