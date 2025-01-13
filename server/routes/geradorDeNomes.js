import React, { useState } from 'react';

function GeradorDeNomes() {
  const [nomeCompleto, setNomeCompleto] = useState('');

  const generateNomeCompleto = async () => {
    const response = await fetch('http://localhost:5000/API/generate');
    const data = await response.json();
    setNomeCompleto(data.nome_completo);
  };

  return (
    <div>
      <h2>Gerar Nome Completo</h2>
      <button onClick={generateNomeCompleto}>Gerar Nome Completo</button>
      {nomeCompleto && <p>Nome Completo: {nomeCompleto}</p>}
    </div>
  );
}

export default GeradorDeNomes;
