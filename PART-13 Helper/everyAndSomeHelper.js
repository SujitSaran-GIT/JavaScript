// The every() and some() are two built-in array methods in javascript that allows you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each of the array

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if an element fails the condition

const peoples = ['huxn','jordan','alex']
console.log(peoples.every(people => people.length == 4))

const people = ['huxn','jord','alex']
console.log(people.every(people => people.length == 4))

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true if at least one element, and false if no element passes the condition

console.log(people.some(people => people.length == 4))
console.log(people.some(people => people.length == 3))

const songs = [
    {
        name : "Lucky You",
        duration : 4.00
    },
    {
        name : "Just Like You",
        duration : 3.00
    },
    {
        name : "The Search",
        duration : 2.00
    },
    {
        name : "Old Town Road",
        duration : 1.50
    },
    {
        name : "The Rock",
        duration : 5.00
    }
]
const everyHelper = songs.every(song => song.duration > 2)
const someHelper = songs.some(song => song.duration > 2)
console.log(everyHelper , someHelper)


let products = [
    {
        name : "Checkers",
        category : "Toys"
    },
    {
        name : "Harry Potter",
        category : "Books"
    },
    {
        name : "Iphone",
        category : "Electronics"
    },
    {
        name : "Learn PHP",
        category : "Books"
    },
]

// ES6 (Every and Some helper)
const allProductsBooks = products.every(product => product.category !== "Books")
const someProductsBooks = products.some(product => product.category !== "Books")
console.log(allProductsBooks)
console.log(someProductsBooks)

// ES5
// ----
// let allProductsBooks = true
// let someProductsBooks = false

// for (let index = 0; index < products.length; index++) {
//     if (products[index].category !== "Books") {
//         allProductsBooks = false
//     } else {
//         someProductsBooks = true
//     }
// }

// console.log(allProductsBooks)
// console.log(someProductsBooks)