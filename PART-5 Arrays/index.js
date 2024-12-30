// Arrays In JavaScript
const myList = [10,20,30,40]
console.log(myList)
console.log(typeof myList)

const strArray = ["Apple","Orange","Grapes","Mango"]
console.log(strArray)
console.log(typeof strArray)
console.log(strArray[0])

// Nested Array
const nestedArray = ["One",["Two","Three"],"Four"]
console.log(nestedArray)
console.log(nestedArray[1])
console.log(nestedArray[1][0])

// Assignments
// 1. Create array name favSingers store 3 favorite singers
const favSingers = ["Jubin Nautiyal","Arjit Singh","Himesh Rashmiya"]
// 2. log that first singler into the array
console.log(favSingers[0])
// 3. create array name favNumbers & store 4 fav numbers
const favNumbers = [1,2,3,4]
// 4. create array name mixedArray store ["String",["otherArray"],123,true] 
let mixedArray = ["String",["OtherArray"],123,true]
// 5. Now access each item in that array by using [] notation
console.log(mixedArray[1][0])

const arrayOne = ["Jajpur","Bhadrak","Kendrapada"]
const arrayTwo = ["Cuttack","Khorda","Ganjam"]

// Array Methods
// ----------------
// concat()-: Joins two or more arrays and returns a result
const arrayThree = arrayOne.concat(arrayTwo)
console.log(arrayThree," ",arrayThree.length)

// includes()-: checks if an array contains a specified element
console.log(arrayThree.includes("Jajpur"))
console.log(arrayThree.includes("Gajapati"))

// join()-: used to combine the elements of an array into a single string. The elements are concatenated using a specified separator, or a comma (,) by default if no separator is provided.
console.log(arrayThree.join("_"))
console.log(arrayThree)

// indexOf()-: Returns the index of the first occurrence of a specified element.
console.log(arrayThree.indexOf("Jajpur"))

// lastIndexOf(): Returns the index of the last occurrence of a specified element.
console.log(arrayTwo.lastIndexOf("Khorda"))

// find(): Returns the first element that satisfies a provided testing function.
// console.log(arrayThree.find())

// ADDING AND REMOVING ELEMENTS
// -------------------------------
// push()-: adds a new element to the end of an array and returns the new length of an array
console.log(arrayThree.push("Gajapati"))
console.log(arrayThree)

// unshift()-: adds a new element to the beginning of an array and returns the new length of an array
console.log(arrayThree.unshift("Sundargarh"))
console.log(arrayThree)

// pop()-: remove the last element of an array and returns the removed element
console.log(arrayThree.pop())
console.log(arrayThree)

// shift()-: removes the first element of an array and returns the removed  element
console.log(arrayThree.shift())
console.log(arrayThree)

// sort()-: sorts the elements alphabetically in strings and in ascending order
console.log(arrayThree.sort())

// reverse(): Reverses the order of elements in an array.
console.log(arrayThree.reverse())

// slice()-: selects the part of an array and returns the new array
console.log(arrayThree.slice(0,5))
console.log(arrayThree)

// splice()-: removes or replaces existing elements and/or adds new elements
console.log(arrayThree.splice(0,3))
console.log(arrayThree)

