// Symbols in javascript
// ----------------------
/*
Symbol is a unique and immutable primitive data type introduced in ES6. A symbol is often used as an identifier for object properties to avoid potential naming conflicts

Unlike strings or numbers, symbols are guaranted to be unique. When you create a symbol, it is unique and can not be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.
*/

const symbol = Symbol()
console.log(typeof symbol)
console.log(symbol)

// Comparing symbols
const mysymbol1 = Symbol()
const mysymbol2 = Symbol("Name is empty")
const mysymbol3 = Symbol("Name is empty")
console.log(mysymbol1==mysymbol2)
console.log(mysymbol1==mysymbol3)

const obj = {}
obj[mysymbol1] = "Value1"
obj[mysymbol2] = "Value2"

console.log(obj)

const first = Symbol("name")
const second = Symbol("name")

const sujit = {}
sujit.age = 23
sujit["gender"] = "male"
sujit["gender"] = "female"
sujit[first] = "Sumit"
sujit[second] = "Saran"
console.log(sujit)

// Assignment
// 1. Create a symbol provide a value of "foo"
const sym = Symbol("foo")
// 2. Check the type of that symbol
console.log(typeof sym)
// 3. Create a empty object
const object = {
    firstName : "SUJIT",
    secondName : "SARAN",
    age : 23
}
// 4. Store symbol as the property to that object
object[Symbol()] = "Some values of the foo"
console.log(object)
// 5. Iterate over Symbol
for (const key in object) {
    console.log(key)
}