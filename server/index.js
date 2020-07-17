const express = require('express');
const app = express();
const port = 8080;
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const key = '9ead2978b09934b51389e65389cb9722';

app.post('/api/nearby', (req, res) => {
  let lon = req.body.longitude;
  let lat = req.body.latitude;

  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
  .then(res => res.json())
  .then(data => res.send({
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    temperature: Math.round(data.main.temp - 273),
    wind: data.wind.speed,
    humidity: data.main.humidity,
  }))
  .catch(e => console.log(e))
})

app.post('/api/weather', (req, res) => {
  let city = req.body.value;

  if (city === '') {
    city = 'stockholm';
  } 
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  .then(res => res.json())
  .then(data => {
    if (data.cod === '404') {
      res.status(404).send({
        error: true,
      })
    } else if (data.cod === '400'){
      res.status(400).send({
        empty: true,
      })
    }
    res.status(200).send({
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    temperature: Math.round(data.main.temp - 273),
    wind: data.wind.speed,
    humidity: data.main.humidity,
  })
})
  .catch(e => console.log(e))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
