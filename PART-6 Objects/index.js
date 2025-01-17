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
