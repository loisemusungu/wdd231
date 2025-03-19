// Fetch weather data from OpenWeather API
require('dotenv').config();

const apiKey = process.env.API_KEY;
const city = "Nairobi";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function fetchWeatherData() {
  try {
    // Fetch current weather data
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    console.log("Weather data:", weatherData);

    // Populate current weather
    document.getElementById(
      "temperature"
    ).textContent = `${weatherData.main.temp}°F`;
    document.getElementById("condition").textContent =
      weatherData.weather[0].description;
    document.getElementById(
      "high-temp"
    ).textContent = `High: ${weatherData.main.temp_max}°`;
    document.getElementById(
      "low-temp"
    ).textContent = `Low: ${weatherData.main.temp_min}°`;
    document.getElementById(
      "humidity"
    ).textContent = `Humidity: ${weatherData.main.humidity}%`;

    const sunrise = new Date(weatherData.sys.sunrise * 1000);
    const sunset = new Date(weatherData.sys.sunset * 1000);
    document.getElementById(
      "sunrise"
    ).textContent = `Sunrise: ${sunrise.toLocaleTimeString()}`;
    document.getElementById(
      "sunset"
    ).textContent = `Sunset: ${sunset.toLocaleTimeString()}`;

    // Set weather icon
    const icon = weatherData.weather[0].icon;
    document.getElementById("weather-icon").classList.add(`fa-${icon}`);

    // Fetch weather forecast
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    // Populate forecast
    document.getElementById(
      "forecast-today"
    ).innerHTML = `Today: <span><strong>${forecastData.list[0].main.temp}°F</strong></span>`;
    document.getElementById(
      "forecast-wednesday"
    ).innerHTML = `Wednesday: <span><strong>${forecastData.list[1].main.temp}°F</strong></span>`;
    document.getElementById(
      "forecast-thursday"
    ).innerHTML = `Thursday: <span><strong>${forecastData.list[2].main.temp}°F</strong></span>`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeatherData();
