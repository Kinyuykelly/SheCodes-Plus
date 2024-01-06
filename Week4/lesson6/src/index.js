let h1 = document.querySelector("h1");
let now = new Date();
console.log(now);
let time = now.getMilliseconds();
console.log(time);
let day = now.getDay();
console.log(day);
let year = now.getFullYear();
console.log(year);
let month = now.getMonth();
console.log(month);
let date = now.getDate();

let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
day = days[now.getDay()];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month = months[now.getMonth()];
h1.innerHTML = `Today is ${day}, ${month} ${date}, ${year}`;

function formatDate(date, format) {
    return date.toLocaleString(undefined, format);
  }
  console.log(
    formatDate(new Date(), {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    })
  );