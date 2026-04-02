//Q9 — Weather App (Express + EJS)
const express = require('express');
const axios = require('axios');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const API_KEY = 'YOUR_OPENWEATHER_API_KEY';

app.get('/', (req, res) => res.render('home'));

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    res.render('weather', { city, temp: data.main.temp, humidity: data.main.humidity, desc: data.weather[0].description });
});

app.listen(3000);

//views/home.ejs
<form action="/weather" method="POST">
  <input name="city" placeholder="Enter city" />
  <button type="submit">Get Weather</button>
</form>


//views/weather.ejs
<h1>Weather in <%= city %></h1>
<p>Temperature: <%= temp %>°C</p>
<p>Humidity: <%= humidity %>%</p>
<p>Condition: <%= desc %></p>
<a href="/">Back</a>