function loadTopbarCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/topbar/topbar.css';
    document.head.appendChild(link);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    loadTopbarCSS();
  
    fetch('/topbar/topbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('topbar').innerHTML = data;
      });
  });