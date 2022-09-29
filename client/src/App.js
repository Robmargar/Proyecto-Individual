import { Route, Switch, BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import "./App.css";
import Header from "./Componentes/Header.jsx";
import Lan from "./Componentes/Lan.jsx";
import Home from "./Componentes/Home";
import VideogameDetails from "./Componentes/VideogameDetails";
import Formulario from "./Componentes/Form";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Lan} />
          <Route path="/home" component={Header} />
          <Switch>
            <Route path="/home" exact>
              <Home/>
            </Route>
            <Route path="/home/detalle/:id" exact>
              <div>
                <VideogameDetails />
              </div>
            </Route>
            <Route path="/home/crear" exact>
              <Formulario />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
