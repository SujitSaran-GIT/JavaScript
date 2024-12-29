// alert("My name is sujit saran")
console.log("My name is sujit saran")
console.error("This is an error statement")
console.warn("This is a warning statement")
console.table({name:"sujit",age:"23"})
console.clear()
console.log("My name is sujit saran")
console.error("This is an error statement")
console.warn("This is a warning statement")
console.table({name:"sujit",age:"23"})

// Numbers
let num = 12.86666
console.log(num)
console.log(typeof(num))

let name = "sujit"
console.log(name)
console.log(typeof(name))

// Basic math
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**5)

let increment = 0
console.log(increment++)
console.log(increment)
console.log(++increment)
console.log(increment)

let decrement = 10
console.log(decrement--)
console.log(decrement)
console.log(--decrement)
console.log(decrement)

// Assignment
// 1. Create variable name (firstFavNum) & store your favorite number
let firstFavNum = 5
// 2. Create variable name (secondFavNum) & store your favorite number
let secondFavNum = 10
// add firstFavNum and secondFavNum
console.log(firstFavNum-secondFavNum)
// substract firstFavNum & secondFavNum
console.log(firstFavNum-secondFavNum)
// multiply firstFavNum from secondFavNum
console.log(firstFavNum*secondFavNum)
// divided firstFavNum & secondFavNum
console.log(firstFavNum/secondFavNum)
// mod of firstFavNum & secondFavNum
console.log(firstFavNum%secondFavNum)
// Power of firstFavNum & secondFavNum
console.log(firstFavNum**secondFavNum)

// Booleans in javascript
console.log(true || false)
let isTrue = true
console.log(!isTrue)

let notANumber = NaN
console.log(notANumber)

// falsy values in javascript
// false, null, undefined, 0, -0, '', "", ``, 
let notDefined = undefined
console.log(notDefined)
notDefined = null
console.log(notDefined)
// What is the difference between undefined and null
// undefined is set by javascript compiler and null is set by user / programmer

// Assignment
// 1. Create a variable name isJsProgramming language & store true as a value
let isJsProgramming = true
console.log(isJsProgramming)
// 2. Craete a variable name isJsHard & store false as a value
let isJsHard = false
console.log(isJsHard)
// 3. Create variable name favNum & store your favorite number inside
let favNum = 5
console.log(favNum)
// 4. Now add favnum with the value of undefined
console.log(favNum+undefined) 

// Comparison operator
// 1. Realtional operator
// 2. Equality operator

// Relational operator(<,>,<=,>=)
console.log(10+10>20)
console.log(10<20)
console.log(20<=30)
console.log(40>=50)

// Equality operators
// Strict Equality (===) type + value
// Strict non-equality (!==) type + value
// lose equality operator (==) 
// not equality operator (!=)

console.log(20==="20")
console.log(20=="20")
console.log(20!=="20")
console.log(20!="20")

// Assignment
// 1. Create variable name firstFavNum & store your favorite number
let firstNumber = 10
// 2. Create variable name secondFavNum & store second fav number
let secondNumber = 20
// 3. check firstFavNum is greater than secondFavNum
console.log(firstNumber>secondNumber)
// 4. check firstFavNum is less than secondfavNum
console.log(firstNumber<secondNumber)
// 5. check firstFavNum is greater than equal to secondFavNum
console.log(firstNumber>=secondNumber)
// 6. check firstFavNum is less than equal to secondFavNum
console.log(firstNumber<=secondNumber)
// 7. check firstFavNum is equal to secondFavNum using strict equality operator
console.log(firstNumber===secondNumber)
// 8. check firstFavNum is equal to secondFavNum using loose equality opeartor
console.log(firstNumber==secondNumber)
// 9. check firstFavNum is not equal to secondFavNum using strict non-equqlity opeartor
console.log(firstNumber!==secondNumber)
// 10. check firstFavNum is not equal to secondFavNum using loose non-equality operator
console.log(firstNumber!=secondNumber)