import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header.jsx";
import Lan from "./Componentes/Lan.jsx";
import Card from "./Componentes/Card.jsx";
import VideogameDetails from "./Componentes/VideogameDetails";
import Formulario from "./Componentes/Form";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Lan} />
      <Route path="/home" component={Header} />
      <Switch>
        <Route path="/home" exact>
          <h1> Home</h1>
          <div>
            <Card
              name="beto"
              img="https://www.educima.com/dibujo-para-colorear-jugar-con-bloques-dl22479.jpg"
              genres={[{ name: "Indi" }, { name: "aventura" }]}
            />
          </div>
        </Route>
        <Route path="/home/detalle" exact>
          <h1>Detalle Videojuego</h1>
          <div>
            <VideogameDetails
              name="beto"
              img="https://www.educima.com/dibujo-para-colorear-jugar-con-bloques-dl22479.jpg"
            />
          </div>
        </Route>
        <Route path="/home/crear" exact>
          <h1>Formulario</h1>
          <Formulario />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
