const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myTotal = myNums.reduce( function (acc, currval){
    console.log(`acc is ${acc} and currval is ${currval}`)
    return acc + currval
}, 0)

const myTotal2 = myNums.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal2)

const shoppingCart = [
    {
        item : "js course",
        price : 100
    },
    {
        item : "c++ course",
        price : 200
    },
    {
        item : "ruby course",
        price : 300
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)