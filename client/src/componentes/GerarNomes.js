import React, { useState, useEffect } from 'react';

const GerarNomes = () => {
    const [nomes, setNomes] = useState([]);
    const [apelidos, setApelidos] = useState([]);
    const [nomeCompleto, setNomeCompleto] = useState('');

    useEffect(() => {
        // Fetch nomes
        const fetchNomes = async () => {
            const response = await fetch('http://localhost:5000/API/nomes');
            const data = await response.json();
            setNomes(data);
        };

        // Fetch apelidos
        const fetchApelidos = async () => {
            const response = await fetch('http://localhost:5000/API/apelidos');
            const data = await response.json();
            setApelidos(data);
        };

        fetchNomes();
        fetchApelidos();
    }, []);

    const gerarNomeCompleto = () => {
        if (nomes.length > 0 && apelidos.length > 0) {
            const nome = nomes[Math.floor(Math.random() * nomes.length)];
            const apelido = apelidos[Math.floor(Math.random() * apelidos.length)];
            setNomeCompleto(`${nome} ${apelido}`);
        } else {
            alert('Adicione nomes e apelidos primeiro!');
        }
    };

    return (
        <div>
            <button onClick={gerarNomeCompleto}>Gerar Nome Completo</button>
            {nomeCompleto && <p>Nome Completo: {nomeCompleto}</p>}
        </div>
    );
};

export default GerarNomes;
