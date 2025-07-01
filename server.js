// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use('/components', express.static(path.join(__dirname, 'components')));

// Rota para o index.html que está na raiz do projeto
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'login', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'register', 'register.html'));
});

app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'map', 'map.html'));
});

app.get('/pagamento', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'pagamento', 'pagamento.html'));
});

app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'perfil', 'perfil.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
