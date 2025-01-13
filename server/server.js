const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

let nomes = [];
let apelidos = [];

app.post("/API/nomes", (req, res) => {
  const novoNome = req.body.nome;
  if (novoNome) {
    nomes.push(novoNome);
    res.status(201).json({ message: "Nome adicionado com sucesso!" });
  } else {
    res.status(400).json({ message: "Nome não fornecido!" });
  }
});

app.post("/API/apelidos", (req, res) => {
  const novoApelido = req.body.apelido;
  if (novoApelido) {
    apelidos.push(novoApelido);
    res.status(201).json({ message: "Apelido adicionado com sucesso!" });
  } else {
    res.status(400).json({ message: "Apelido não fornecido!" });
  }
});

app.get("/API/nomes", (req, res) => {
  res.json(nomes);
});

app.get("/API/apelidos", (req, res) => {
  res.json(apelidos);
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
