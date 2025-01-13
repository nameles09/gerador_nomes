import React, { useState, useEffect } from 'react';

function Nomes() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    fetchNomes();
  }, []);

  const fetchNomes = async () => {
    const response = await fetch('http://localhost:5000/API/nomes');
    const data = await response.json();
    setNomes(data);
  };

  const addNome = async (nome) => {
    const response = await fetch('http://localhost:5000/API/nomes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome }),
    });
    if (response.ok) {
      fetchNomes();
    }
  };

  return (
    <div>
      <h2>Adicionar Nome</h2>
      <input type="text" id="novoNome" placeholder="Digite um nome" />
      <button onClick={() => addNome(document.getElementById('novoNome').value)}>Adicionar Nome</button>
      <h2>Nomes</h2>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Nomes;
