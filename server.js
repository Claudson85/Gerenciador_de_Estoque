// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Armazenamento em memória para fornecedores e produtos
const fornecedores = [];
const produtos = [];

// Rota: Cadastro de Fornecedor
app.post("/fornecedores", (req, res) => {
  const fornecedor = {
    id: fornecedores.length + 1, // Simula ID incremental
    nome: req.body.nome,
    contato: req.body.contato,
  };
  fornecedores.push(fornecedor);
  res.status(201).json(fornecedor);
});

// Rota: Cadastro de Produto
app.post("/produtos", (req, res) => {
  const produto = {
    id: produtos.length + 1, // Simula ID incremental
    nome: req.body.nome,
    preco: req.body.preco,
    fornecedorId: req.body.fornecedorId, // ID do fornecedor associado
  };
  produtos.push(produto);
  res.status(201).json(produto);
});

// Rota: Listar Produtos com Dados de Fornecedores
app.get("/produtos/com-fornecedor", (req, res) => {
  const resultados = produtos.map((produto) => {
    const fornecedor = fornecedores.find((f) => f.id === produto.fornecedorId);
    return { ...produto, fornecedor };
  });
  res.json(resultados);
});

// Inicializa o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});