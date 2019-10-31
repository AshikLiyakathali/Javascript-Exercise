// 81. Write a JavaScript program to add two digits of a given positive integer of length two

function add(num){
    return ((Math.floor(num/10)) + (num%10)); 
}
console.log(add(15));
console.log(add(26));
console.log(add(37));


// 82. Write a JavaScript to add two positive integers without carry.

function carry(n1,n2){
    var result = 0;
    var x = 1;
    while (n1 > 0 && n2 > 0) {
        result += x * ((n1 + n2) % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
        x*= 10;
    }
    return result;
}
console.log(carry(9,7));
console.log(carry(97,22));
console.log(carry(911,322));


// 83. Write a JavaScript to find the longest string from an given array of strings.

function longest(arr){
    var length = arr.length;
    var narr = [];
    for(var i = 0; i < length; i++){
        narr[i] = arr[i].length;
    }
    var max = narr.indexOf(Math.max(...narr));
    return arr[max];
}
console.log(longest(['a', 'aa', 'aaa', 'aaaaa','aaaa']))
console.log(longest(["Apple", "Orange", "Banana", "Watermelon"]));

// 84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function next(str){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var nstr = str.split("");
    for(var i=0; i<nstr.length; i++){
        for(var j=0; j<25; j++){
            if(nstr[i] === alphabet[j]){
                nstr[i] = alphabet[j+1];
                break;
            }
            else if(nstr[i] === alphabet[25]){
                nstr[i] = alphabet[0];
            }
         }
    }
    nstr = nstr.join("");
    return nstr;
}
console.log(next("abcdxyz"));


// 85. Write a JavaScript code to divide an given array of positive integers into two parts. 
// First element goes to first part, second element goes to second part, and third element goes to first part and so on.
// Now compute the sum of two parts and store into an array of size two.

function splitsum(arr){
    var length = arr.length; 
    var result = [0,0];
    for(var i=0; i<length; i++){
        if(i%2 === 0){
            result[0] += arr[i];
        }
        else
        {
            result[1] += arr[i];
        }
    }
    return result;
}
console.log(splitsum([1,2,3,4]));
console.log(splitsum([6,5,4,3,2,1]));

// my code to split array into odd and even

var arr = [1,2,3,4];
var length = arr.length;
var oarr = [];
var earr = [];
var j = 0, k = 0;
for(var i = 0; i < length; i++){
    if((arr.indexOf(arr[i])+ 1) % 2 === 0){
        earr[j] = arr[i];
        j++;
    }
    else{
        oarr[k] = arr[i];
        k++;
    }
}


// 86. Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angle(a){
    if(a === 180){
        return "The given angle is a Straight Angle";
    }
    else if(a === 90){
        return "The given angle is a Right Angle";
    }
    else if(a > 0 && a < 90){
        return "The given angle is an Acute Angle";
    }
    else if(a > 90 && a <180){
        return "The given angle is an Obtuse Angle";
    }
    else{
        return "The given angle is above 180";
    }
}
console.log(angle(45));
console.log(angle(90));
console.log(angle(145));
console.log(angle(180));
console.log(angle(245));


// 87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. 
// The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

function same(a1,a2){
    if(a1.length === a2.length){
        var b1 = a1;
        var b2 = a2;
        a1 = a1.concat().sort(function(a, b){return a-b});
        a2 = a2.concat().sort(function(a, b){return a-b});
        var count = 0;
        var swap = 0;
        for(var i=0; i<a1.length; i++){
            if(a1[i] === a2[i]){
                count++;
            }
        }
        if(count === a1.length){
            for(var j=0; j<b1.length; j++){
                if(b1[j] !== b2[j]){
                    swap++;
                }
            }
            if(swap === 0){
                return "The given arrays are exactly similar";
            }
            else if(swap === 2){
                return "The given arrays are similar as it needs atmost one swapping";
            }
            else if(swap > 2){
                return "The given arrays are different as it needs more than one swapping";
            }
        }
        else{
            return "The given arrays have different elements";
        }
    }
    else{
        return "The given arrays are of different lengths";
    }
}

console.log(same([1,2,3],[1,2,3]));
console.log(same([10,20,30], [10,20,30]))
console.log(same([10,20,30], [30,10,20]))
console.log(same([10,20,30,40], [10,30,20,40]))


// 88. Write a JavaScript program to check whether two given integers are similar or not,
// if a given divisor divides both integers and it does not divide either.

function check(n1,n2,d){
    if(((n1%d === 0) && (n2%d === 0)) || ((n1%d !== 0) && (n2%d !== 0))){
        return "The given integers are similar";
    }
    else{
        return "The given integers are not similar";
    }
}

console.log(check(10, 25, 5));
console.log(check(10, 20, 5));
console.log(check(10, 20, 4));


// 89. Write a JavaScript program to check whether it is possible to replace 
// $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

function check_arithmetic_Expression(x, y, z) {
    return x + y == z || x * y == z || x / y == z || x - y == z;
  }
  
  console.log(check_arithmetic_Expression(10, 25, 35));
  console.log(check_arithmetic_Expression(10, 25, 250));
  console.log(check_arithmetic_Expression(30, 25, 5));
  console.log(check_arithmetic_Expression(100, 25, 4.0));
  console.log(check_arithmetic_Expression(100, 25, 25));


// 90. Write a JavaScript program to find the kth greatest element of a given array of integers.

function great(arr,k){
    arr = arr.sort(function(a, b){return a-b});
    return arr[k-1];
}

console.log(great([1,2,10,21,34], 3));