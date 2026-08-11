const user = {
  name: 'John',
  price: 100,

  welcomeMessage: function () {
    console.log(`Welcome ${this.name} to our store!`);
  }
}

// user.welcomeMessage();
// user.username = 'sam';
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = 'sam';
//     console.log(this.username);
//     // console.log(this)
// }

// chai()

// const chai = function () {
//   let username = 'sam';
//   console.log(this.username);
//   // console.log(this)
// }

// chai()

// const chai = () => {
//   let username = 'sam';
//   console.log(this);
//   // console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(addTwo(10, 20));

//implicit return
// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(10, 20));

//object return
const addTwo = (num1, num2) => ({username: "divya"})
console.log(addTwo(10, 20));


//explicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(10, 20));

//arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(10, 20));

