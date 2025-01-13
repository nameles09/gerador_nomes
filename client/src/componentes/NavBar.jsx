import React, { useState } from "react";

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Gerador de Nomes</div>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <a href="#" onClick={() => {setPage("adicionar-nome"); toggleMenu();}}>Adicionar Nome</a>
        <a href="#" onClick={() => {setPage("adicionar-apelido"); toggleMenu();}}>Adicionar Apelido</a>
        <a href="#" onClick={() => {setPage("gerar-nomes"); toggleMenu();}}>Gerar Nomes</a>
      </div>
      <div className={`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
