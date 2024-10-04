import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch} from "react-redux";
import{ getlike} from "../actions/usersActions"
import { Link } from 'react-router-dom';

import "./Perfil.css"

export default function Perfil(){
    const dispatch=useDispatch();
    var likes=useSelector(state=>state.user.likes);
  
    const[data,setData]=useState({
        userId:"a4a4b7cc-3896-44f5-b418-07e542f7d6f5",
        like:false
    });

    
     function OnChange(){
         dispatch(getlike(data));
         const newData={...data,like:!data.like}
         setData(newData)
    };
    return(
        <div class="perfil">
            <h1> Estoy dentro del perfil</h1>
            
                <button onClick={OnChange}> Mis Megusta </button>
            {
              data.like===false?<div>Vacio</div>:
                likes.map((e)=><h1 id={e.name}>{e.name}</h1>)
              
            }
            <Link>
                <h3> Informacion</h3>           
            </Link>
        </div>
    )
}

