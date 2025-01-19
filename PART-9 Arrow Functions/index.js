// Arrow functions in javascript
// --------------------------------
// Arrow functions in JavaScript are a more concise way to write functions introduced in ES6 (ECMAScript 2015). They are anonymous functions defined using the => ("fat arrow") syntax. Arrow functions are particularly useful in functional programming and when working with callbacks.

// Traditional Function Expression
var add = function (a, b) {
    return a + b;
};
console.log(add(10, 20))
// Arrow Function Equivalent
var add = (a, b) => {
    return a + b;
};
console.log(add(100, 200))
// Single-line Arrow Function (Implicit Return)
var add = (a, b) => a + b;
console.log(add(300, 400))

// Key features of Arrow function
// 1. Concise Syntax:
// ------------------
// When there is only one expression, you can omit the return keyword and curly braces({}).
   
const square = x => x * x;

// 2. No this Binding:
// -----------------------
// Arrow functions do not have their own this context.Instead, they inherit this from the surrounding scope(lexical scoping).
   
function Person() {
    this.age = 25;
    setTimeout(() => {
        console.log(this.age); // Arrow function inherits 'this' from Person
    }, 1000);
}
const p = new Person(); // Logs: 25
// 3. Implicit Return:
// ----------------------
// When the function body has a single expression, the result is returned implicitly.
    
const greet = name => `Hello, ${name}!`;
console.log(greet("John")); // Output: Hello, John!
// 4. No arguments Object:
// ------------------------
// Arrow functions do not have their own arguments object.Use rest parameters instead.
    
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); // Output: 6

// Examples of Arrow Functions
// 1. Simplifying Callbacks

// Traditional
[1, 2, 3].map(function (x) {
    return x * 2;
});

// Arrow Function
[1, 2, 3].map(x => x * 2);

// 2. Filtering an Array
// -----------------------

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // Output: [2, 4]

// 3. Default Parameters
// =======================

const multiply = (a, b = 1) => a * b;
console.log(multiply(5)); // Output: 5

// When Not to Use Arrow Functions
// ------------------------------------
// As Methods: Arrow functions lack their own this, so they are not suitable for object methods.
const obj = {
    value: 10,
    method: () => console.log(this.value) // 'this' is undefined
};
obj.method(); // Output: undefined

// When Dynamic this is Required:

function Timer() {
    this.seconds = 0;
    setInterval(function () {
        this.seconds++; // `this` refers to global context
    }, 1000);
}

// Fix with Arrow Function
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++; // `this` refers to the Timer instance
    }, 1000);
}

// Advantages
// Shorter and cleaner syntax.
// Lexical scoping of this avoids common pitfalls.
// Useful for inline functions, such as callbacks.

// Disadvantages
// Cannot be used as constructors (new with an arrow function throws an error).
// No this, arguments, or super bindings.