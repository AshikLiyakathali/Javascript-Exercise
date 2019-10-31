// 61. Write a JavaScript program to concatenate two strs except their first character.

function combine(str1,str2){
    var l1 = str1.length;
    var l2 = str2.length;
    var nstr1 = str1.substr(1,(l1-1));
    var nstr2 = str2.substr(1,(l2-1));
    var nstr = nstr1.concat(nstr2);
    console.log(nstr);
}
combine("abcd", "1234")

// given solution

function concatenate(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
  }
  
  console.log(concatenate("PHP","JS"));
  console.log(concatenate("A","B"));
  console.log(concatenate("AA","BB"));


// 62. Write a JavaScript program to move last three character to the start of a given str.
// The str length must be greater or equal to three.

function three(str){
    var length = str.length;
    if(length >= 3){  
        var nstr = str.substr(length-3,length);
        str = str.substr(0,length-3);
        nstr = nstr.concat(str);
        console.log(nstr); 
    }
}
three("abcdef");
three("12");

//given solution

function right_three(str) {
    if (str.length > 1)
      {
        return str.slice(-3) + str.slice(0, -3);
      }
 return str;
}
console.log(right_three("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));


// 63. Write a JavaScript program to create a str using the middle three characters of a given str of odd length. 
// The str length must be greater or equal to three.

function mid(str){
    var length = str.length;
    if(length < 3 || length%2 === 0){
        console.log("The given string", str, "has even length or length below three characters");
    }
    else{
        var m = (length-1)/2;
        var nstr = str.substring(m-1,m+2);
        console.log(nstr);
    }
}
mid("abcde");
mid("abcd");
mid("1234567");
mid("ab");
mid("123456789");

// given solution

function middle_three(str) {
    if (str.length % 2!= 0) {
    
     mid = (str.length + 1)/2;
     return str.slice(mid - 2, mid + 1);
     }
   return str;
 }
 console.log(middle_three('abcdefg'));
 console.log(middle_three('HTML5'));
 console.log(middle_three('Python'));
 console.log(middle_three('PHP'));
 console.log(middle_three('Exercises'));


// 64. Write a JavaScript program to concatenate two strings and return the result. 
// If the length of the strings are not same then remove the characters from the longer string.

function combine(str1,str2){
    if(str1.length === str2.length){
        str1 = str1.concat(str2);
        console.log(str1);
    }
    else if(str1.length > str2.length){
        nstr = str1.substring(str1.length - str2.length, str1.length);
        nstr = nstr.concat(str2);
        console.log(nstr);
    }
    else{
        nstr = str2.substring(str2.length - str1.length, str2.length);
        nstr = nstr.concat(str1);
        console.log(nstr);
    }
}
combine("abcdef","gh");
combine("ef","abcd");
combine("abc","def");
combine("d","a");

// given solution 

function str_con_cat(str1, str2) {
    const m = Math.min(str1.length, str2.length);
  
    return str1.substring(str1.length - m) + str2.substring(str2.length - m);
  }
  
  console.log(str_con_cat("Python", "JS"));
  console.log(str_con_cat("ab", "cdef"));


// 65. Write a JavaScript program to test if a str end with "Script". 
// The str length must be greater or equal to 6.

function script(str){
    var len = str.length;
    if(len >= 6){
        var nstr = str.substring(len-6, len);
        return (nstr === "Script") ? true : false;
    }
    else{
        return false;
    }
}
console.log(script("JavaScript"));
console.log(script("Java"));
console.log(script("ManuScript"));
console.log(script("Javascript"));

// given solution

function end_script(str) {
    if (str.substring(str.length - 6, str.length) == 'Script') 
    {
      return true;
    } 
    else 
    {
      return false;
    }
  }
  console.log(end_script("JavaScript"));
  console.log(end_script("Java Script"));
  console.log(end_script("Java Scripts"));


// 66. Write a JavaScript program to display the city name if the str begins with "Los" or "New" otherwise return blank.

function city(str){
    var nstr = str.substring(0,3);
    if(nstr === "Los" || nstr === "New"){
        return str;
    }
    else {
        return " ";
    } 
}

console.log(city("Los Angeles"));
console.log(city("An"));
console.log(city("Angeles"));
console.log(city("New York"));
console.log(city("new Jersey"));  


// 67. Write a JavaScript program to create a new str from a given str, 
// removing the first and last characters of the str if the first or last character are 'P'. 
// Return the original str if the condition is not satisfied.

function mid(str){
    if(str[0] === "P" || str[str.length-1] === "P"){
        var nstr = str.substring(1,str.length-1)
        return nstr;
    }
    else
    {
        return str;
    }
}

console.log(mid("Pabcd"));
console.log(mid("PabcdP"));
console.log(mid("abcdP"));
console.log(mid("abcdp"));


// 68. Write a JavaScript program to create a new str using the first and last n characters from a given sting. 
// The str length must be greater or equal to n.

function firstlast(str,n){
    var length = str.length;
    if(length >= n){
        var nstr = str.substring(0,n).concat(str.substring(length-n, length));
        return nstr; 
    }
    else{
        return str;
    }
} 
console.log(firstlast("abwxyzcd", 2));
console.log(firstlast("ab", 2));
console.log(firstlast("abcxyzdef", 3));
console.log(firstlast("abcd", 5));


// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3

function sum(arr){
    return arr[0]+arr[1]+arr[2];
}
console.log(sum([10,2,3]));


// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

function left(arr){
    var a = arr.shift();
    arr.push(a);
    return arr;
    // return [arr[1], arr[2], arr[0]] ;
}
console.log(left([1,2,3]));
console.log(left([4,5,6]));
console.log(left([7,8,9]));