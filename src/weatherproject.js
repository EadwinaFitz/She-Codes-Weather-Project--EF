let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(now) {
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  return `${day} ${month} ${date} ${year}`;
}

function formatTime(now) {
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let formattedHour = hour < 10 ? `0${hour}` : hour;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`;
}

function renderDateAndTime() {
  let now = new Date();

  let currentDate = document.querySelector("#currentDate");
  currentDate.innerHTML = formatDate(now);
  let currentTime = document.querySelector("#currentTime");
  currentTime.innerHTML = formatTime(now);
}

setInterval(renderDateAndTime, 500);
renderDateAndTime();

let apiKey = "70054ee566e648ee9a4d709e73498eea";

function displayDetails(response) {
  let currentTemp = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  currentTemp.innerHTML = temperature;

  let displayCity = document.querySelector("#selectedCity");
  displayCity.innerHTML = response.data.name;

  let weatherDescription = document.querySelector(".weather-details");
  weatherDescription.innerHTML = response.data.weather[0].main;

  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let windSpeed = document.querySelector(".wind-speed");
  windSpeed.innerHTML = `Wind Speed: ${Math.round(
    response.data.wind.speed
  )}km/h`;
}

function citySearch(event) {
  event.preventDefault();
  let input = document.querySelector("#searchcity");

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`;
  axios(apiURL).then(displayDetails);
}

let citySearchForm = document.querySelector("form");
citySearchForm.addEventListener("submit", citySearch);

function showPosition(position) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios(apiURL).then(displayDetails);
}

function currentLocationButton() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationButton = document.querySelector("#current-location-button");
locationButton.addEventListener("click", currentLocationButton);

function displayFarenheit(event) {
  let farenheitTemp = document.querySelector("#temperature");
  let farenheitConversion = Math.round(response.data.main.temp);
  currentTemp.innerHTML = temperature;
}

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", displayFarenheit);

currentLocationButton();
