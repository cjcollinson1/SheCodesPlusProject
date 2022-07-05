function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerText = response.data.main.temp;
}

function displayCity(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerText = response.data.main.name;
}

displayCity();

function displayDescription(response) {
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerText = response.data.weather[0].description;
}

displayDescription();

function displayIcon(response) {
  let iconElement = document.querySelector("#icon");
  iconElement.setAttibute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}2x.png`
  );
}

displayDescription();

// Need to check the API response for these paths

function humidity(response) {
  let humidity = document.querySelector("#humidity");
  humidityElement.innerText = response.data.main.humidity;
}

displayHumidity();

function wind(response) {
  let wind = document.querySelector("#wind");
  windElement.innerText = response.data.main.wind;
}

displayWind();

function precipitation(response) {
  let precipitation = document.querySelector("precipitation");
  precipitationElement.innerText = response.data.main.precipitation;
}

displayPrecipitation();

function search(city) {
  let apiKey = "f1bedc417492cf5cdfcb2aa86cb69d69";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

displayCity();

function searchText(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityInput");
  search(cityInputElement.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchText);

// let now = new Date();
// let selecteddate = document.getElementById("date");
// let date = now.getDate();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = days[now.getDay()];
// let months = [
//   "Jan",
//   "Feb",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "Sept",
//   "October",
//   "November",
//   "December",
// ];
// let month = months[now.getMonth()];
// let year = now.getFullYear();

// selecteddate.innerHTML = `${day} ${month} ${date} ${year}`;

function displayforecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row>`;
  forecastHTML =
    forecastHTML +
    `
            <div class="col-2">
            <div class="weather-forecast-date">
              Mon
            </div>
            <div>
 <img src="https://cdn-icons-png.flaticon.com/512/1555/1555512.png" 
              alt="Image"
              width="42"
              />
              </div>
              <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-max">
              18ºC
            </span>
               <span class="weather-forecast-temperature-min">
              12ºC
               </span>
              </span>
              </div>
        </div>
  `;

  forecastHTML =
    forecastHTML +
    `
            <div class="col-2">
            <div class="weather-forecast-date">
              Mon
            </div>
            <div>
 <img src="https://cdn-icons-png.flaticon.com/512/1555/1555512.png" 
              alt="Image"
              width="42"
              />
              </div>
              <div class="weather-forecast-temperature">
            <span class="weather-forecast-temperature-max">
              18ºC
            </span>
               <span class="weather-forecast-temperature-min">
              12ºC
               </span>
              </span>
              </div>
        </div>
  `;

  let forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

displayforecast();
