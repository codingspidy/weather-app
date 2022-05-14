
// const cityName = document.querySelector(".city-name")
// const weatherCondition = document.querySelector(".weather-condition");
// const weatherTemp = document.querySelector(".temp");
// const weatherFeelsLike = document.querySelector(".feels-like");
// const weatherHumidity = document.querySelector(".humidity");
// const weatherPressure = document.querySelector(".pressure");
// const weatherWind = document.querySelector(".wind");
const btn = document.querySelector(".search-btn");

btn.addEventListener("click", () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3ce309b3b5e2cfe81908910e4a0c1ba') 
    .then( response => {
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
        return response.json();
    })
    .then( json => {
        console.log(json);
    })
    .catch( err => {
        console.error(err);
    })
})
