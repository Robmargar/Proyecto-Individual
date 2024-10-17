import React , {useState, useEffect} from "react";
import {auth} from "../Firebase/credenciales_config.js";
import { createContext,useContext } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged} from "firebase/auth";

// Creando un objeto de Contexto
export const authContext=createContext();

// UseAuth() es una funcion que retorna el objeto de contexto que fue creado anteriormente
export const useAuth= () =>{
    const context = useContext(authContext);
    if(!context){
        console.log("No hay contexto creado");
    }else{
        return context;
    };
};

export function AuthProvider({children}){
    const[user,setUser]=useState("");
    useEffect(()=>{
        const suscrito = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("No se encontro usuario logueado");
            }else{
                setUser(currentUser);
            }
            return ()=> suscrito
        })
    },[])
    const register= async (email, password)=>{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
    };
    const login = async(email, password)=>{
        const response = await signInWithEmailAndPassword(auth, email,password);
        console.log(response);
    };
    const loginWithGoogle = async ()=>{
        const responseGoogle= new GoogleAuthProvider();
        console.log(responseGoogle);
        return await signInWithPopup(auth, responseGoogle);
    };
    const logout=async()=>{
        const response =await signOut(auth);
        setUser("");
        console.log(response);
    }

    return <authContext.Provider
    value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user
    }}>
        {children}
    </authContext.Provider>
    
}