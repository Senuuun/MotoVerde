document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById("botaoAventura");

  if (botao) {
    botao.addEventListener("click", function () {
      const usuarioLogado = localStorage.getItem("usuarioLogado") === "true";

      if (usuarioLogado) {
        window.location.href = "/map";
      } else {
        window.location.href = "/login";
      }
    });
  }
});
