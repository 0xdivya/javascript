let myDate = new Date();

console.log(`toString()           : ${myDate.toString()}`);
console.log(`toISOString()        : ${myDate.toISOString()}`);
console.log(`toJSON()             : ${myDate.toJSON()}`);
console.log(`toLocaleDateString() : ${myDate.toLocaleDateString()}`);
console.log(`toLocaleTimeString() : ${myDate.toLocaleTimeString()}`);
console.log(`toLocaleString()     : ${myDate.toLocaleString()}`);
console.log(`toUTCString()        : ${myDate.toUTCString()}`);

console.log(typeof myDate);

//month 0 se start hota h
let mycreatedDate = new Date(2023,0,23);
console.log(mycreatedDate.toDateString())

let mycreatedDate1 = new Date("2023-01-23");
console.log(mycreatedDate1.toDateString())

let mytimeStamp = Date.now();
console.log(mytimeStamp)
console.log(mycreatedDate.getTime())

//timestamp in seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes());
console.log(newDate.getMonth());


newDate.toLocaleString('default', {
    weekday: 'long',
})