// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then return the original string.

function str(a) {
    if(a[0] === 'P' && a[1] === 'y') {
        console.log(a);
    }
    else {
        var pystring = "Py";
        var nstring = pystring.concat(a)
        console.log(nstring);    
    }
}
str("Python");
str("thon");
str("PYabc");
str("pyabc");
str("pYabc");


// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function remove(str, char){
    var string = str;
    //console.log(string);
    var length = string.length;
    //console.log(length);
    var nstring1 = string.substr(0, char);
    //console.log(nstring1);
    var nstring2 = string.substr(char + 1, length);
    //console.log(nstring2);
    var nstring = nstring1.concat(nstring2);
    console.log(nstring);
}
remove("ABCDEF", 3);


// 23. Write a JavaScript program to create a new str from a given str changing the position of first and last characters. 
// The str length must be greater than or equal to 1.

function change(str){
    var length = str.length;
    if(length >= 1) {
        var a = str[0];
        var b = str[length-1];
        var nstr = b + str.substr(1,length-2) + a;
        console.log(nstr);
    }
}    
change("ABCDEF");
change("a");
change("");

// 24. Write a JavaScript program to create a new str from a given str with the first character of the given str added at the front and back.

function change(str){
    var length = str.length;
    var a = str[0];
    var nstr = a + str + a;
    console.log(nstr);
}    
change("ABCD");
change("wxyz");
change("1234");


// 25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

function check(x) {
    return( x%3 === 0 || x%7 === 0)
}
console.log(check(3));
console.log(check(7));
console.log(check(21));
console.log(check(10));


// 26. Write a JavaScript program to create a new str from a given str taking the last 3 characters and added at both the front and back. 
// The str length must be 3 or more.


function change(str){
    var length = str.length;
    if(length >= 3) {
    var a = str.substr(length - 3, length);
    var nstr = a + str + a;
    console.log(nstr);
    }
}    
change("ABCDEF");
change("wxyz");
change("123");
change("12");


// 27. Write a JavaScript program to check if a str starts with 'Java' and false otherwise.

function java(str){
    return(str.startsWith("Java"));
}
console.log(java("Java"));
console.log(java("Ja"));
console.log(java("JAVA is great"));
console.log(java("Java is a programming language"));


// 28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them are in the said range.

function range(a, b) {
    return(a >= 50 && a <= 99 || b >= 50 && b <= 99)
}
console.log(range(1,2));
console.log(range(1,75));
console.log(range(75,1));
console.log(range(50,99));
console.log(range(10,20));
console.log(range(50,9));
console.log(range(5,99));


// 29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). 
// Return true if one or more of them are in the said range.

function range(a, b, c) {
    return(a >= 50 && a <= 99 || b >= 50 && b <= 99 || c >= 50 && c <= 99)
}

console.log(range(1,2,3));
console.log(range(1,75,56));
console.log(range(75,1,8));
console.log(range(50,99,50));
console.log(range(10,20,30));
console.log(range(50,9,8));
console.log(range(5,99,99));


// 30. Write a JavaScript program to check if a str "Script" presents at 5th (index 4) position in a given str.
// If "Script" presents in the str return the str without "Script" otherwise return the original one.

function script(str){
    var script = "Script"
    var string = str.substr(4,10);
    if (string === script) {
    var nstr = str.substr(0,4);
    console.log(nstr);
    }
    else {
    console.log(str);
    }
}    
script("JavaScript");
script("Script");
script("CoffeeScript");
script("FilmScript");