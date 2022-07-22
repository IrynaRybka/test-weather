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
let myCity = document.querySelector("#seach-form");
myCity.addEventListener("submit", changeCity);
