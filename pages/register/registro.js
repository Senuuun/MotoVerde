document.querySelector("form").addEventListener("submit", function (e) {
e.preventDefault();

const nome = document.getElementById("nome").value.trim();
const sobrenome = document.getElementById("sobrenome").value.trim();
const idade = document.getElementById("idade").value;
const sexo = document.getElementById("sexo").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

if (!nome || !sobrenome || !idade || !sexo || !email || !senha) {
alert("Por favor, preencha todos os campos.");
return;
}

const usuario = { nome, sobrenome, idade, sexo, email, senha };

localStorage.setItem("usuarioMotoVerde", JSON.stringify(usuario));
localStorage.setItem("usuarioLogado", "true");

alert("Cadastro realizado com sucesso!");
window.location.href = "/";
});

