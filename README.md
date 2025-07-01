# **MotoVerde – Sistema de Pontos de Recarga Elétrica**

Sistema com mapa interativo para visualizar pontos de recarga de motos elétricas em Florianópolis. O sistema mostra o nível de carga das baterias em cada ponto e permite traçar rotas a partir da localização do usuário.

---

## **Funcionalidades**

- **Visualização dos Pontos**  
  Marcadores interativos representam os pontos de recarga.

- **Popup Informativo com Baterias**  
  Ao clicar em um ponto, exibe o nível de carga de 3 baterias com imagens correspondentes:
  - `images/map/cargamax/bateria.png` → carga cheia
  - `images/map/cargamin/bateria.png` → carga parcial (inferior a 100%)

- **Localização do Usuário**  
  Um marcador mostra a posição atual do usuário (com ícone personalizado `Pessoa.png`).

- **Traçar Rotas com Leaflet Routing Machine**  
  Após clicar em um ponto, aparece o botão **"Começar trajeto"**. Ao clicar, uma rota é desenhada entre o usuário e o ponto de recarga.

---

## 🧰 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript  
- **Mapas**: [Leaflet.js](https://leafletjs.com/), [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/), [OpenStreetMap](https://www.openstreetmap.org/)
- **Backend simples**: Node.js + Express.js (somente para servir o frontend)
- **Autenticação simulada**: `localStorage` no navegador

---

## 📦 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/MotoVerde.git
cd MotoVerde
```

2. Instale as dependências do servidor:

```bash
npm install express
```

3. Execute o servidor:

```bash
node server.js
```

4. Acesse o sistema no navegador:

[http://localhost:3000](http://localhost:3000)
