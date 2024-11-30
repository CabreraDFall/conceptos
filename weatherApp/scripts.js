import API_KEY from "./env";

API_KEY;

const btnEvent = document.getElementById("form");
const city = document.getElementById("city");

btnEvent.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(city.value);
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  console.log("click");
});
