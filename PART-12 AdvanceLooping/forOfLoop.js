// for....of Loop
// ---------------
// The for..of loop in javascript is a modern iteration statement introduced in ES6 that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more
// It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone

// for(variable of iterable) {...}

// Example

let peoples = ["SUJIT","SUMIT","BIRAJA","MANISHA"]
for(let people of peoples){
    console.log(peoples)
}
for (const people of peoples) {
    console.log(people)
}

const text = "HELLO"
for (const element of text) {
    console.log(element)
}

// Iterate through the array and log the values using for of loop
const array = ["a","b","c"]
console.log(array)
for (const element of array) {
    console.log(element)
}


// What is the difference between forin and forof loop in javascript with examples
// ANS

// In JavaScript, the for...in and for...of loops are used for iterating, but they differ significantly in their use cases and behavior.

// for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object (keys or indices). It works for objects and arrays, but it is generally intended for objects.

// Use case: Iterating over object properties or array indices.
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}
// Output:
// Key: a, Value: 1
// Key: b, Value: 2
// Key: c, Value: 3

const arr = [10, 20, 30];

for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
// Output:
// Index: 0, Value: 10
// Index: 1, Value: 20
// Index: 2, Value: 30

// Caution: for...in iterates over all enumerable properties, including inherited properties, if not filtered out.

// for...of Loop
// The for...of loop is used to iterate over iterable objects such as arrays, strings, Maps, Sets, etc. It iterates over the values of the iterable, not the keys.

// Use case: Iterating over the values of iterable objects.

const arrays = [10, 20, 30];

for (const value of arrays) {
    console.log(`Value: ${value}`);
}
// Output:
// Value: 10
// Value: 20
// Value: 30

const str = "hello";

for (const char of str) {
    console.log(char);
}
// Output:
// h
// e
// l
// l
// o

// Example with Map:
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}
// Output:
// Key: a, Value: 1
// Key: b, Value: 2
// Key: c, Value: 3

// When to Use:
// Use for...in for iterating over objects and accessing property keys.
// Use for...of for iterating over the values of arrays, strings, or other iterable objects.