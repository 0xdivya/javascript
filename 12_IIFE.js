// Immediately Invoked Function Expression
//jo function jldi se executes ho jayega
//global scope ke pollution se problem hoti h kayi baar toh jo global scope ke variables h vaha declaration ke pollution ko hatane ke liye IIFE ka use kiya
(function chai(){
    //named IIFE
    console.log(`DB CONNECTION ESTABLISHED`);
})();

( (name) =>{
    //unnamed IIFE
    console.log(`Hello ${name}`);
})('John');