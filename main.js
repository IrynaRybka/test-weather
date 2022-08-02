// current Time
let currentTime = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();

    let heading = document.querySelector("#today-date");

    

  heading.innerHTML = `${currentDay}, ${currentDate} ${currentMonth}, ${currentYear}, ${currentHours} : ${currentMinutes} `;

  return formatDate;
}
formatDate(currentTime);

// change celciy to farengate
function temperatureCelciy(event) {
    event.preventDefault();
    let number = document.querySelector("#number-temperature");
    number.innerHTML = "27"
}
let celciy = document.querySelector("#celciy");
celciy.addEventListener("click", temperatureCelciy);

function temperatureFarengate(event) {
  event.preventDefault();
  let number = document.querySelector("#number-temperature");
  number.innerHTML = "80,6";
}
let farengate = document.querySelector("#farengate");
farengate.addEventListener("click", temperatureFarengate);
console.log(temperatureFarengate);




// current weather in other cities
function displayWeather(response) {
  document.querySelector("#title").innerHTML = response.data.name;
  document.querySelector("#number-temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#forecoast").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "ec73684ab43da8e0668f04ae9704e6d3";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    .concat(city, "&appid=")
    .concat(apiKey, "&units=metric");
  
  axios.get(apiUrl).then(displayWeather);
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}
// current position
function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;

  let temperatureElement = document.querySelector("#number-temperature");
  temperatureElement.innerHTML = `${temperature}`;

  let description = document.querySelector("#forecoast");
  description.innerHTML = `${response.data.weather[0].main}`;
}

function retrievePosition(position) {
  let apiKey = "ec73684ab43da8e0668f04ae9704e6d3";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(url).then(showWeather);
  
}
function getCurrentWeather() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let button = document.querySelector("#current-btn");
button.addEventListener("click", getCurrentWeather);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

// navigator.geolocation.getCurrentPosition(retrievePosition);




