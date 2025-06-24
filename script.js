window.onload = () => {
  const map = L.map('map').setView([-1.64, 101.21], 12); // Lubuk Gadang Selatan

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const geeTileUrl = 'https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/7ee0dbe3066bdcfa7c227c635f347084-a6496335255e886b362e38bc1a1364ed/tiles/{z}/{x}/{y}';

  L.tileLayer(geeTileUrl, {
    attribution: 'Data: Google Earth Engine',
    opacity: 0.7
  }).addTo(map);
};
