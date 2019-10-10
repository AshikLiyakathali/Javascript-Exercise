// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

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


// 2. Write a JavaScript program to print the contents of the current window.

function print_current_page()
{
window.print();
}


// 3. Write a JavaScript program to get the current date.
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


// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

var a = 5; 
var b = 6; 
var c = 7; 
var s = (a + b + c)/2;
var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area);


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

var string = "w3resource";

console.log(string)
console.log(string[0]);

var length = string.length;
console.log(length);

//console.log(string.slice(0, (string.length -1)));

//console.log(string.substr(0, (string.length -1)));

//console.log(string.substring(1, 4));

//console.log(string[length-1]);

for (var i = 1; i < length; i++){
    var string2 = string[length-1]; 
    //console.log(string2);
    var nstring = string.substr(0, (string.length -1)) 
    //console.log(nstring);
    nstring = string2.concat(nstring);
    console.log(nstring);
    var string = nstring;
} 


// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.



// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.



// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".



// 9. Write a JavaScript program to calculate days left until next Christmas.



// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
// Sample form :
// sample form



