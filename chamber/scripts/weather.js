const currentWeather = document.querySelector('.current-weather');
const weatherForecast = document.querySelector('.weather-forecast');

async function loadCurrentWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=40.5383476&lon=19.9461324&appid=58552f9da96dbf194f3331ca661da036');
    return await response.json();
}

async function loadWeatherForecast() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=40.5383476&lon=19.9461324&appid=58552f9da96dbf194f3331ca661da036');
    return await response.json();
}

loadCurrentWeather().then(weather => {
    console.log('Current weather loaded:', weather);
    currentWeather.querySelector('.temp').innerHTML = `<strong>${toCelsius(weather.main.temp)}°C</strong>`;
    currentWeather.querySelector('.description').textContent = weather.weather[0].main;
    currentWeather.querySelector('.icon').src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    currentWeather.querySelector('.icon').alt = weather.weather[0].description;
    currentWeather.querySelector('.high').innerHTML = `High: <strong>${toCelsius(weather.main.temp_max)}°C</strong>`;
    currentWeather.querySelector('.low').innerHTML = `Low: <strong>${toCelsius(weather.main.temp_min)}°C</strong>`;
    currentWeather.querySelector('.humidity').innerHTML = `Humidity: <strong>${weather.main.humidity}%</strong>`;
    currentWeather.querySelector('.sunrise').innerHTML = `Sunrise: <strong>${new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { timeZone: 'utc' })}</strong>`;
    currentWeather.querySelector('.sunset').innerHTML = `Sunset: <strong>${new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-US', { timeZone: 'utc' })}</strong>`;
});

loadWeatherForecast().then(forecast => {
    // we get 3-hour intervals but we want tomorrow and the next day
    weatherForecast.querySelector('.today').innerHTML = `Today: <strong>${toCelsius(forecast.list[0].main.temp)}°C</strong>`;
    const dayOfWeekTomorrow = new Date(forecast.list[8].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    const dayOfWeekDayAfterTomorrow = new Date(forecast.list[16].dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
    weatherForecast.querySelector('.tomorrow').innerHTML = `${dayOfWeekTomorrow}: <strong>${toCelsius(forecast.list[8].main.temp)}°C</strong>`;
    weatherForecast.querySelector('.day-after-tomorrow').innerHTML = `${dayOfWeekDayAfterTomorrow}: <strong>${toCelsius(forecast.list[16].main.temp)}°C</strong>`;
});

function toCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(0);
}
