// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]);
console.log(weekDays[1]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[0] = "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
console.log(weekDays.splice(1, 2));
console.log(weekDays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = 0; i < weekDays.length; i++) {
    console.log("Temperature on " + weekDays[i] + " is 18 degrees");
  }

