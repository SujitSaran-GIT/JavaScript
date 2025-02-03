// Set is a built in data structure introduced in ES6 that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a set

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value
const initialValues = [1,2,3,4,2,1,3]
const set = new Set(initialValues)
console.log(set)

const fruits = new Set()
fruits.add("apple")
fruits.add("orange")
fruits.add("banana")
fruits.add("grapes")
console.log(fruits)
console.log(fruits.has("Banana"))
console.log(fruits.has("banana"))

for (const item of fruits) {
    console.log(item)
}

fruits.delete("banana")
console.log(fruits)
fruits.clear()
console.log(fruits)

// Assignment
// 1. create a set name (letters)
// 2. Add (a,b,c) as values
const letters = ['a','b','c','d']
const sets = new Set(letters)
// 3. Iterate over set & log the values
for (const element of sets) {
    console.log(element)
}