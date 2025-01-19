// objects -> {key:value} pair
const person = {
    firstName: "Sujit",
    lastName: "Saran",
    age: 22,
    location: ['planet','earth'],
    isProgrammer: true
}
console.log(person)
console.log(typeof person)
console.log(person.firstName)
console.log(person.age)
console.log(person.lastName)
console.log(person["location"])
console.log(person["isProgrammer"])

const student = {
    firstName: "Sujit",
    lastName: "Saran",
    age: 23
}
console.log(student)

// Assignment
// -------------
// 1. Create Object name car
// 2. Add (type,model,color) as properties
const car ={
    type: "Mahindra",
    model: "Fortuner",
    color: "White"
}
// 3. Check the type of object
console.log(typeof car)
// 4. update the type property to Toyota
console.log(car.type = "Fortuner")
console.log(car)
// 5. New value to object
car.wheels = 4
console.log(car)

// Object methods
function greet(){
    return `Hello, My name is ${personobject.name} & I am ${personobject.age} years old`
}
const personobject = {
    name : "Sujit",
    age : 24,
    greet,
}

console.log(personobject.greet())

const employee = {
    name : "Sujit",
    age : 23,
    call : function(){
        return `Hello, my name is ${employee.name} & I am ${employee.age} years old`
    }
}
console.log(employee.call())

// JSON in JavaScript
/*
JSON stands for Javascript object Notation and it is nothing more but it is just a lightweight data interchange format that is easy for humans to read and write and also for machine to parts and generate.

So JSON is often used for like transmitter between servers and web applications as well as storing a configuration settings and data 

in javascript JSON is represented as a string
*/
// Comments are not permitted in json

const format = {
    "name" : "SUJIT",
    "age" : 23,
    "email" : "sujitsaran16@gmail.com",
    "isSubscribe" : true,
    "hobbies" : ["Reading","Running","Cooking"],
    "address" : {
        "city" : "Bhubaneswer",
        "idk" : true
    }
}
console.log(format)
// JSON.stringify()-: Convert javascript object to JSON format
const jsonString = JSON.stringify(format)
console.log(jsonString)
// JSON.parse()-: Convert JSON format to javascript object
const jsonParse = JSON.parse(jsonString)
console.log(jsonParse)