function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerText = Math.round(response.data.main.temp);
}

function displayCity(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerText = response.data.name;
}

function displayDescription(response) {
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerText = response.data.weather[0].description;
}

function displayIcon(response) {
  let iconElement = document.querySelector("#icon");
  iconElement.src = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
}

function displayHumidity(response) {
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerText = response.data.main.humidity;
}

function displayWind(response) {
  let windElement = document.querySelector("#wind");
  windElement.innerText = response.data.wind.speed;
}

async function search(city) {
  let apiKey = "f1bedc417492cf5cdfcb2aa86cb69d69";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let response = await axios.get(apiUrl);
  displayTemperature(response);
  displayCity(response);
  displayDescription(response);
  displayIcon(response);
  displayWind(response);
  displayHumidity(response);

  let apiUrl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`;
  console.log(apiUrl2);
  response = await axios.get(apiUrl2);
  displayForecast(response);
}

function searchText(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityInput");
  search(cityInputElement.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchText);

let now = new Date();
let selecteddate = document.getElementById("selecteddate");
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let year = now.getFullYear();

document.getElementById(
  "selecteddate"
).innerHTML = `${day} ${month} ${date} ${year}`;

function displayForecast(response) {
  console.log(displayForecast);
  let forecastHTML = "";
  let forecast = response.data.daily;
  forecast.forEach(function (forecastDay) {
    forecastHTML += `<div class="weather-item">
              <div class="weather-forecast-date">
                 ${formatDay(forecastDay.dt)}
              </div>    
  <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}.png"
               alt="Image"
                width="42"
                />
                <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-max">
               ${Math.round(forecastDay.temp.max)}ºC
            </span>
                <span class="weather-forecast-temperature-min">
              ${Math.round(forecastDay.temp.min)}ºC
                </span>
               </span>
               </div>
       </div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return days[day];
}
