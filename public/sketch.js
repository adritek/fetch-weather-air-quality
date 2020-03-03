if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(async position => {
    let lat, lon, weather, air;
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;

      const weather_url = `/weather/${lat},${lon}`;
      const weather_response = await fetch(weather_url);
      const weather_json = await weather_response.json();

      weather = weather_json.weather.currently;
      air = weather_json.air.results[0];

      document.getElementById('summary').textContent = weather.summary;
      document.getElementById('temperature').textContent = weather.temperature;
      document.getElementById('aq_parameter').textContent = air.city;
      document.getElementById('aq_value').textContent = air.measurements[0].value;
      document.getElementById('aq_unit').textContent = air.measurements[0].unit;
      document.getElementById('aq_lastUpdate').textContent = air.measurements[0].lastUpdated;
    } catch (error) {
      console.error(error);
      air = { value: -1 };
      // TODO: better error handling for no/nonexistant values
      document.getElementById('aq_parameter').textContent = 'cannot read City data';
      document.getElementById('aq_value').textContent = 'No values supplied';
      document.getElementById('aq_unit').textContent = 'No units supplied';
      document.getElementById('aq_lastUpdate').textContent = ' - ';
    } // try
    // send coordinates to the database to be logged
    const data = { lat, lon, weather, air };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const db_response = await fetch('/api', options);
    const db_json = await db_response.json();
  }); // geo
} // if
