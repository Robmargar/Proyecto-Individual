
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";
import Card from './Card';



export default function Cards() {

  // const videogames= useSelector(state=> state.videogames.backup)
const  videogames =[ {name:"portal 2",
  id:3,
  imagen:"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
  generos:["indi","Beto","Alejand","Samantha"]},
  {name:"portal 2",
  id:3,
  imagen:"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
  generos:["indi","Beto","Alejand","Samantha"]},
  {name:"portal 2",
  id:3,
  imagen:"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
  generos:["indi","Beto","Alejand","Samantha"]},
  {name:"portal 2",
  id:3,
  imagen:"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
  generos:["indi","Beto","Alejand","Samantha"]}
];
  return (
    <div>
      {videogames.map((vg)=>(
        <Link to={`/home/detalle/${vg.id}`} key={vg.name}>
          <Card
            key={vg.id}
            name={vg.name}
            img={vg.imagen}
            genres={vg.generos}
           />
        </Link>
      ))}

    </div>
  );
}
