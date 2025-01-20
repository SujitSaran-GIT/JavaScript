// Destructuring allows us to "unpack" values from data-structure (Arrays,Objects) into separate distinct variables
// Array Destructuring []
// ----------------------
const foo = ["One", "Two", "Three"]
const [one] = foo
const [four, two, three] = foo
console.log(one, four, two, three)

const colour = ["RED", "GREEN", "WHITE", "BLUE"]
const [red, green, white, blue] = colour
console.log(red, green, white, blue)

let a, b
[a = 5, b = 6] = ['five', 'six']
console.log(a, b)

function func() {
    return [1, 2]
}
let aa, bb
[aa, bb] = func()
console.log(aa, bb)

// Ignoring the return value from a function
function funct() {
    return [1, 2, 3]
}
const [aaa, , bbb] = funct()
console.log(aaa, bbb)

// Assinging the rest of an array to a variable
const [x, ...y] = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"]
console.log(x, y)

// Assignment
// Task is to use array destructuring to extract the first three colours from the colours array and assign them to separate variables named colourone,colourtwo,colourthree
// After extracting the colours, log each variable's value to the console
const colours = ["WHITE", "GREEN", "BLUE", "RED", "ORANGE"]
const [colourone, colourtwo, colourthree] = colours
console.log(colourone, colourtwo, colourthree)


// Object Destructuring {}
// =====================
// In object destructuring order doesn't matter but the name matter

const student = {
    name: "SUJIT",
    rollno: 29,
    position: "FIRST"
}
const { name, rollno, position } = student
console.log(name, rollno, position)

// Assignment
// -----------
// Your task is to use object destructuring to extract the name,age,and country peroperties from the person object.
// After extracting the properties, log each variable's value to the console

const person = {
    myname: "SUJIT",
    age: 23,
    gender: "MALE",
    country: "INDIA"
}
const { myname, age, gender, country } = person
console.log(myname, age, gender, country)

// Renaming the variables in object destructuring
const num = { x: 100, y: 200 }
const { x: newone, y: newtwo } = num
console.log(newone, newtwo)

// object destructuring and rest operator
let { m, n, ...rest } = { m: 100, n: 200, c: 300, d: 400, e: 500 }
console.log(m, n, rest)

// Assignment
// Your task is to use object destructuring to extract the name,age,and country proprties from the person object and assign them to separate variables named personName, personAge, and personCountry
const { myname: personName, age: personAge, country: personCountry } = person
console.log(personName, personAge, personCountry)


// Function Destructuring
// =======================
const persondetails = {
    name: "SUMIT",
    age: 23,
    country: "CANADA"
}
function printPersonInfo(persondetails) {
    console.log(`Name: ${persondetails.name}`)
    console.log(`Age: ${persondetails.age}`)
    console.log(`Country: ${persondetails.country}`)
}
printPersonInfo(persondetails)

// If we dont want to write the person. then we use function destructuring
function printPerson({ name, age, country }) {
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Country: ${country}`)
}
printPerson(persondetails)

let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
}

function showMenu({ title, width: w = 100, height: h = 200, items: [item1, Item2] }) {
    console.log(`${title} ${w} ${h}`)
    console.log(`${item1} ${Item2}`)
}
showMenu(options)

// Nested Destructuring
// ---------------------
const songs = [
    {
        name : "MILLIONARE",
        singer : "SUJIT",
        duration : 4.45
    },
    {
        name : "BROWN MUNDE",
        singer : "SUMIT",
        duration : 4.50
    },
    {
        name : "RUSSIAN BANADE",
        singer : "BIRAJA",
        duration : 4.35
    },
    {
        name : "KALASTER",
        singer : "MANISHA",
        duration : 4.57
    },
]

const [, , , {singer}] = songs
console.log(singer)


// Example
const data = {
    user: {
        id : 123,
        uname : "SUJIT SARAN",
        uage : 23,
        email : "sujitsaran16@gmail.com",
        address : {
            city : "JAJAPUR",
            state : "ODISHA",
            ucountry : "INDIA"
        },
        hobbies : ["Reading","Painting","Cooking"],
        scores : {
            math : 98,
            science : 94,
            english : 90
        }
    },
    products : [
        {
            id : 1,
            name : "Laptop",
            price : 30000
        },
        {
            id : 2,
            name : "Smart phone",
            price : 20000
        },
        {
            id : 3,
            name : "Tablet",
            price : 250000
        }
    ],
    settings : {
        darkmode : true,
        notifications : {
            email : true,
            sms : false,
            push : true
        },
        languages : "ENGLISH",
    }
}

// 
const {
    user : {
        uname,uage,address : {city,ucountry},
        hobbies,
        scores : {math,science,english},
        email,
    },
    products: [product1,product2,product3],
    settings : {
        darkmode,
        notifications : {
            email : emailNotifications,
            sms : smsNotifications,
            push : pushNotifications
        },
        languages,
    },
} = data

console.log(`Name: ${uname}`)
console.log(`Age: ${uage}`)
console.log(`Address: ${city} ${country}`)
console.log(`Hobbies: ${hobbies.join(", ")}`)
console.log(`Math Score: ${math}`)
console.log(`Science Score: ${science}`)
console.log(`English Score: ${english}`)
console.log(`Product1: ${product1.name} - ${product1.price}`)
console.log(`Product2: ${product2.name} - ${product2.price}`)
console.log(`Product3: ${product3.name} - ${product3.price}`)
console.log(`Dark Mode: ${darkmode}`)
console.log(`Email Notification: ${emailNotifications}`)
console.log(`SMS Notification: ${smsNotifications}`)
console.log(`Push Notification: ${pushNotifications}`)
console.log(`Language: ${languages}`)