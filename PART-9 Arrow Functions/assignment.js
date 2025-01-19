// Refactor this code to ES^ Arrow function
// setTimeout(function() {
//     console.log("Hello")
//     setTimeout(function() {
//         console.log("Hey")
//         setTimeout(function() {
//             console.log("Namaste")
//             setTimeout(function() {
//                 console.log("hi")
//                 setTimeout(function() {
//                     console.log("Jajpur")
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// },2000)

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() => {
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => {
                    console.log("Jajpur");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);


// Enhanced Object Literals
// ------------------------
// Enhanced Object Literals, introduced in ECMAScript 6, are a set of enhancements to the syntax for defining objects in javascript. These enhancements make it more convenient and consise to define object properties and methods 

function user(name,age,work) {
    return {
        name : name,
        // name
        age : age,
        // age
        work : work,
        // work
        intro: function () {
            console.log(`My name is ${name} & I am ${age} years old & I am a ${work}`)
        }
    }
}
const sujit = user("SUJIT",23,"Ai Expert")
console.log(sujit)
console.log(sujit.intro())


// Refactor ES% code to ES6
// var a = 1
// var b = 2
// var c = 3

// var obj = {
//     a : a,
//     b : b,
//     c : c
// }

function number(a,b,c) {
    return {
        // a : a,
        // b : b,
        // c : c, 
        a,
        b,
        c,
    }
}
const print = number(1,2,3)
console.log(print)