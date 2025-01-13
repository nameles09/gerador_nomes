<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> 4f0a8fd7d03271bb9246df18b80c436bbfeb4ac1
import logo from "./logo.svg";
import "./App.css";
import Apelidos from "./componentes/apelidos";
import Nomes from "./componentes/nomes";
import GerarNomes from "./componentes/GerarNomes";
import Navbar from "./componentes/NavBar";

function App() {
<<<<<<< HEAD
  const [page, setPage] = useState("home");

  const renderContent = () => {
    switch (page) {
      case "adicionar-nome":
        return <Nomes />;
      case "adicionar-apelido":
        return <Apelidos />;
      case "gerar-nomes":
        return <GerarNomes />;
      default:
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </header>
          </div>
        );
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="container">
        {renderContent()}
=======
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
>>>>>>> 4f0a8fd7d03271bb9246df18b80c436bbfeb4ac1
      </div>
    </div>
  );
}

export default App;
