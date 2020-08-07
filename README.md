# Weather Application

This application was built during &#60;/salt&#62; spring 2020 Hackaton day. The requirements were to have a front and backend and finish the application within 1 day.

It is a weather application built with express.js and React. 

## Installation
To install run npm i & npm start in both the server and client folder. 

The application connects to openweathermap's current weather API (https://openweathermap.org/current). On page load it gets the users current location and if Geolocation is supported will provide the nearby weather getting the latitude and longitude. The user can also enter a query to search for a specific city.

## API Key
Add your own API Key from https://openweathermap.org/ to index.js in the server folder. 

