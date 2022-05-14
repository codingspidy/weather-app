const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, response) => {
    let city = req.body.cityInput; 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3ce309b3b5e2cfe81908910e4a0c1ba
    `

    https.get(url, (res) => {
        res.on("data", (data) => {
            let weatherData = JSON.parse(data);
            let condition = weatherData.weather[0].description;
            let temp = weatherData.main.temp;
            let feelsLike = weatherData.main.feels_like;
            let pressure = weatherData.main.pressure;
            let humidity = weatherData.main.humidity;
            let wind = weatherData.wind.speed;
            console.log(weatherData);
        })

    })
   
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
