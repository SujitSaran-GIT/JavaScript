// Functions In JavaScript
// ------------------------
// A function is ablock of code that performs a specific task
// Function makes the code reusable. you can declare it once and use it multiple times
// Function makes the program easier as each small task is divided into a function .
// Functio increases readability
// DRY - Don't Repeat yourself
// function name(parameter) {....}

// ------------------------------------------------------
// Creating function
// --------------------
// Function declaration
function greet(){
    console.log("Hello world")
}
// function call
greet()

function sayHello(dontcallme){
    console.log(`Say Me Hello world ${dontcallme}`)
}
sayHello("Sujit")
sayHello("Sumit")

// return keyword in function
// -----------------------------
function name(x,y){
    return x+y
}
console.log(name(10,20))
console.log(name(100,200))

// Assignment
/*
1. Create function name (myFunction)
2. This function will take 2 parameters
3. Any number we pass as argument it will multiply that number
4. As argument pass your favorite numbers
5. log the value
*/
function myFunction(number,multiple){
    return number*multiple
}
const result = myFunction(10,20)
console.log(result)


// Function Declaration
function sayMyName(username){
    console.log(`my name is ${username}`)
}
sayMyName("Sujit")

// Function Expression
const greetings = function (user){
    console.log(`Hello ${user}`)
}
greetings("John")

// Callback function in javascript
// --------------------------------
// When we provide function as an argument to other function that function is known as callback function
function showCallFunc(fn){
    const name = "Sujit"
    fn(name)
}
showCallFunc(function fn(name){
    console.log(name)
})

function welcome(fname,cb){
    console.log(`Hello ${fname}`)
    cb()
}

welcome("Sujit",function cb(){
    console.log("my name is sujit")
})

// Assignment 
/*
1. Create a function name showCallFunction
2. pass fn as parameter
3. Inside that function, create variable which holdes value of 10
4. Pass that value to the callback function
5. Now create callback function & print that value which you pass as parameter to the callback func
*/
function showCallFunction(fn){
    const value = 100
    fn(value)
}
showCallFunction(function (value){
    console.log(value)
})


// Scope In JavaScript
// -------------------
/*
 * Scope in javascipt refers to the current context of code, which determines the accessibility of variables to javascript
 * There are two types of scopes in JavaScript
 * Global scope variables are those declared outside of a block
 * Local scope variables are those declared inside of a block
*/

let message = "Hi"   // Global Variable
{
    let allMessage = message.concat(" Sujit")  // Local variable
    console.log(allMessage)
}
console.log(message)