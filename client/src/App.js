import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Apelidos from "./componentes/apelidos";
import Nomes from "./componentes/nomes";
import GerarNomes from "./componentes/GerarNomes";
import Navbar from "./componentes/NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="container">
          <Router>
            <Route path="/adicionar-nome" component={Nomes} />
            <Route path="/adicionar-apelido" component={Apelidos} />
            <Route path="/gerar-nomes" component={GerarNomes} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
