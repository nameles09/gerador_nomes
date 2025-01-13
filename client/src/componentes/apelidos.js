import React, { useState } from "react";

export default function Apelidos() {
  const [apelido, setApelido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/API/apelidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apelido }),
      });

      if (response.ok) {
        setApelido("");
        alert("Apelido adicionado com sucesso!");
      } else {
        alert("Erro ao adicionar apelido");
      }
    } catch (error) {
      alert("Erro ao adicionar apelido");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={apelido}
        onChange={(e) => setApelido(e.target.value)}
        placeholder="Digite um apelido"
        required
      />
      <button type="submit">Adicionar Apelido</button>
    </form>
  );
}
