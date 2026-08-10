//global scope
let a = 1;
const b = 2;
var c = 3;

//block scope
if (true) {
    let a = 4;
    const b = 5;
    var c = 6;
    // console.log("I am in block scope", a, b, c);
}

// console.log(a, b, c);

function one(){
    const username = "divya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    two()
}
// one()

if(true){
    const username = "divya"
    if(username === "divya"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
//console.log(username)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1;
}

console.log(addone(5));

//Cannot access 'addTwo' before initialization
//addTwo(5);

const addTwo = function(num){
    return num + 2;
}

addTwo(5);
