"use strict"; // treat all JS code as newer version

// alert("hello"); // we are using alert to show message in browser 

console.log(3
    +
    3
)//code readability is not good in this way.

let name = "divya"
let age = 20
let isloggedIn = false

//number type - 2 to the 53
let number = 2 ** 53 - 1

console.log(number);

//bigint type - more than 2 to the 53
let bigNumber = 2 ** 53n - 1n
console.log(bigNumber);

//string type - ""
let string = "hello world"
console.log(string);

//boolean type - true or false
let isloggedIn = true
console.log(isloggedIn);

//null type - empty value, standlone value
let nullVar = null
console.log(nullVar);

//undefined type - value is not assigned
let undefinedVar = undefined
console.log(undefinedVar);

//symbol type - unique and immutable
let symbolVar = Symbol('hello')
console.log(symbolVar);

//object type - key value pair

//typeof null is object
console.log(typeof null);

//typeof undefined is undefined
console.log(typeof undefined);