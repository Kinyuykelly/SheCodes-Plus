//Display day and time
let displayedDay = document.querySelector("span.current-day");
let displayedTime = document.querySelector("span.current-time");
let current = new Date();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[current.getDay()];
displayedDay.innerHTML = day;
let hour = current.getHours();
let minute = current.getMinutes();
if (minute < 10){
    minute = `0${minute}`;
}
displayedTime.innerHTML = `${hour}:${minute},  `;
//Display the city name on the page after the user submits the form.
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let city = document.querySelector(".search-input").value;
    let currentCity = document.querySelector("h1.current-city");
    currentCity.innerHTML = city;
});

