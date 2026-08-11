const userEmail1 = "divya@gmail.com"
const userEmail = []

if (userEmail1) {
    console.log("Got user email")
} else{
    console.log("Don't have user email")
}

//falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("User email is empty")
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10

console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 10
console.log(val1)


val2 = null ?? undefined ?? 10
console.log(val2)

val3 = undefined ?? null ?? 10
console.log(val3)

//ternary operator
// consition ? trueValue : falseValue

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80")