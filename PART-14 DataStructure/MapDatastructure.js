// Map is a built in data structure in js intriduced in ES6 that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences

// Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to any data type as keys, including numbers, booleans, objects, and other Map instances

// Maintains insertion order: Map preserves the order of key value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order

// Iteration: Map provides built-in methods for easy iteration over its elements

// Examples

const map = new Map()
const keyOne = "string"
const keyTwo = {}
const keyThree = function(){}
map.set(keyOne,"Value of key One")
map.set(keyTwo,"Value of key two")
map.set(keyThree,"Value of key three")
console.log(map)
console.log(map.size)
console.log(map.keys())
console.log(map.values())
// console.log(map.delete(keyTwo))
console.log(map)

// using forof loop
for (const [key,value] of map) {
    console.log(`${key} == ${value}`)
}

for (const key of map.keys()) {
    console.log(key)
}

for (const value of map.values()) {
    console.log(value)
}

// Assignment
// Create a new map
const letters = new Map()
// set these properties ("a","b","c")
// set these values (1,2,3)
letters.set("a",1)
letters.set("b",2)
letters.set("c",3)
// Get "a" from that map
console.log(letters.get("a"))
// check the size of that map
console.log(letters.size)
// Delete the property "b" & then check the size
console.log(letters.delete("b"))
console.log(letters.size)