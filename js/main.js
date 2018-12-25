const paint = weather => {
  document.getElementById('w-location').textContent =
    weather.display_location.full;
  document.getElementById('w-desc').textContent = weather.weather;
  document.getElementById('w-string').textContent = weather.temperature_string;
  document.getElementById('w-icon').setAttribute('src', weather.icon_url);
  document.getElementById('w-humidity').textContent = `Relative Humidity: ${
    weather.relative_humidity
  }`;
  document.getElementById('w-feels-like').textContent = `Feels Like: ${
    weather.feelslike_string
  }`;
  document.getElementById('w-dewpoint').textContent = `DewPoint: ${
    weather.dewpoint_string
  }`;
  document.getElementById('w-wind').textContent = `Wind: ${
    weather.wind_string
  }`;
};

const fetchWeather = async () =>
  await (await fetch('/.netlify/functions/getWeather')).json();

fetchWeather()
  .then(data => {
    console.log(data);
    paint(data.current_observation);
  })
  .catch(err => console.log(err));
