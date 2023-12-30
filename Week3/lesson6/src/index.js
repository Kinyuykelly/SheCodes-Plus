let weather = {};
console.log(weather);
weather = {
    temperature: 66,
    humidity: 12
};
console.log(weather);
console.log(weather.temperature);
console.log(weather.humidity);
weather.windSpeed = 2;
console.log(weather);
console.log(weather["windSpeed"]);
console.log(weather["temperature"]);
console.log(weather["humidity"]);
let forecast = {
    sunday : {
        temperature: 2
    },
    monday : {
        temperature: 8
    },
    tuesday : {
        temperature: 5
    },
    wednesday : {
        temperature: 3
    },
    thursday : {
        temperature: 9
    },
    friday : {
        temperature: 1
    },
    saturday : {
        temperature: 4
    }
}
console.log(forecast);