import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import Mapear from './Mapear';
import "./Filtros.css";
  
// const plataformas=[{name:"indi"}, {name:"adventure de tooooodo"},{ name:"shooter"}, {name:"meromero"}, {name:"puzzle"}, {name:"changuito"}, {name:"sobroson"}, {name:"spaguetti"},{name:"pasion"}, {name:"ahora"}, {name:"dices"}, {name:"reconocer"}, {name:"ayer"}, {name:"aplacar"},{name:"shalala"},{name:"indi"}, {name:"adventure"},{ name:"shooter"}, {name:"meromero"}, {name:"puzzle"}, {name:"changuito"}, {name:"sobroson"}, {name:"spaguetti"},{name:"pasion"}, {name:"ahora"}, {name:"dices"}, {name:"reconocer"}, {name:"ayer"}, {name:"aplacar"},{name:"shalala"},{name:"indi"}, {name:"adventure"},{ name:"shooter"}, {name:"meromero"}, {name:"puzzle"}, {name:"changuito"}, {name:"sobroson"}, {name:"spaguetti"},{name:"pasion"}, {name:"ahora"}, {name:"dices"}, {name:"reconocer"}, {name:"ayer"}, {name:"aplacar"},{name:"shalala"}];
// const genres=[{name:"indi"}, {name:"adventure de todoooo"},{ name:"shooter"}, {name:"meromero"}, {name:"puzzle"}, {name:"changuito"}, {name:"sobroson"}, {name:"spaguetti"},{name:"pasion"}, {name:"ahora"}, {name:"dices"}, {name:"reconocer"}, {name:"ayer"}, {name:"aplacar"},{name:"shalala"}];
const filtroNombre=[{name: "API"},{name:"Creado"} ];

export default function Filtros() {

    const dispatch=useDispatch();
    const genres=useSelector(state=>state.app.genres);

    const[data,setData]=useState({
        name:"",
        generos:[],
        plataformas:[],
    });

    const handleOnChangeBox=(e)=>{
        let newArray=[...data[e.target.name]];
        if(e.target.checked){
            newArray.push(e.target.value);  
        }
        else{
            newArray=newArray.filter(item=>item!==e.target.value);
        }
        let newData2={...data, [e.target.name]:newArray};  
        setData(newData2);
        console.log(newData2);
    }

  return (
    <div
        onSubmit={(e)=>{
        e.preventDefault();
       
     }}>
        <div>
            <h2 className='TitleF'>ORDENAMIENTO</h2>
            <div>
                <div className='TitleOrden'>Nombre</div>
                <input className="BtnOrden" type="Submit" value='A-->Z'/>
                <input className="BtnOrden" type="Submit" value='Z-->A'/>
            </div>
            <div>
                <div className='TitleOrden'>Rating</div>
                <input className="BtnOrden" type="Submit" value='Rating +'/>
                <input className="BtnOrden" type="Submit" value='Rating -'/>
            </div>
        </div>
        <h2 className='TitleF'>FILTROS </h2>
        <div>
            <div className='TitleFiltros'>Origen Videojuego</div>
            <Mapear type="checkfilter" items={filtroNombre} subtype="generos" handleOnChangeBox={handleOnChangeBox}/>
        </div>
        <div>
            <div className='TitleFiltros'>Generos</div>
            <Mapear type="checkfilter" items={genres} subtype="generos" handleOnChangeBox={handleOnChangeBox}/> 
        </div>
        {/* <div>
            <div className='TitleFiltros'>Plataformas</div>
            <Mapear type="checkfilter" items={plataformas} subtype="plataformas" handleOnChangeBox={handleOnChangeBox}/> 
        </div> */}
        
    </div>
  )
}
