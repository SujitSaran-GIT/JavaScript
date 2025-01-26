// Map method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
// Example

let numbers = [1,2,3,4,5]
// double the array
let doubles = numbers.map(num => num * 2)
console.log(doubles)
let square = numbers.map(num => num * num)
console.log(square)

let peoples = [
    {
        firstName : "SUJIT",
        secondName : "SARAN",
    },
    {
        firstName : "SUMIT",
        secondName : "SATAPATHY",
    },
    {
        firstName : "BIRAJA",
        secondName : "MOHAPATRA",
    }
]

const results = peoples.map((person) => {
    return [person.firstName,person.secondName]
})
console.log(results)


// Assignments
// create array with random numbers
const numberarray = [1,2,3,4,5,6]
// map over each item in that array, & mutiply each item by 10
const newarray = numberarray.map((num) => num * 10)
console.log(newarray)

// Difference between forEach and map method
// In JavaScript, both the forEach and map methods are used to iterate over arrays. However, they serve different purposes and behave differently. Here's a detailed comparison:

// forEach Method
// Purpose: Executes a provided function once for each array element. It is typically used for performing side effects like logging or updating variables.
// Returns: undefined.
// Use case: When you need to loop through an array and perform operations without needing a new array.

const arr = [1, 2, 3];
console.log(arr)
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
console.log(arr)
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3

// Key Points:
// It does not return a new array.
// It is used for side effects like console logs, updating DOM, or modifying external variables.
let sum = 0;
const nums = [1, 2, 3];
nums.forEach(num => sum += num);
console.log(sum); // Output: 6


// map Method
// Purpose: Creates a new array by applying a provided function to each element in the original array.
// Returns: A new array containing the results of the function applied to each element.
// Use case: When you want to transform or manipulate each element and get a new array with those results.

const array = [1, 2, 3];
const squared = array.map(value => value * value);
console.log(squared); // Output: [1, 4, 9]

// Key Points:
// It returns a new array and does not modify the original array.
// Ideal for transformations or computations where you need the results.

// Feature	                  forEach	                                map
// Return Value	              undefined	                                A new array
// Purpose	                  For side effects (logging, updating)	    For transformations (creating new array)
// Modifies Original	      No (unless the callback modifies it)	    No
// Chaining	                  Cannot be chained	                        Can be chained