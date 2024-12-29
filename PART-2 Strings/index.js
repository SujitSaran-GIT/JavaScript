// STRINGS
// ------------
let firstname = "Mr."
console.log(firstname)
let secondname = "SUJIT"
console.log(secondname)
let surname = 'SARAN'
console.log(surname)
// 1. CONCATENATION
let fullname = firstname +" "+ secondname +" "+ surname
console.log(fullname)
// or using string.concat()
let fullName = firstname.concat(" ").concat(secondname).concat(" ").concat(surname)
console.log(fullName)
// 2. APPEND

// 3. LENGTH
console.log(firstname.length)

// 4. CASES
console.log(firstname.toLowerCase())
console.log(firstname.toUpperCase())

// 5. SLICE
console.log(secondname.slice(1,3))

// 6. SPLIT & JOIN
console.log(fullName.split(" "))
console.log(fullName.split(" ").join("_"))

// 7. INCLUDES
console.log(fullName.includes("A"))
console.log(fullName.includes("W"))

// 8. TRIM
let name = "       SUJIT           "
console.log(name)
console.log(name.trim())


// STRING LITERALS
let FullName = `My name is ${firstname} ${secondname} ${surname}`
console.log(FullName)

// ASSIGNMENT
// 1. create a variable name favActorFirstName & store your fav Actor name
let favActorFirstName = "SHARUKH"
// 2. create a variable name favActorSecondName & store the last name
let favActorSecondName = "KHAN"
// 3. Create variable name fullname and concatenate favActorFirstName & favActorSecondName
let Fullname = favActorFirstName.concat(" ").concat(favActorSecondName)
// 4. Create a variable name uppercase & apitalize your fav actor name
let uppercase = Fullname.toUpperCase()
// 5. Create a variable name message & store `My favorite Actor is favActorName & say somethong about your fav actor ` name should be in uppercase
let message = `My favorite Actor is ${uppercase} & he is the best actor. `
console.log(message)
