import React, { useState } from "react";

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">Gerador de Nomes</div>
      <div className={`menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <a href="./componentes/nomes.js" onClick={() => setPage("adicionar-nome")}>Adicionar Nome</a>
        <a href="./componentes/apelidos.js" onClick={() => setPage("adicionar-apelido")}>Adicionar Apelido</a>
        <a href="./componentes/GerarNomes.js" onClick={() => setPage("gerar-nomes")}>Gerar Nomes</a>
      </div>
      <div className={`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
