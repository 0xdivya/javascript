const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'

}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "cpp", "rb", "py"]

for(const key in programming){
    console.log(key)
}

//maps
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("CA", "Canada")
map.set("IN", "India")

for (const key in map) {
    console.log(key)
}