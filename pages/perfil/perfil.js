document.addEventListener("DOMContentLoaded", () => {
  const logado = localStorage.getItem("usuarioLogado");

  if (logado !== "true") {
    alert("Você precisa estar logado para acessar o perfil.");
    window.location.href = "/login";
    return;
  }

  const usuario = JSON.parse(localStorage.getItem("usuarioMotoVerde"));

  if (usuario) {
    document.getElementById("nomeUsuario").textContent = `${usuario.nome} ${usuario.sobrenome}`;
    document.getElementById("idadeUsuario").textContent = usuario.idade;
    document.getElementById("sexoUsuario").textContent = usuario.sexo;
    document.getElementById("emailUsuario").textContent = usuario.email;
  }
});
