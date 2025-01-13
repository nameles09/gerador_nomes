import React, { useState, useEffect } from 'react';

function Apelidos() {
  const [apelidos, setApelidos] = useState([]);

  useEffect(() => {
    fetchApelidos();
  }, []);

  const fetchApelidos = async () => {
    const response = await fetch('http://localhost:5000/API/apelidos');
    const data = await response.json();
    setApelidos(data);
  };

  return (
    <div>
      <h2>Apelidos</h2>
      <ul>
        {apelidos.map((apelido, index) => (
          <li key={index}>{apelido}</li>
        ))}
      </ul>
    </div>
  );
}

export default Apelidos;
