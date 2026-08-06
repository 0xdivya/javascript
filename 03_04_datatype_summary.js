// two type primitive and non- primitive
// primitive: number, string, boolean, null, undefined, symbol, bigint 7 types --> call by value


// non-primitive: object, array, function 3 types --> call by reference


//javascript is a dynamically typed language, which means you don't have to declare the data type of a variable when you create it. The data type is determined automatically based on the value assigned to the variable.

const scroll = 100; // number   
const score = 100.3
const islooking = true; // boolean  
const outside = null; // null
let useremail;

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id==anotherId)

const bigNumber = 1234567890123456789012345678901234567890n; // bigint

//non-primitive data types
// arrray, objects, functions

const heros = ['shaktiman', 'naagraj', 'doga', 'batman']; // array

let myobj = {
    name: 'shaktiman',
    age: 30,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof score)