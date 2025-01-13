import React, { useState } from "react";

export default function Nomes() {
  const [nome, setNome] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/API/nomes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome }),
      });

      if (response === 201) {
        setNome("");
        alert("Nome adicionado com sucesso!");
      } else {
        alert("Erro ao adicionar nome");
      }
    } catch (error) {
      alert("Erro ao adicionar nome");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite um nome"
        required
      />
      <button type="submit">Adicionar Nome</button>
    </form>
  );
}
