// Looping statements
// ----------------------
// for-loop
// ----------
// syntax
// -----------
// for(initialization;condition;incr/decr){
//      looping body
// }
// print my name 100 times
for (let index = 0; index < 100; index++) {
    console.log("My name is sujit saran:",index+1)
}
// Nested loop example
for (let index = 0; index < 5; index++) {
    console.log("Outer loop",index)
    for (let index = 0; index < 5; index++) {
        console.log("Inner loop",index)
    }
}

// while loop
// syntax
// -------------
// while (condition) {
//     loop body
//     incr/decr
// }

// print hello world 5 times
let i = 1
while (i<=5) {
    console.log("Hello, Sujit")
    i++
}

// print your name 100 times to the console using while loop iteration will start from 10
let count = 10
let counter = 1
// while(count<110){
//     console.log("My name is sujit ",counter)
//     count++
//     counter++
// }

// do-while loop
// syntax
// ---------
// do {
    
// } while (condition);
do {
    console.log("my name is sujit saran",counter)
    counter++
    count++
} while (count<110);

// Logical opertions
// 1. Logical AND(&&) : true if both the operands  values are true
const a = false
const b = true
const c = true
console.log(a&&b)
console.log(b&&c)
// 2. Logical OR(||) : true if one of them is true
const x = false
const y = true
console.log(x||y)
// 3. Logicl NOT(!): true if false ,false if true
const n = true
console.log(!n)

// password validator
let password = "Sujit_webdev"
if (password.length > 8 && password.includes("web")) {
    console.log("Valid password")
}