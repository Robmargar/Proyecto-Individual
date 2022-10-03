import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector} from "react-redux";
import Card from './Card';
import { paginacion } from '../actions/videogamesActions';

import "./Cards.css"

export default function Cards() {


  const dispatch=useDispatch();
  const cantidadGames= useSelector(state=> state.videogames.current);
  const page= useSelector(state=> state.videogames.page);
  const pags= cantidadGames && Math.ceil(cantidadGames.length/15); 
  const arraypags=[];



  for(let i=0;i<pags;i++){
      arraypags.push({number: i+1});
  }

  const [data, setData]=useState([]);

  if(!data.length){
    const mostrar=cantidadGames.slice(0,15);
    setData(mostrar);
  }

  function handleOnChange(e){
      let page=Number(e.target.name);
      let nInicial=((Number(e.target.name)*15)-15);
      let nFinal=(Number(e.target.name)*15);
    
      const mostrar=cantidadGames.slice(nInicial,nFinal);
      setData(mostrar);
      dispatch(paginacion({page:page}));
   }


  useEffect(()=>{
    const mostrar=cantidadGames.slice(0,15);
    setData(mostrar);
  },[cantidadGames]);


 
 return (
  <div>
      <div>
         {page !== 1 && <input type="submit" name={Number(page) - Number(1)} value="Prev" onClick={handleOnChange} className="Page" />}
         {arraypags.map((pag) => (
           <input key={pag.number} type="submit" name={pag.number} value={pag.number} onClick={handleOnChange} className={`Page ${ Number(pag.number)===Number(page)?'act':''}`}/>
         ))}
         {page !== cantidadGames && <input type="submit" name={Number(page) + Number(1)} value="Next" onClick={handleOnChange} className="Page" />}

       </div>
       <div className='Cards'>
           {data.map((vg) => (
             <Link to={`/home/detalle/${vg.id}`} key={vg.id}>
               <Card
                 name={vg.name}
                 img={vg.imagen}
                 genres={vg.generos} />
             </Link>
           ))}
        </div>
        {page !== 1 && <input type="submit" name={Number(page) - Number(1)} value="Prev" onClick={handleOnChange} className="Page" />}
         {arraypags.map((pag) => (
           <input key={pag.number} type="submit" name={pag.number} value={pag.number} onClick={handleOnChange} className={`Page ${ Number(pag.number)===Number(page)?'act':''}`}/>
         ))}
         {page !== cantidadGames && <input type="submit" name={Number(page) + Number(1)} value="Next" onClick={handleOnChange} className="Page" />}
  </div>
  )
}
