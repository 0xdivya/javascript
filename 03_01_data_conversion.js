let score = "33ab"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
//"33ab" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 - true
// "" - false
//"divya" - true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)    

//browser console gives you string representation of any data type. It is not a conversion. It is just a representation of the data type.