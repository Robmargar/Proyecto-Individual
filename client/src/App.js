import React from "react";
import "./App.css";
import Searchbar from "./Componentes/Searchbar.jsx";
import Card from "./Componentes/Card.jsx";

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <div>
        <Searchbar />
      </div>
      <div>
        <Card
          name="beto"
          //img="https://www.educima.com/dibujo-para-colorear-jugar-con-bloques-dl22479.jpg"
          genres={[{ name: "Indi" }, { name: "aventura" }]}
        />
      </div>
    </div>
  );
}

export default App;
