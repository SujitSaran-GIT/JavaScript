// Find Helper in javascript
// The find() method is another built-in array helper in javascript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found

let peoples = [
    {
        firstName : "SUJIT",
        age: 23 
    },
    {
        firstName : "SUMIT",
        age: 22
    },
    {
        firstName : "BIRAJA",
        age: 23
    }
]

const res = peoples.find(person => person.age == 23)
console.log(res)
const resu = peoples.filter(person => person.age == 23)
console.log(resu)

const post = [
    {
        id : 1,
        content : "Good Post"
    },
    {
        id : 2,
        content : "Funny"
    },
    {
        id : 3,
        content : "Lovely"
    },
    {
        id : 4,
        content : "Bad Post"
    },
]
// Print the content is funny
const result = post.find(check => check.content == "Funny")
console.log(result)

const ages = [3,10,18,20]
const agefind = ages.find(age => age > 18)
console.log(agefind)

// Example
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

let product = products.find(produ => produ.category === "Books")
console.log(product)

// for (let index = 0; index < products.length; index++) {
//     if (products[i].category==="Books") {
//         product = products[i]
//         break;
//     }
// }