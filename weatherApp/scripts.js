let weatherData;

const API_KEY = "";
const btnEvent = document.getElementById("form");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weather-result");
const errorPrint = document.getElementById("error");

btnEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  displayError("");
  const cityvalue = cityInput.value;
  callTheAPI(cityvalue, API_KEY);
});

const callTheAPI = (city, API_KEY) => {
  displayError("cargando...");
  weatherResult.innerHTML = "";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then((weatherData) => {
      displayError("");
      displayWeather(weatherData);
    })
    .catch((error) => {
      displayError(error.message);
    });
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

const displayError = (error) => {
  errorPrint.innerHTML = `${error}`;
};
