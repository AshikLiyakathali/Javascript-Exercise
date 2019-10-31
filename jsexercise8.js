// 71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. 
// The array length must be greater or equal to 1.

function firstlast(arr){
    if((arr.length >= 1) && ((arr[0] === 1) || (arr[arr.length-1] === 1))){
        return true;
    } 
    else{
        return false;
    }
}    
console.log(firstlast([1,2,3]));
console.log(firstlast([1]));
console.log(firstlast([]));
console.log(firstlast([2,3,1]));
console.log(firstlast([2,3,4]));
console.log(firstlast([1,2,3,1]));


// 72. Write a JavaScript program to check if the first 
// and last elements are equal of a given array of integers length 3.

function check(arr){
    return (arr[0] === arr[arr.length-1]);
}
console.log(check([1,2,3]));
console.log(check([1,2,1]));


// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3. 

function rev(arr){
    return arr.reverse();
}
console.log(rev([1,2,3]));
console.log(rev([4,5,6]));


// 74. Write a JavaScript program to find the larger value between the first or last and 
// set all the other elements with that value. Display the new array.

function max(arr){
    if(arr[0] >= arr[arr.length-1]){
        for(var i=0; i<arr.length; i++){
            arr[i] = arr[0];
        }
    }
    else{
        for(var i=0; i<arr.length; i++){
            arr[i] = arr[arr.length-1];
        }
    }
    return arr;
}
console.log(max([1,2,3]));
console.log(max([3,2,1,6]));
console.log(max([6,2,3,6]));
console.log(max([5,2,3,4]));

// 75. Write a JavaScript program to create a new array 
// taking the middle elements of the two arrays of integer and each length 3. 

function mid(arr1,arr2){
    if((arr1.length === 3) && (arr1.length === arr2.length)){
        return [arr1[1],arr2[1]];
    }    
}
console.log(mid([1,2,3],[4,5,6]));


// 76. Write a JavaScript program to create a new array taking the first and last elements 
// from a given array of integers and length must be greater or equal to 1. 

function merge(arr){
    if(arr.length >= 1){
        return [arr[0],arr[arr.length-1]];
    }    
}
console.log(merge([1,2,3,4,5]));


// 77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.

function find(arr){
    if(arr.length === 2){
        return (arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3);
    }    
}
console.log(find([2,4]));
console.log(find([1,4]));
console.log(find([1,3]));
console.log(find([3,4]));


// 78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.

function notfind(arr){
    if(arr.length === 2){
        return ((arr[0] != 1 && arr[1] != 3) && (arr[1] != 1 && arr[0] != 3));
    }    
}
console.log(notfind([2,4]));
console.log(notfind([1,4]));
console.log(notfind([1,3]));
console.log(notfind([3,4]));


// 79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. 
// The array length should be 0, 1, or 2.

function twice(arr){
    if((arr.length <= 2) && ((arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40))){
        return true;
    }
    else{
        return false;
    }
}

console.log(twice([30, 30]));
console.log(twice([40, 40]));
console.log(twice([20, 20]));
console.log(twice([30]));

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers.
// The array length should be at least 1.

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
console.log(swap([1,2,3,4]));