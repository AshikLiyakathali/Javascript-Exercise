//Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date("10/10/2019");
var dayName = days[d.getDay()];
console.log("Today is " + dayName);
//console.log("Today is " + days[d.getDay()]);

console.log("Current Time is " + d.toLocaleTimeString());

