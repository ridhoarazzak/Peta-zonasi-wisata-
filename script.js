window.onload = () => {
  const map = L.map('map').setView([-1.64, 101.21], 12); // Titik pusat Lubuk Gadang Selatan

  // Basemap OSM
  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  });

  // Basemap Esri World Imagery (satelit)
  const esri = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Tiles © Esri'
    }
  );

  // Tambahkan OSM sebagai default
  osm.addTo(map);

  // Tile layer dari Google Earth Engine
  const geeTileUrl = 'https://earthengine.googleapis.com/v1/projects/ee-mrgridhoarazzak/maps/7ee0dbe3066bdcfa7c227c635f347084-a6496335255e886b362e38bc1a1364ed/tiles/{z}/{x}/{y}';

  const zonasiLayer = L.tileLayer(geeTileUrl, {
    attribution: 'Data: Google Earth Engine',
    opacity: 0.7
  }).addTo(map);

  // Control Layer
  const baseMaps = {
    "OpenStreetMap": osm,
    "ESRI Satelit": esri
  };

  const overlayMaps = {
    "Zonasi Potensi Wisata": zonasiLayer
  };

  L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
};
