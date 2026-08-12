//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['thor', 'spiderman', 'ironman', 'hulk']

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0])
// console.log(myHeros[2])

//array copy operations --> always make a shallow copy
//shallow copy of an object is a copy whose properties share the same refrence point
//deep copy of an object is a copy whose properties do not share the same refrence point

//array methods

myArr.push(6) //add element at the end of the array
myArr.push(7, 8)
// console.log(myArr)
myArr.pop() //remove last element of the array
// console.log(myArr)

myArr.unshift(9) //add element at the start of the array
// console.log(myArr)
myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9));
//console.log(myArr.index(9));
//console.log(myArr.index(3));

const newArr = myArr.join
// console.log(myArr)
// console.log(newArr)

//slice method, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) //slice(start, end) --> end is not included

console.log(myn1)
console.log("B :", myArr)

const myn2 = myArr.splice(1,3)
console.log("C :", myArr)
console.log(myn2)