// Spread Operator (...)
// ----------------
// The spread operator(...) is a new addition to the set of operators in Javascript ES6. 
// It takes in an iterable (e.g array, string, object) and expands it into individual elements. 
// The spread operator is commonly used to make shallow copies of JS Objects. 
// Using this operator makes the code consise and anhances its readability

// Spread operator in case of array, function and objects
// ------------------------------------------------------
function giveMeFour(a,b,c,d) {
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
}

const colours = ["Blue","Green","Red","Black"]
console.log(colours)
giveMeFour(1,2,3,4)
giveMeFour(colours)
giveMeFour(...colours)

const strnums = ["One","Two","Three"]
const moreStrNums = ["Four","Five","Six"]
const concat = [...strnums,...moreStrNums]
console.log(concat)

let peoples = ["SUJIT","SUMIT","BIRAJA"]
console.log("KUMAR",...peoples)
// NESTED ARRAY
console.log("KUMAR",peoples,"SARAN")

const objectone = {x:1,y:2,z:3}
const objecttwo = {a:1,b:2,c:3}
const objeectthree = {...objectone,...objecttwo}
const allobjects = {objectone,objecttwo}
console.log(objeectthree)
console.log(allobjects)

let person = {
    name : "SUJIT",
    age : 23,
    gender : "MALE"
}
const clone = {...person, work : "PROGRAMMER", location: "ODISHA"}
console.log(clone)
console.log(person)

// ASSIGNMENT
const arrone = [1,2,3]
const arrtwo = [4,5,6]

const clonearr = [...arrone,...arrtwo]
console.log(clonearr)

const user = {
    name: "SUJIT",
    age: 23
}
const cloneuser = {...user}
console.log(cloneuser)