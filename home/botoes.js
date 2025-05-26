document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById("botaoAventura");

    botao.addEventListener("click", function() {
        window.location.href = "/login/"; 
    });
});