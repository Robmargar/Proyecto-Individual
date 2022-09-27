
import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getValues } from '../actions/appActions';
import { getVideogames } from '../actions/videogamesActions';

export default function Revisar() {
    const dispatch=useDispatch();
  
    // const gen = useSelector(state => state.app.genres);
    // const plat = useSelector(state => state.app.plataforms);
    // const vid= useSelector(state=> state.videogames.backup)
    
      useEffect(() => {
        // if(gen.length===0){
        dispatch(getValues("genres"));
        // console.log("llene los generos ");
        // }
        // if(plat.length===0){
        dispatch(getValues("plataforms"));
        // console.log("llene las plataformas");
        // }
        // if(vid.length===0){
        dispatch(getVideogames());
        // console.log("llene los videogames");
        // }
      }, [dispatch]);
}