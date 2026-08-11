//for loop

for(let index = 0; index < 10; index++){
    const element = index
    // if(index === 5){
    //     console.log("index is 5")
    // }
    // console.log(element)
}

// for(let i = 1; i <= 10; i++){
//     console.log(`outer loop ${i}`)
//     for(let j =1; j <= 10; j++){
//         // console.log(`inner loop ${j} and inner index ${i}`)
//         console.log(i + '*' +j + ' = ' + (i * j))
//     }
// }

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length)
for(let i = 0; i < myArray.length; i++){
    //console.log(myArray[i])
}

//break and continue
for(let index = 0; index < 20; index++){
    if(index === 5){
        console.log("Detected 5")
        break
    }
    console.log(`Value of index ${index}`)
}

for(let index = 0; index < 20; index++){
    if(index === 5){
        console.log("Detected 5")
        continue
    }
    console.log(`Value of index ${index}`)
}