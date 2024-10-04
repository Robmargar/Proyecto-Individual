
import {useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { getValues } from '../actions/appActions';
import { getVideogames } from '../actions/videogamesActions';

export default function Revisar() {
    const dispatch=useDispatch();
  
    const gen = useSelector(state => state.app.genres);
    const plat = useSelector(state => state.app.plataforms);
    const vid= useSelector(state=> state.videogames.backup);
    
      useEffect(() => {
        if(gen.length===0){
        dispatch(getValues("genres"));
        console.log("llene los generos ");
        }
      }, [dispatch, gen]);

      useEffect(() => {
        if(plat.length===0){
         dispatch(getValues("plataforms"));
        console.log("llene las plataformas");
        }
     
      }, [dispatch, plat]);

      useEffect(() => {
      
        if(vid.length===0){
        dispatch(getVideogames());
        console.log("llene los videogames");
        }
      }, [dispatch, vid]);
}