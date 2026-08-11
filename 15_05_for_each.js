const coding = ["js", "cpp", "rb", "py"]
// coding.forEach(function (item) {
//     console.log(item)
// })

// coding.forEach(item => {
//     console.log(item)
// })

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})