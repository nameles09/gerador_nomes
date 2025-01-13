import React, { useState } from "react";
import "./App.css";
import Apelidos from "./componentes/apelidos";
import GerarNomes from "./componentes/GerarNomes";
import Navbar from "./componentes/NavBar";
import Nomes from "./componentes/nomes";
import logo from "./logo.svg";

function App() {
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
      </div>
    </div>
  );
}

export default App;
