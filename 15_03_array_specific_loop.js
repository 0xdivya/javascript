// for of

const arr = [1, 2, 3, 4, 5]

for(const num of arr) {
    // console.log(num)
}

const greetings = "hello world"
for(const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//maps
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("CA", "Canada")
map.set("IN", "India")

console.log(map)
for(const [key, value] of map) {
    console.log(`${key} :- ${value}`)
}

