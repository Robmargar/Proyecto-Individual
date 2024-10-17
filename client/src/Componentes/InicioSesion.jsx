import React, {useState}  from 'react';
import imgPerfil from '../imagenes/user.svg';
import { useAuth } from '../context/AuthContext';
import googleicon from "../imagenes/google-svg.svg"

import "./InicioSesion.css";


export default function InicioSesion() {  
    const auth=useAuth();
    const {email} = auth.user;
    console.log("soy el usuario:" + email)

  const [login, setLogin]=useState(true);

  const [emailRegister,setEmailRegister]=useState("");
  const [passwordRegister,setPasswordRegister]=useState("");
  
  const [emailLogin,setEmailLogin]=useState("");
  const [passwordLogin,setPasswordLogin]=useState("");
  
  const handleRegister=(e)=>{
    e.preventDefault();
    auth.register(emailRegister,passwordRegister);
  };
  const handleLogin=(e)=>{
    e.preventDefault();
    auth.login(emailLogin,passwordLogin);
  };

  const handleGoogle=(e)=>{
    e.preventDefault();
    auth.loginWithGoogle();
  };

  const handleLogOut=()=>{
    auth.logout();
  };
  
  const handleState=()=>{
    setEmailRegister("");
    setPasswordRegister("");
    setEmailLogin("");
    setPasswordLogin("");
    setLogin(!login);
  };

  return (
    <div className="Container">
      {
        login?
      // Login
        <section className="Box" >
            <img className="Img_Perfil" src={imgPerfil} alt="Imagen_perfil" />
            <form>
              <input 
              className='Place'
              onChange={(e)=>setEmailLogin(e.target.value)}
              type="email"
              placeholder= 'email@ejemplo.com'
              />
              
              <input 
              className='Place'
              onChange={(e)=>setPasswordLogin(e.target.value)}
              type="password"
              placeholder= 'Contraseña...'
              id="password"
              />
              
              <input  
              className='Place Boton'
              onClick={(e)=>handleLogin(e)}
              type="submit"
              value="Iniciar Sesión"
              /> 
            </form>
            <button onClick={(e)=>handleGoogle(e)} className='Icono'>
              <img 
                src={googleicon}
                className='Sesion-Icono'
                alt="Google-Register" />
                {/* hola google */}
            </button>
            <div>
              <p>¿Eres nuevo en Crazy Games?</p>
              <button  className='Registro'
                onClick={()=>handleState()}
                type="submit"> Registrate </button>
                <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Crazy Games.</p>
            </div>     
        </section>: 
        //Register 
        <section className="Box" >
            <img className="Img_Perfil" src={imgPerfil} alt="Imagen_perfil" />
            <form>
              <input 
              className='Place'
              onChange={(e)=>setEmailRegister(e.target.value)}
              type="email"
              placeholder= 'email@ejemplo.com'
              />
              
              <input 
              className='Place'
              onChange={(e)=>setPasswordRegister(e.target.value)}
              type="password"
              placeholder= 'Contraseña...'
              id="password"
              />
              
              <input  
              className='Place Boton'
              onClick={(e)=>handleRegister(e)}
              type="submit"
              value="Registrate"
              />  
            </form>
            <div>
              <p>¿Ya estas registrado en  Crazy Games?</p>
              <button  className='Registro'
              onClick={()=>handleState()}
                type="submit"
                >Iniciar Sesion</button> 
                <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Crazy Games.</p>
            </div>     
        </section> 
      }  
      <button onClick={()=>handleLogOut()}>LogOut</button>
 </div>
  )
}