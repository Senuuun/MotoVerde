document.addEventListener('DOMContentLoaded', () => {
    const mapa = L.map('map').setView([-27.5954, -48.5480], 13); // Florianópolis
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap colaboradores'
    }).addTo(mapa);
  
    // Exemplo de marcador
    L.marker([-27.5954, -48.5480])
      .addTo(mapa)
      .bindPopup('<b>Ponto de Recarga</b><br>MotoVerde')
      .openPopup();
  });
  