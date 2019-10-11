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

