// for each helper

// When we call the forEach helper we pass in anonymous callback function
// This function gets called one time for every element in the array. Whatever is inside the function that logic happens

// Examples

const colors = ['teal','blue','red','green']
for(let i = 0;i<colors.length;i++){
    console.log(colors[i])
}
colors.forEach(element => {
    console.log(`Element:${element}`)
})
colors.forEach((color) => {
    console.log(`Colors:${color}`)
})

const words = ["hello","bird","table","football","pipe"]
const capWords = words.forEach((word,index,arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1)
})
console.log(words)

let name = "SUJITSARAN"
console.log(name.substring(1,6))

// Create an array of numbers
const numbers = [1,2,3,4,5,6,7,8,9,10]
// Create a variable to hold the sum
let sum = 0
// Create the adder function which takes the parameter of number & add that with sum variable
function adder(numbers){
    sum = sum+numbers
}

// Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
numbers.forEach(adder)
// Print the sum variable
console.log(sum)
