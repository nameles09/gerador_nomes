import React, { useState } from "react";
import "./App.css";
import Apelidos from "./componentes/apelidos";
import GerarNomes from "./componentes/GerarNomes";
import Navbar from "./componentes/NavBar";
import Nomes from "./componentes/nomes";


function App() {
  const [page, setPage] = useState("adicionar-nome");

  const renderContent = () => {
    switch (page) {
      case "adicionar-nome":
        return <Nomes />;
      case "adicionar-apelido":
        return <Apelidos />;
      case "gerar-nomes":
        return <GerarNomes />;
      default:
        return <div className="App"></div>;
    }
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      <div className="container">{renderContent()}</div>
    </div>
  );
}

export default App;
