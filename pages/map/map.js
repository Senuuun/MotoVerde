document.addEventListener('DOMContentLoaded', () => {
  const mapa = L.map('map').setView([-27.5954, -48.5480], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap colaboradores'
  }).addTo(mapa);

  const botaoTrajeto = document.getElementById('botao-trajeto');
  const botaoTerminar = document.getElementById('botao-terminar');

  botaoTrajeto.style.display = 'none';
  botaoTerminar.style.display = 'none';

  const iconeUsuario = L.icon({
    iconUrl: '/images/map/Pessoa.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  const coordenadaUsuario = [-27.547754625849795, -48.49762980290219];

  const marcadorUsuario = L.marker(coordenadaUsuario, {
    icon: iconeUsuario
  }).addTo(mapa);

  marcadorUsuario.bindPopup('Você está aqui');

  const pontos = [
    { lat: -27.5954, lng: -48.5480, nome: 'Centro - MotoVerde', cargas: [100, 80, 40] },
    { lat: -27.5969, lng: -48.5515, nome: 'Mercado Público', cargas: [30, 60, 10] },
    { lat: -27.5722, lng: -48.6091, nome: 'UFSC - Trindade', cargas: [90, 20, 50] },
    { lat: -27.6016, lng: -48.5809, nome: 'Aeroporto Hercílio Luz', cargas: [100, 100, 100] },
    { lat: -27.6785, lng: -48.4866, nome: 'Ribeirão da Ilha', cargas: [10, 5, 0] },
    { lat: -27.4428, lng: -48.4033, nome: 'Ingleses do Rio Vermelho', cargas: [70, 30, 90] },
    { lat: -27.6156, lng: -48.4475, nome: 'Lagoa da Conceição', cargas: [50, 60, 40] },
    { lat: -27.5904, lng: -48.5450, nome: 'Beira-Mar Norte', cargas: [80, 100, 60] },
    { lat: -27.4444, lng: -48.5084, nome: 'Jurerê Internacional', cargas: [0, 0, 0] },
    { lat: -27.4400, lng: -48.4648, nome: 'Canasvieiras', cargas: [100, 90, 80] }
  ];

  let destinoSelecionado = null;
  let rota = null;

  pontos.forEach(ponto => {
    const marcador = L.marker([ponto.lat, ponto.lng]).addTo(mapa);

    marcador.bindPopup('');

    marcador.on('click', () => {
      const bateriasHTML = ponto.cargas.map(nivel => {
        const imgSrc = nivel === 100
          ? '/images/map/cargamax.png'
          : '/images/map/cargamin.png';

        return `
          <div>
            <img src="${imgSrc}" alt="${nivel}%">
            <div>${nivel}%</div>
          </div>
        `;
      }).join('');

      const popupHTML = `
        <div class="bateria-popup">
          ${bateriasHTML}
        </div>
      `;

      marcador.getPopup().setContent(popupHTML);
      marcador.openPopup();

      destinoSelecionado = [ponto.lat, ponto.lng];
      botaoTrajeto.style.display = 'block';
    });
  });

  botaoTrajeto.addEventListener('click', () => {
    if (rota) {
      mapa.removeControl(rota);
    }

    rota = L.Routing.control({
      waypoints: [
        L.latLng(coordenadaUsuario),
        L.latLng(destinoSelecionado)
      ],
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1'
      }),
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      createMarker: function (i, wp, nWps) {
        if (i === 0) {
          return L.marker(wp.latLng, {
            icon: iconeUsuario
          }).bindPopup('Você está aqui');
        } else {
          return L.marker(wp.latLng);
        }
      }
    }).addTo(mapa);

    botaoTrajeto.style.display = 'none';
    botaoTerminar.style.display = 'block';
  });

  botaoTerminar.addEventListener('click', () => {
    if (rota) {
      mapa.removeControl(rota);
      rota = null;
    }
    botaoTerminar.style.display = 'none';
  });

  mapa.on('click', () => {
    botaoTrajeto.style.display = 'none';
  });
});