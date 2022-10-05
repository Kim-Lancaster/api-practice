const https = require('https');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const apiKey = process.env.WEATHER_API_KEY;


app.get('/', (req, res) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Ventura&appid=${WEATHER_API_KEY}`;

    https.get(url, (response) => {

        console.log(response.statusCode)

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            res.write("<h1>The temp in Ventura: " + temp + "</h1>");
            res.write("<h2>The day looks like: " + weatherDescription + "</h2>");
            res.send();
        })
    })

})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})