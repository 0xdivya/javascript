const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) 

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros) //concat method returns a new array, it does not change the existing array
// console.log(allHeros)

//spread operator
const allHeros = [...marvel_heros, ...dc_heros]
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 ,[4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat method returns a new array, it does not change the existing array

console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Divya"))
console.log(Array.from({name: "divya"})) //intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))