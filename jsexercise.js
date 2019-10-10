//1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = new Date();
var dayName = days[day.getDay()];
console.log("Today is : " + dayName + ".");
//console.log("Today is :" + days[day.getDay()]);

var hrs = day.getHours();
var min = day.getMinutes();
var sec = day.getSeconds();

//console.log(hrs,min,sec);

var meridiem = (hrs > 12) ? "PM" : "AM" ; // using ternary operator to decide whether its am or pm
hrs = (hrs >= 12)? hrs - 12: hrs;

// Special condition for noon

if (hrs === 0 && meridiem === "PM")
{
    if (min === 0 && second === 0)
    {
        hrs = 12;
        meridiem = "Noon";
    } 
    else
    {
        hrs = 12;
        meridiem = "PM";
    } 
} 

// Special condition for midnight

if (hrs === 0 && meridiem === "AM")
{
    if (min === 0 && second === 0)
    {
        hrs = 12;
        meridiem = "Midnight";
    } 
    else
    {
        hrs = 12;
        meridiem = "AM";
    } 
} 

console.log("Current Time is : " + hrs, meridiem, ":", min, ":", sec);



// 3. Write a JavaScript program to get the current date.  Go to the editor
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var d = new Date();
var day = d.getDate();
var month = d.getMonth();
//var month = d.getMonth() + 1;
var year = d.getFullYear();

month = month + 1;
//console.log(day, month, year);

if( day < 10)
{
    day = '0'+day;
}
if( month < 10)
{
    month = '0'+month;
}

d = month+'-'+day+'-'+year;
console.log(d);
d = month+'/'+day+'/'+year;
console.log(d);
d = day+'-'+month+'-'+year;
console.log(d);
d = day+'/'+month+'/'+year;
console.log(d);

