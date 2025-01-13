import React, { useState } from "react";


export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 className="page-title">Gerador de Nomes</h1>
      <nav className="navbar">
        <div className={`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <a href="#" onClick={() => {setPage("adicionar-nome"); toggleMenu();}}>Adicionar Nome</a>
          <a href="#" onClick={() => {setPage("adicionar-apelido"); toggleMenu();}}>Adicionar Apelido</a>
          <a href="#" onClick={() => {setPage("gerar-nomes"); toggleMenu();}}>Gerar Nomes</a>
        </div>
      </nav>
    </div>
  );
}
