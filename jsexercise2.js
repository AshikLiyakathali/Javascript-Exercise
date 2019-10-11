// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function Celsius_to_Farenheit (ctemp){
    var ftemp = ((9 * ctemp)/5) + 32;
    console.log(ctemp, "°C", " is " , ftemp, "°F");
}
Celsius_to_Farenheit(60);

function Farenheit_to_Celsius (ftemp){
    var ctemp = ((ftemp - 32)/9) * 5;
    console.log(ftemp, "°F", " is " , ctemp, "°C" );
}
Farenheit_to_Celsius(45);


// 12. Write a JavaScript program to get the website URL (loading page).

//console.log(document.URL);

// 13. Write a JavaScript exercise to create a variable using a user-defined name.

var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])

// 14. Write a JavaScript exercise to get the extension of a filename.

filename = "system.php";
console.log(filename.split('.').pop());
filename = "abc.js";
console.log(filename.split('.').pop());


// 15. Write a JavaScript program to get the difference between a given number and 13.
// If the number is greater than 13 return double the absolute difference.

function diff13(a){
    if(a > 13) {
        return ((a - 13) * 2);
    }
    else
    {
        return (13 - a);
    }
}

console.log(diff13(10));
console.log(diff13(16));


// 16. Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.

function sum(a, b){
    if(a === b) {
        return ((a + b) * 3);
    }
    else
    {
        return (a + b);
    }
}

console.log(sum(10,10));
console.log(sum(10,20));

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19.

function diff19(a){
    if(a > 19) {
        return ((a - 19) * 3);
    }
    else
    {
        return (19 - a);
    }
}

console.log(diff19(30));
console.log(diff19(10));


// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function fun(a,b) {
    var c = a+b;
    return (a === 50 || b === 50 || c === 50);
}
console.log(fun(10,40));
console.log(fun(40,60));
console.log(fun(50,10));
console.log(fun(20,40));
console.log(fun(10,50));
console.log(fun(20,60));


// 19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.

function within20(a) {
    return (Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20);
}

console.log(within20(10));
console.log(within20(90));
console.log(within20(99));
console.log(within20(199));
console.log(within20(200));


// 20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.

function pos_neg(a, b)
{
  if ((a < 0 && b > 0) || a > 0 && b < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(pos_neg(2, 2));
console.log(pos_neg(-2, 2));
console.log(pos_neg(2, -2));
console.log(pos_neg(-2, -2));

