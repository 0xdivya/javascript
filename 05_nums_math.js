const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherBalance = 100.8345   
console.log(otherBalance.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"))


//*****************Maths****

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.7))

console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200))

// 0 to 1 random number
console.log(Math.random())

// 1 to 10 random number
console.log(Math.floor(Math.random()*10)+1)   

const min = 10
const max = 20

// 10 to 20 random number
//+1 to avoid the 0 case
//+min to bring number in the range of min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
