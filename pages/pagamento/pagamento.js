document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuarioLogado");
  if (!usuario || usuario === "false") {
    alert("Você precisa estar logado para acessar a página de pagamento.");
    window.location.href = "/login";
  }
});