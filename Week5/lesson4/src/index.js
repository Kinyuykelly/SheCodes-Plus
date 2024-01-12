let city = "Sydney"
let apiKey = "a235423bf4aefc61ac00dafo8c073tb3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric
`;
function displayTemperature(response){
    let heading = document.querySelector("h1");
    let city = response.data.city;
    let temperature =Math.round( response.data.temperature.current);
     heading.innerHTML = `It is ${temperature} degrees in ${city}`;
}
axios.get(apiUrl).then(displayTemperature);