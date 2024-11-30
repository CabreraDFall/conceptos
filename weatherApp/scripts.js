let weatherData;

const API_KEY = "654b4ec814040f59fbe3fa9fe503e429";
const btnEvent = document.getElementById("form");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weather-result");

btnEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityvalue = cityInput.value;
  callTheAPI(cityvalue, API_KEY);
});

const callTheAPI = (city, API_KEY) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((weatherData) => displayWeather(weatherData));
};

const displayWeather = (data) => {
  const { name, main, weather } = data;

  weatherResult.innerHTML = `
  <h2>Clima en: ${name}</h2>
  <p>Temperatura: ${kelvinToCelsius(main.temp)}</p>
  <p>Sensacion: ${kelvinToCelsius(main.feels_like)}</p>
  <p>Clima: ${weather[0].main}</p>
  `;
};

const kelvinToCelsius = (temp) => {
  return (temp - 273.15).toFixed(2);
};
