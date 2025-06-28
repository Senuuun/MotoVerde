function loadTopbarCSS() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/topbar/topbar.css";
  document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
  loadTopbarCSS();

  fetch("/topbar/topbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("topbar").innerHTML = data;

      const logado = localStorage.getItem("usuarioLogado") === "true";

      if (logado) {
        // Oculta os links de Login e Registro
        const links = document.querySelectorAll(".menu a");
        links.forEach(link => {
          const href = link.getAttribute("href");
          if (href.includes("login") || href.includes("register")) {
            link.style.display = "none";
          }
        });

        // Adiciona a imagem de perfil e dropdown
        const topBarDiv = document.querySelector(".top-bar");

        const perfilContainer = document.createElement("div");
        perfilContainer.classList.add("perfil-container");

        const perfil = document.createElement("img");
        perfil.src = "/images/topbarimages/sem-perfil.png";
        perfil.alt = "Foto de perfil";
        perfil.classList.add("perfil-img");

        const dropdown = document.createElement("div");
        dropdown.classList.add("perfil-dropdown");
        dropdown.innerHTML = `
          <a href="/perfil/">Ver Perfil</a>
          <a href="#" id="logout">Logout</a>
        `;

        perfilContainer.appendChild(perfil);
        perfilContainer.appendChild(dropdown);
        topBarDiv.appendChild(perfilContainer);

        // Abre/fecha dropdown
        perfil.addEventListener("click", () => {
          dropdown.classList.toggle("show");
        });

        document.addEventListener("click", function (e) {
          if (!perfilContainer.contains(e.target)) {
            dropdown.classList.remove("show");
          }
        });

        // Logout
        const logoutLink = document.getElementById("logout");
        if (logoutLink) {
          logoutLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("usuarioLogado");
            window.location.href = "/login/";
          });
        }

      } else {
        // Se não estiver logado, esconde o link de pagamento
        const pagamento = document.querySelector('.menu a[href="/pagamento/"]');
        if (pagamento) pagamento.style.display = "none";
      }
    });
});
