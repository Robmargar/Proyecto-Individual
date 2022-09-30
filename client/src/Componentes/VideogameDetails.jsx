import React,{useEffect} from 'react';
import { useParams } from 'react-router';
import Mapear from './Mapear';
import { useSelector, useDispatch } from "react-redux";
import { getVideogamesId } from "../actions/videogamesActions.js";
import defult from "../imagenes/default.jpg";
import { Link } from "react-router-dom"

import "./VideogameDetails.css"


export default function VideogameDetails() 
{
  const code=useParams();
  const dispatch = useDispatch();  

  const vid= useSelector(state=> state.videogames.gamedetail);
//   const  vid ={name:"portal 2",
//   id:3,
//   imagen:"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
//   generos:["indi","Beto","Alejand","Samantha"],
//   raiting: 4.52,
//   fecha_lanzamiento:"27-12-1993",
//   descripcion:"<p>Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. </p>\n<p>Its plot directly follows the first game&#39;s, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...</p>\n<p>Portal 2&#39;s core mechanics are very similar to the first game&#39;s ; the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.</p>\n<p>The game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. The series, its characters and even its items such as the portal gun and the companion cube have become a cultural icon within gaming communities.</p>\n<p>Portal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, as well as an in-depth level editor.</p>"

// };
  
  useEffect(() => {
   setTimeout(()=> dispatch ( getVideogamesId(code.id)),50)
  }, [dispatch,code]);



  return (
    <div className='All'>
      <Link to="/home">
          {<button className='Cerrar'>X</button>}
      </Link> 
      <div className='NameDetail'>{vid.name}</div>
        <div className='Detail'>
          <div >
          {/* className={errors.fecha_lanzamiento? "Danger":"PlaceForm"} */}
              <img className="ImgDetail" src={vid.imagen?vid.imagen:defult} alt="imgVG"/>
          </div>
          <div className='DataDetail'>
            <div>
              <div>
                <h2 className='Data'>Descripción:</h2>
                <p className='Description'>{vid.descripcion}</p>
              </div>
            </div>
            <div >
              <h2 className='Data'>Rating:    {vid.raiting}</h2>
              <h2 className='Data'>Fecha Lanzamiento:   {vid.fecha_lanzamiento}</h2>
              <h2 className='Data2'>Generos: </h2>
              {vid.generos&&<Mapear type="card" items={vid.generos}/>}
            </div>
          </div>    
        </div>         
    </div>
  );
}
