// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function number(a, b, c) {
    if (a == b && b == c) {
      return 30;
    }
  
    if (a == b || b == c || c == a) {
      return 40;
    }
  
    return 20;
  }
  console.log(number(8, 8, 8));
  console.log(number(8, 8, 18));
  console.log(number(8, 7, 18));


// 42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function order(a, b, c ) {
    if ( b > a && c > b) 
    {
      return "strict mode";    
    }
    else if(c > b) 
     return "Soft mode";
    else
      return "Undefinded";
  }
  
  console.log(order(10,15,31));
  console.log(order(24,22,31));
  console.log(order(50,21,15));


// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function last(a, b, c) {
    return (a % 10 === b % 10) ||
           (a % 10 === c % 10) ||
           (b % 10 === c % 10);
           
}

console.log(last(22,32,42));
console.log(last(102,302,2));
console.log(last(20,22,45));


// 44. Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.


function twenty(a, b, c) 
{
return (a >= 20 && (a < b || a < c)) ||
(b >= 20 && (b < a || b < c)) ||
(c >= 20 && (c < b || c < a));
}
console.log(twenty(23, 45, 10));
console.log(twenty(23, 23, 10));
console.log(twenty(21, 66, 75));


// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.


function test(a, b) {
    return (a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15);
}

console.log(test(15, 9));
console.log(test(25, 15));
console.log(test(7, 8));
console.log(test(25, 10));
console.log(test(5, 9));
console.log(test(7, 9));
console.log(test(9, 25));


// 46. Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.

function check (a, b) {
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
    return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    else
    return false;
    }
    console.log(check(14, 21));
    console.log(check(14, 20));
    console.log(check(16, 20));


// 47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).
// For example 40 presents in 400 and 4000

function test(a, b, n) 
  {    
    if (n < 40 || n > 10000)
      return false;
    else
      if (n >= a && n <= b)
        return true;
      else
        return false;
  }
console.log(test(40, 4000, 45));  
console.log(test(80, 320, 79));  
console.log(test(89, 4000, 30));
 

// 48. Write a JavaScript program to reverse a given str.

function reverse(str) 
{
    return str.split("").reverse().join("");
}

console.log(reverse("w3resource"));
console.log(reverse("www"));
console.log(reverse("JavaScript"));


// 49. Write a JavaScript program to replace every character in a given str with the character following it in the alphabet.

function LetterChanges(text) {
//https://goo.gl/R8gn7u
var s = text.split('');
for (var i = 0; i < s.length; i++) {
// Caesar cipher
switch(s[i]) {
case ' ':
break;
case 'z':
s[i] = 'a';
break;
case 'Z': 
s[i] = 'A';
break;
default:
s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
}

// Upper-case vowels
switch(s[i]) {
case 'a': case 'e': case 'i': case 'o': case 'u':
s[i] = s[i].toUpperCase();
}
}
return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));


// 50. Write a JavaScript program to capitalize the first letter of each word of a given str.

function capital(str) 
{
    str = str.split(" ");

    for (var i = 0, a = str.length; i < a; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital("Write a JavaScript program to capitalize the first letter of each word of a given string."));
