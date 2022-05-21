// Selecting elements for updating DOM content.
const cityName = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".condition");
const weatherTemp = document.querySelector(".temp-deg");
const weatherFeelsLike = document.querySelector(".feels-like");
const weatherHumidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".description");
const weatherWind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

const btn = document.getElementById("search-btn");

displayDefaultWeather();
displayWeather();

// Function for displaying weather of cities that the user query.
function displayWeather() {
  btn.addEventListener("click", () => {
    let locationInput = document.getElementById("search-input").value;

    // Sending location to server side js file throught fetch POST.
    fetch("/weather", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        location: locationInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const weatherData = data;
        cityName.textContent = weatherData.name;
        weatherCondition.textContent = weatherData.weather[0].main;
        weatherTemp.textContent = weatherData.main.temp;
        weatherFeelsLike.textContent = weatherData.main.feels_like;
        weatherHumidity.textContent = weatherData.main.humidity;
        weatherDescription.textContent = weatherData.weather[0].description;
        weatherWind.textContent = weatherData.wind.speed;

        // Displaying weather condition image
        let weatherCode = weatherData.weather[0].id.toString().split("")[0];
        if (weatherCode == 2) {
          weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
        }
        if (weatherCode == 3) {
          weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
        }
        if (weatherCode == 4) {
          weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
        }
        if (weatherCode == 5) {
          weatherIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
        }
        if (weatherCode == 6) {
          weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
        }
        if (weatherCode == 7) {
          weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
        }
        if (weatherCode == 8) {
          weatherIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
        }
        if (weatherData.weather[0].id == 800) {
          weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
        }
      });
  });
}

// Function for displaying default weather when the site loads.
function displayDefaultWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=new+delhi&appid=f3ce309b3b5e2cfe81908910e4a0c1ba&units=metric"
  )
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      const weatherData = json;
      cityName.textContent = weatherData.name;
      weatherCondition.textContent = weatherData.weather[0].main;
      weatherTemp.textContent = weatherData.main.temp;
      weatherFeelsLike.textContent = weatherData.main.feels_like;
      weatherHumidity.textContent = weatherData.main.humidity;
      weatherDescription.textContent = weatherData.weather[0].description;
      weatherWind.textContent = weatherData.wind.speed;

      let weatherCode = weatherData.weather[0].id.toString().split("")[0];

      // Displaying weather condition image
      if (weatherCode == 2) {
        weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
      }
      if (weatherCode == 3) {
        weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png";
      }
      if (weatherCode == 4) {
        weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png";
      }
      if (weatherCode == 5) {
        weatherIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
      }
      if (weatherCode == 6) {
        weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png";
      }
      if (weatherCode == 7) {
        weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png";
      }
      if (weatherCode == 8) {
        weatherIcon.src = "https://openweathermap.org/img/wn/04d@2x.png";
      }
      if (weatherData.weather[0].id == 800) {
        weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png";
      }
    });
}
