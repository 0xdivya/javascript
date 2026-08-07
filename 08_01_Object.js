//singleton  --> constructore se banaega toh
// literal se nhi banta singleton

//symbol
const mySym = Symbol("key1")

//object literals
const JsUser = {
    "full name" : "Divya Choudhari",
    //mySym : "key1", //typeof --> string datatype 
    [mySym] : "key1", // typeof --> symbol datatype
    age: 22,
    location: "Gondia",
    email: "divya@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "divyachoudhari@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "choudharidivya83@gmail.com"
// console.log(JsUser)

//function
JsUser.greeting = function(){
    console.log("Hello JS user");

}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

