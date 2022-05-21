const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/weather", (req, res) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.location}&appid=f3ce309b3b5e2cfe81908910e4a0c1ba&units=metric`;
  axios({
      url: url,
      responseType: 'json'
  }).then(data => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

