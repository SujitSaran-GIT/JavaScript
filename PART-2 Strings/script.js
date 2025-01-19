// Template strings, also known as Template literals, are a feature in javascript that allows you to create strings with embedded expressions.

// They are denoted by backticks `` instead of single or double quotes. Template strings provide a more flexible and consise way to construct strings, especially when they involve variables or expressions.

console.log('This is some random\
    value')
console.log(`This is some random
    value`)
const firstName = "Sujit"
const lastName = "Saran"
console.log(`${firstName} ${lastName}`)

function info(){
    return `Hello my name is sujit saran`
}
info()
console.log(`${info}`)

// Assignment

console.log(`The quick
brown fox
jumps over
the lazy dog`)

const fname = "SUJIT"
const lname = "SARAN"
console.log(`${fname} ${lname}`)