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

// change City
function changeCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("#title");
  if (searchInput.value) {
    city.innerHTML = `${searchInput.value}`;
  } else {
    city.innerHTML = null;
    alert(`Please, type a city`);
  }
}
let myCity = document.querySelector("#search-form");
myCity.addEventListener("submit", changeCity);

// current weather in a submit city
let apiKey = "ec73684ab43da8e0668f04ae9704e6d3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  let temperature = Math.round(response.main.data.temp);
  let temperatureElement = document.querySelector("#number-temperature");
  let description = document.querySelector("#forecoast");

  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
changeCity(showTemperature);

// current position
function currentTemperature(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${response.data.name}`;
  let description = document.querySelector("#number-temperature");
  description.innerHTML = `${temperature}`;
}
function retrievePosition(position) {
  let apiKey = "ec73684ab43da8e0668f04ae9704e6d3";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(currentTemperature&&retrievePosition);

let button = document.querySelector("#current-btn");
button.addEventListener("click", getCurrentPosition);
