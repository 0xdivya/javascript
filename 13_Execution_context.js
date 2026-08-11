/*
Javascript  Execution Context
javascript is single threaded
execution context is a stack of function calls
when a function is called, a new execution context is created
the execution context is destroyed when the function returns


global execution context
function execution context
Eval execution context

1st memory creation phase
2nd execution phase

1. global execution --> this
2. memory phase
val1 --> undefined
val2 --> undefined
addnum --> defination
result1 --> undefined
result2 --> undefined

3. execution phase
val1 --> 10
val2 --> 20
addnum --> function(new variable enviornment + execution thread)
    memory phase
         val1 --> undefined
         val2 --> undefined
         total --> undefined

    execution phase
        num1 --> 10
        num2 --> 20
        total --> 30
result1 --> 30
result2 --> undefined
*/

let val1 = 10;
let val2 = 20;

function addnum(num1, num2) {
    total = num1 + num2;
    return total;
}

let result1 = addnum(val1, val2);
let result2 = addnum(10, 20);

console.log(result1);
console.log(result2);




