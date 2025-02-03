// reduce() method
// ------------------
// The reduce() method applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform calculations or aggregations on array elements and simplify the array into a single value

// Example

let array = [1,2,3,4,5]
const sum = array.reduce((previousValue,currentValue) => {
    console.log(`Previous: ${previousValue}`)
    console.log(`Current: ${currentValue}`)
    return previousValue+currentValue
}, 0)
console.log(sum)

// calculations
const peoples = [
    {
        name : "SUJIT",
        age : 23
    },
    {
        name : "SUMIT",
        age : 19
    },
    {
        name : "BIRAJA",
        age : 22
    }
]

// Oldest guy in the array
const check = peoples.reduce((previousValue,currentValue) => (currentValue.age > previousValue ? currentValue.age : previousValue) , 0)
console.log(check)

const words = [
    "apple","banana","orange","apple","grape","banana","orange"
]

const wordFrequency = words.reduce((frequencyMap,word) => {
    frequencyMap[word] = (frequencyMap[word] || 0+1)
    return frequencyMap
}, {})
console.log(wordFrequency)

// Assignment
/*
Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array

Write the calculateProduct function using the reduce() method to achieve this task

something like this
const numbers = [2,3,4,5]

const product = calculateProduct(numbers)
console.log(product)
*/

const numbers = [2,3,4,5]
const product = numbers.reduce((previousValue,currentValue) => {
    return (previousValue * currentValue)
}, 1)
console.log(product)