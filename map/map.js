document.addEventListener('DOMContentLoaded', () => {
  const mapa = L.map('map').setView([-27.5954, -48.5480], 13); // Centro de Florianópolis

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap colaboradores'
  }).addTo(mapa);

  const pontos = [
    { lat: -27.5954, lng: -48.5480, nome: 'Centro - MotoVerde' },
    { lat: -27.5969, lng: -48.5515, nome: 'Mercado Público' },
    { lat: -27.5722, lng: -48.6091, nome: 'UFSC - Trindade' },
    { lat: -27.6016, lng: -48.5809, nome: 'Aeroporto Hercílio Luz' },
    { lat: -27.6785, lng: -48.4866, nome: 'Ribeirão da Ilha' },
    { lat: -27.4428, lng: -48.4033, nome: 'Ingleses do Rio Vermelho' },
    { lat: -27.6156, lng: -48.4475, nome: 'Lagoa da Conceição' },
    { lat: -27.5904, lng: -48.5450, nome: 'Beira-Mar Norte' },
    { lat: -27.4444, lng: -48.5084, nome: 'Jurerê Internacional' },
    { lat: -27.4400, lng: -48.4648, nome: 'Canasvieiras' }
  ];

  pontos.forEach(ponto => {
    L.marker([ponto.lat, ponto.lng])
      .addTo(mapa)
      .bindPopup(`<b>Ponto de Recarga</b><br>${ponto.nome}`);
  });
});
