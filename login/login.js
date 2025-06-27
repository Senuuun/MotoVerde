document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioMotoVerde"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    localStorage.setItem("usuarioLogado", "true");
    window.location.href = "/index.html"; // redireciona para home
  } else {
    alert("E-mail ou senha incorretos!");
  }
});