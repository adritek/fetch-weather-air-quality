const mymap = L.map('mapid').setView([51.507351, -0.127758], 1.2);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, { attribution });

tiles.addTo(mymap);

getData();
async function getData() {
  const response = await fetch('/api');
  const data = await response.json();

  for (item of data) {
    const marker = L.marker([item.lat, item.lon]).addTo(mymap);
    let txt = `
    ${item.lat}, ${item.lon} - the weather is currently: ${item.weather.summary} and ${item.weather.temperature}&deg;C.
    `;

    if (item.air.value < 0) {
      txt += ' -No air quality reading-';
    } else {
      txt += ` the air quality is: ${item.air.measurements[0].value}${item.air.measurements[0].unit}
    Last updated: ${item.air.measurements[0].lastUpdated}`;
    }
    marker.bindPopup(txt);
  }
}
