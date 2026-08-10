function sayMyName(){
    console.log("D")
    console.log("i")
    console.log("v")
    console.log("y")
    console.log("a")
}

// sayMyName()

function addTwoNumbers(number1, number2){ // number1 , number2 --> parameters
    console.log(number1+number2)
}

// addTwoNumbers(3, 7) //(3, 7) --> arguments

//const result = addTwoNumbers(3, 5)

//console.log("Result: ", result) // Result:  undefined

function addTwoNumbers(number1, number2){ 
    // let reault = number1 + number2
    // return result

    return number1+number2
}

const result = addTwoNumbers(3, 5)

console.log("result: ", result)

function loginUserMessage(userName){
    // if(!userName){
    //     console.log("Please enter a username");
    //     return
    // }
    if(userName === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(200, 400, 500,2000))

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject({username: "hitesh", price: 1000})

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))