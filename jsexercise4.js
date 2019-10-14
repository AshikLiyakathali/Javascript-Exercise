// 31. Write a JavaScript program to find the largest of three given integers.

function largest(a,b,c) {
    if (a===b && a===c) {
        console.log(a, "is the largest");
    }
    else if (a===b && a>c || a===c && a>b) {
        console.log(a, "is the largest");
    }
    else if (a===c && b>a)
    {
        console.log(b, "is the largest");
    }
    else if (a===b && c>a)
    {
        console.log(c, "is the largest");
    }
    else{
        (a>b) ? ((a>c) ? console.log(a, "is the largest") : console.log(c, "is the largest")) : ((b>c) ? console.log(b, "is the largest") : console.log(c, "is the largest"))

    }
 }
 largest(1,1,1);
 largest(1,2,3); 
 largest(2,6,4); 
 largest(9,6,3); 
 largest(10,10,30);
 largest(20,40,20);
 largest(60,40,40);


 // 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function near(a,b) {
    var diff1 = 100 - a;
    var diff2 = 100 - b;
    if(diff1 === diff2) {
        console.log(a, "is the nearest to 100");
    }
    else
    {
        (diff1 < diff2) ? console.log(a, "is the nearest to 100") :  console.log(b, "is the nearest to 100"); 
    }
}
near(90,80);
near(70,80);
near(10,10);


// 33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.

function range(a, b) {
    return (((a >= 40 && a <= 60 || a >= 70 && a <= 100)) && ((b >= 40 && b <= 60 || b >= 70 && b <= 100)))
}
console.log(range(45,75));
console.log(range(35,65));
console.log(range(45,65));
console.log(range(35,75));


// 34. Write a JavaScript program to find the larger number from the two given positive integers.
// The two numbers are in the range 40..60 inclusive.

function large(a,b) {
    if ((a >= 40 && a <= 60 || b >= 40 && b <= 60)) {
        if(a === b) {
            console.log(a, "is the larger number");
        }
        else if(a > b) {
            console.log(a, "is the larger number");
        }
        else{
            console.log(b, "is the larger number");
        }
    }
}
large(50,50);
large(40,60);
large(60,40);


// 35. Write a JavaScript program to check a given str contains 2 to 4 numbers of a specified character.

function check(str, char){
    var count = 0;
    var length = str.length;
    for(var i = 0; i < length; i++) {
        if(char === str[i]){
            count = count + 1;
        }
    }
    if(count > 1 && count < 5){
        console.log("True: The string contains",count, "number of specified character")
    }
    else{
        console.log("False: The string contains less than two or more than five number of specified character")
    }
}

check("AAAAA", "A");
check("ABABABAB", "A");
check("ABCABC", "A");
check("ABC", "A");
check("BC", "A");



// 36. Write a JavaScript program to check if the last digit of the three given positive integers is same.

function check(a,b,c){
    return((a%10 === b%10 && a%10 === c%10))
}
console.log(check(15,15,15));
console.log(check(15,15,16));
console.log(check(15,16,17));


// 37. Write a JavaScript program to create new str with first 3 characters are in lower case from a given str. 
// If the str length is less than 3 convert all the characters in upper case.

function upper_lower(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    return front_part + back_part;
  }
  console.log(upper_lower("Python"));
  console.log(upper_lower("Py"));
  console.log(upper_lower("JAVAScript"));


// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

function exam_status(totmarks,is_exam)
  {
  if (is_exam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));


// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function sortaSum(x, y) 
 {
  const sum_nums = x + y;
  if (sum_nums >= 50 && sum_nums <= 80) {
    return 65;
  }
  return 80;
}

console.log(sortaSum(30,20));
console.log(sortaSum(90,80));


// 40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.

function check8(x, y) {
    if (x == 8 || y == 8) {
      return true;
    }
  
    if (x + y == 8 || Math.abs(x - y) == 8)
    {
      return true;
    }
  
    return false;
  }
  
  console.log(check8(7, 8));
  console.log(check8(16, 8));
  console.log(check8(24, 32));
  console.log(check8(17, 18));


