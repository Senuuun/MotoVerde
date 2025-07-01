document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = { nome, idade, sexo, email, senha };

  // salva os dados
  localStorage.setItem("usuarioMotoVerde", JSON.stringify(usuario));

  // seta a flag de login como "true"
  localStorage.setItem("usuarioLogado", "true");

  alert("Cadastro realizado com sucesso!");
  window.location.href = "/";
});
