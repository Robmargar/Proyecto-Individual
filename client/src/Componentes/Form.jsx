import React,{useState} from 'react'
import Mapear from './Mapear';



export default function Formulario() {
    const genres=[{ name: "Indi" }, { name: "aventura" }];
    const platforms=[{ name: "pc" }, { name: "play-one" }];
    
    const [data, setData]=useState({
        name: "",
        descripcion: "",
        fecha_lanzamiento: "",
        raiting: "",
        plataformas: [],
        generos: []
    });
    
    const[errors, setErrors]=useState({});
    const[sinerrores, setSinErrores]=useState(false);
    
    // useEffect(()=>Validar(data),[data]);

    function handleOnChange(e){
        // setErrors((prevErrors)=>{ return{...prevErrors, [e.target.name]:null}});
        const newData={...data,[e.target.name]:e.target.value};
        setData(newData);
        Validar(newData);
     
    }

    
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
        console.log(newData2);
    }

    function boton(errors){
        if(Object.keys(errors).length !== 0 ){
           return false;
        }else return true;
    }

    function Validar(input){
    
        let errors={};
        if(!input.name){
            errors.name="Nombre de Videojuego requerido";
            // verificar si existe o no 
        }

        if(!input.descripcion){
            errors.descripcion="Descripción faltante"; 
        }

        if(!input.fecha_lanzamiento){
            errors.fecha_lanzamiento="Fecha faltante"; 
        }

        if(!input.raiting||input.raiting<=0){
            errors.raiting="Raiting faltante"; 
        }

        if(input.generos.length<=0){
            errors.generos="Selecciona al menos un genero"
        }

        if(input.plataformas.length<=0){
            errors.plataformas="Selecciona al menos una plataforma"
        }
        setErrors(errors);
        setSinErrores(boton(errors));
    }

    return (
    <form
        onSubmit={(e)=>{
        e.preventDefault();
       
    }} 
    >
    
        <div>
            <input
            type="text"
            placeholder="Nombre del Videojuego"
            name="name"
            value={data.name}
            onChange={handleOnChange}
            />
            {errors.name && <span>"{errors.name}"</span>}
        </div>

        <div>
            <input
            type="text"
            placeholder="Descripción"
            name="descripcion"
            value={data.descripcion}
            onChange={handleOnChange}
            />
            {errors.descripcion && <span>"{errors.descripcion}"</span>}
        </div>

        <div>
            <input
            type="date"
            name="fecha_lanzamiento"
            value={data.fecha_lanzamiento}
            onChange={handleOnChange}
            />
            {errors.fecha_lanzamiento && <span>"{errors.fecha_lanzamiento}"</span>}
        </div>

        <div>
            <>Rating</>
            <input
            id="rating"
            type="range"
            name="raiting"
            value={data.raiting}
            min="0"
            max="5"
            onChange={handleOnChange}
            />
            <output htmlFor="id">{data.raiting}</output>
            {errors.raiting && <span>"{errors.raiting}"</span>}
        </div>

        <div>
            <>Generos</>
            <Mapear type="check" items={genres} subtype="generos" handleOnChangeBox={handleOnChangeBox}/> 
            {errors.generos && <span>"{errors.generos}"</span>} 
           
        </div>

        <div>
            <>Plataformas</>
            <Mapear type="check" items={platforms} subtype="plataformas" handleOnChangeBox={handleOnChangeBox}/>  
            {errors.plataformas && <span>"{errors.plataformas}"</span>}
        </div>

        {sinerrores &&<button type='submit' className='enviar' > Crear Videojuego</button>}
    </form>

  )
}
