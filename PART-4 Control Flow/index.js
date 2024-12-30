// Conditional statement
let a = 10
let b = 20
if (a>b) {
    console.log(a+" is greater than "+b)
}else{
    console.log(b+" is greater than "+a)
}

let time = 10
let greetings;

// Assignment
// 1. Create variable name (password) store nothing
let password;
password = 9480984989483
// 2. If password is equal to 8 print welcome
if (password==8) {
    console.log("Welcome")
}
// 3. If password is less than or equal to 8 print "Password is too short"
else if (password<=8) {
    console.log("Password is too short")
}
// 4. If password is greater than or equal to 8 print "Too long password" & "password should be 8 charecter"
else if (password>=8) {
    console.log("Too long password & Password shoud be 8 charecter")
}
// 5. If all failed print "Please provide a password"
else{
    console.log("Provide a password")
}

// Switch statement
// Syntax
// switch(expression){
//     case x:
//         statement;
// }

let x = 0
let text
switch (x){
    case 0:
        text = "off"
        break
    case 1:
        text = "On"
        break
    default:
        text = "No value found"
        break
}
console.log(text)

// let today = prompt("Enter the day")
// switch (today) {
//     case "monday":
//         today = "Monday"
//         break;
//     case "tuesday":
//         today = "Tuesday"
//         break;
//     case "wednesday":
//         today = "Wednesday"
//         break;
//     case "thrusday":
//         today = "Thrusday"
//         break;
//     case "friday":
//         today = "Friday"
//         break;
//     case "saturday":
//         today = "Saturday"
//         break;
//     case "sunday":
//         today = "Sunday"
//         break;
//     default:
//         today = "Enter the valid day"
//         break;
// }
// console.log("Today is "+today)

// Assignment
// 1. Create variable name fruit & store "banana"
let fruit = "banana"
// 2. if case is "Banana" print "i am not a fan of orange"
switch (fruit) {
    case "banana":
        fruit = "Banana is good"
        break;
    case "orange":
        fruit = "I am not fan of orange"
        break;
    case "apple":
        fruit = "how you like them apples?"
        break;
    default:
        fruit = "I have never heard of that fruit"
        break;
}
console.log(fruit)