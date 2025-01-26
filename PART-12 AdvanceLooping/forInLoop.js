// For-in Loop
// ------------
// The for-in loop in javascript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object

// for(let key in object) {}
// Example

let person = {
    name : "SUJIT",
    age : 23,
    gender : "MALE"
}
for(let keys in person){
    console.log(keys, person[keys])
}

let list = ['one','two','three']
for (const index in list) {
   console.log(`${index} : ${list[index]}`)
}

// Iterate over object & log the property and the value of that object using for in loop
const object = {
    a : 1,
    b : 2,
    c : 3
}
for (const key in object) {
    console.log(`${key}:${object[key]}`)
}

