const name = "Divya"
const repoCount = 50

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    divya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://divya.com/hello.html"

console.log(url.replace("https", "http"));

url.includes("divya") ? console.log("yes") : console.log("no");

//splitting the string into array
console.log(gameName.split('-'));