API_URL =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london";

API_KEY = "dd3397e448d737c705c707adabbda968";

// Side elements
const weatherTypeEl = document.querySelector(".side--weather-type")
const sideTempEl = document.querySelector(".side--weather h1")
const sideLocationEl = document.querySelector(".side--location span")

// Main elements


async function fetchApi() {
    let response = await fetch(`${API_URL}&appid=${API_KEY}`);
    let data = await response.json();

    console.log(data);
    weatherTypeEl.textContent = data.weather[0].description
    sideTempEl.innerHTML = `${Math.floor(data.main.temp)}<span>°C</span>`;
    sideLocationEl.textContent = `${data.name}, ${data.sys.country}`
}

fetchApi();