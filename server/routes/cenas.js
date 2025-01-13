const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para tratar JSON
app.use(express.json());

// Bases de dados em memória
const nomes = [];
const apelidos = [];
const nomesCompletos = [];

// GET /API/apelidos
app.get('/API/apelidos', (req, res) => {
    res.json(apelidos);
});

// POST /API/apelidos
app.post('/API/apelidos', (req, res) => {
    const { apelido } = req.body;
    if (!apelido) {
        return res.status(400).json({ error: 'Apelido é obrigatório!' });
    }
    apelidos.push(apelido);
    res.status(201).json({ message: 'Apelido adicionado com sucesso!' });
});

// GET /API/nomes
app.get('/API/nomes', (req, res) => {
    res.json(nomes);
});

// POST /API/nomes
app.post('/API/nomes', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório!' });
    }
    nomes.push(nome);
    res.status(201).json({ message: 'Nome adicionado com sucesso!' });
});

// GET /API/generate
app.get('/API/generate', (req, res) => {
    if (nomes.length === 0 || apelidos.length === 0) {
        return res.status(400).json({ error: 'Nomes e apelidos são necessários para gerar um nome completo!' });
    }

    // Gerar um nome completo aleatório
    const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const apelidoAleatorio = apelidos[Math.floor(Math.random() * apelidos.length)];
    const nomeCompleto = `${nomeAleatorio} ${apelidoAleatorio}`;

    // Salvar na base de dados
    nomesCompletos.push(nomeCompleto);

    res.json({ nomeCompleto });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
