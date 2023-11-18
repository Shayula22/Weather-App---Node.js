const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d8a62915f4f2c9157712d2d7ca0a3b3c&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location. Please check the coordinates.', undefined);
        } else {
            const weatherDescription = body.current.weather_descriptions[0];
            const temperature = body.current.temperature;
            callback(undefined, weatherDescription + ". It is currently " + temperature + " degrees out.");
        }
    });
};

module.exports = forecast;
