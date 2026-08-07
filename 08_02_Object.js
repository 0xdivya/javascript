//singletone object
//const tinderUser = new Object()

//non - singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email : "some@email.com",
    fullname: {
        userfullname: {
            firstname : "divya",
            lastname : "choudhari"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))




