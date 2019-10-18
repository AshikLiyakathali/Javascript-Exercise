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

