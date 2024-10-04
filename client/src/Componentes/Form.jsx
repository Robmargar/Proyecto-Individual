import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Mapear from './Mapear';
import { cleanState, postVideogame } from '../actions/videogamesActions';
import { useSelector, useDispatch } from "react-redux";

import "./Form.css"

export default function Formulario() {
    const dispatch=useDispatch();
    const genres=useSelector(state=>state.app.genres);
    const platforms=useSelector(state=>state.app.plataforms);
    const respuesta=useSelector(state=>state.videogames.creado);
 
    const [data, setData]=useState({
        name: "",
        descripcion: "",
        fecha_lanzamiento: "",
        rating: "",
        plataformas: [],
        generos: []
    });
    
    const[creado,setCreado]=useState(false);
    const[errors, setErrors]=useState({});
    const[sinerrores, setSinErrores]=useState(false);

     
    useEffect(()=>{
        if(respuesta.name){
         alert(`¡El videojuego: ${respuesta.name} fue creado!`);
         setCreado(true);
        }
        else { 
        if(respuesta !== ""){
            alert("Lo sentimos:"+ respuesta);
            setCreado(true);
        }}
            
    },[respuesta]);

    function handleOnChange(e){
        // setErrors((prevErrors)=>{ return{...prevErrors, [e.target.name]:null}});
        const newData={...data,[e.target.name]:e.target.value};
        setData(newData);
        Validar(newData);
        // console.log(newData);
    };

    
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
        Validar(newData2);
        // console.log(newData2);
    
    };

    
    function boton(errors){
        if(Object.keys(errors).length !== 0 ){
           return false;
        }else return true;
    };

    function Validar(input){
    
        let errors={};
        if(!input.name){
            errors.name="Nombre de Videojuego requerido";
            // verificar si existe o no 
        }
        if(input.name.length<4){
            errors.name="Longitud de nombre no adecuada"
        }

        if(!input.descripcion){
            errors.descripcion="Descripción faltante"; 
        }

        if(!input.fecha_lanzamiento){
            errors.fecha_lanzamiento="Fecha faltante"; 
        }

        if(!input.rating){
            errors.rating="Rating faltante"; 
        }

        if(input.generos.length<=0){
            errors.generos="Selecciona al menos un genero"
        }

        if(input.plataformas.length<=0){
            errors.plataformas="Selecciona al menos una plataforma"
        }
        setErrors(errors);
        setSinErrores(boton(errors));
    };
    
    const def={
        name: "",
        descripcion: "",
        fecha_lanzamiento: "",
        rating: "",
        plataformas: [],
        generos: []
    };

 
    return (
    <div className='AllForm'>
        {creado===false?
        <form
            onSubmit={(e)=>{
            e.preventDefault();  
            dispatch(postVideogame(data));
            e.target.reset();
            setData(def);
            dispatch(cleanState());     
        }} 
        >
            <div>
                {sinerrores &&<button type='submit' className='BtnEnviar'> Crear Videojuego</button>}    
            </div> 
            <div  className="Form">
                <div className='Closter'>
                    <input
                    type="text"
                    required minlength="4" maxlength="30"
                    className={errors.name? "Danger":"PlaceForm"}
                    placeholder="Nombre del Videojuego"
                    name="name"
                    value={data.name}
                    onChange={handleOnChange}
                    />
                    {/* {errors.name && <span>"{errors.name}"</span>} */}
                </div>

                <div className='Closter'>
                    <input
                    className={errors.fecha_lanzamiento? "Danger":"PlaceForm"}
                    type="date"
                    name="fecha_lanzamiento"
                    value={data.fecha_lanzamiento}
                    onChange={handleOnChange}
                    />
                    {/* {errors.fecha_lanzamiento && <span>"{errors.fecha_lanzamiento}"</span>} */}
                </div>
                <div className='Closter'>
                    <input
                    type= "text"
                    required minLength="20" maxLength="600"
                    className={errors.descripcion? "Danger":"PlaceForm"}
                    placeholder="Descripción"
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleOnChange}
                    />
                    {/* {errors.descripcion && <span>"{errors.descripcion}"</span>} */}
                </div>

                <div className='AllRait'>
                    <h1 className={errors.rating? "Error":"CheckForm"} >Rating</h1>
                    <input className='Rait'
                    id="rating"
                    type="range"
                    name="rating"
                    value={data.rating}
                    min="0"
                    max="5"
                    step="0.01"
                    onChange={handleOnChange}
                    />
                    <div >
                        <output htmlFor="id">{data.rating}</output>
                    </div>
                    {/* {errors.rating && <span>"{errors.rating}"</span>} */}
                </div>


                <div>
                    <h1 className={errors.generos? "Error":"CheckForm"}>Generos</h1>
                    <Mapear type="check" items={genres} subtype="generos" handleOnChangeBox={handleOnChangeBox}/> 
                    {/* {errors.generos && <span>"{errors.generos}"</span>}  */}
                
                </div>

                <div>
                    <h1 className={errors.plataformas? "Error":"CheckForm"}>Plataformas</h1>
                    <Mapear type="check" items={platforms} subtype="plataformas" handleOnChangeBox={handleOnChangeBox}/>  
                    {/* {errors.plataformas && <span>"{errors.plataformas}"</span>} */}
                </div>
            </div>
        
        </form>:
        <div>
            <form onSubmit={(e)=>{
            e.preventDefault();  
            setData(def);
            dispatch(cleanState());
            setCreado(false);}}
            >
            
            {<div className='Titulo'>¿Desea crear un nuevo videojuego?</div>}
            <div className='Contenedor'>
                <div>
                    <button type='submit' className='BtnEnviar'>SI</button>  
                </div>
                <Link to="/home">
                    <button type='submit' className='BtnEnviar'>NO</button>
                </Link>
            </div>
            </form>
        </div>}
    </div>   
  )
}
