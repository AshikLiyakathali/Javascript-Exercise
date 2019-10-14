// 51. Write a JavaScript program to convert a given number to hours and minutes.

function time(num) {
    var hrs = Math.floor(num / 60);
    var min = Math.floor(num % 60);

    console.log(hrs, ": hrs", min, ": min");
}
time(15000);
time(150);
time(71);
time(450);
time(1441);


// 52. Write a JavaScript program to convert the letters of a given str in alphabetical order.

function order(str) { 
    var nstr = str.split("");
    //console.log(nstr);
    
    var nstr = nstr.sort();
    //console.log(nstr);
    
    var nstr = nstr.join("");
    console.log(nstr);
}
order("dbca");
order("ashik");
order("ASHIK");
order("python");
order("Python");
order("Exercises");

//function order(str) { 
//    return str.split("").sort().join("");     
//}
//console.log(order("Python"));
//console.log(order("Exercises"));


// 53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given str.

function three(str,a,b){
    var length = str.length;
    var count = 0;
    for(var i = 0; i < length; i++) {
        if((str[i] === a && str[i+4] === b) || (str[i] === b && str[i+4] === a)) {
            count = count + 1;
        }  
    }
    if(count >= 1){
        console.log("True : The given characters in the string are separated by 3 places", count, "times");
    }
    else{
        console.log("False : The given characters in the string are not separated by 3 places even once");  
    }
}
three("ashik", "a", "k");
three("ashiik", "a", "k")
three("Chainsbreak", "a", "b");

//function ab_Check(str)
// {
//    return (/a...b/).test(str) || (/b...a/).test(str);
// }

//console.log(ab_Check("Chainsbreak"));
//console.log(ab_Check("pane borrowed"));
//console.log(ab_Check("abCheck"));


// 54. Write a JavaScript program to count the number of vowels in a given str.

function vowel(str){
    var length = str.length;
    var count = 0;
    for(var i = 0; i < length; i++) {
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count = count + 1;
        }         
    }
    if(count === 0) {
        console.log("There are no vowels in the given string");  
    }
    else{
        console.log("There are",count, "vowels in the given string");
    }
}
vowel("aeiou");
vowel("bcdfg");
vowel("ashik");
vowel("asheik");

//function vowel_Count(str){ 
// return str.replace(/[^aeiou]/g, "").length; 
//}
//console.log(vowel_Count("Python"));
//console.log(vowel_Count("w3resource.com"));


// 55. Write a JavaScript program to check if a given str contains equal number of p's and t's present.

function pt(str){
    var length = str.length;
    var count1 = 0;
    var count2 = 0;
        for(var i = 0; i < length; i++) {
        if(str[i] === "p") {
            count1 = count1 + 1;
        }
        if(str[i] === "t") {
            count2 = count2 + 1;
        }         
    }
    if(count1 === count2) {
        console.log("True: There are equal number of p's and t's in the given string");  
    }
    else{
        console.log("False: There are unequal number of p's and t's in the given string");
    }
}
pt("ptpt");
pt("ptptp");
pt("tptpt");
pt("python");

//function equal_pt(str){ 
//  var str_p = str.replace(/[^p]/g, "");
//  var str_t = str.replace(/[^t]/g, "");
//  var p_num = str_p.length;
//  var s_num = str_t.length;
//  return p_num === s_num;
//}
//console.log(equal_pt("ptptss"));
//console.log(equal_pt("ptps"));
