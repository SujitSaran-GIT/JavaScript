// rest parameter
// ----------------
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in javacript

function user(userdate) {
    console.log(userdate)
}
user("SUJIT",23,"FOOTBALL")

function employee(...userdata){
    console.log(userdata)
}
employee("SUJIT",19,"PROGRAMMER","CRICKET")

function empdetails(name,...userdata){
    console.log(name,userdata)
}
empdetails("SUJIT",19,"PROGRAMMER","CRICKET")

function person(fname,sname,...hobbies) {
    console.log(fname,sname,hobbies)
}
person("SUJIT","SARAN","SINGING","DANCING","PLAYING")

// Assignment
// ==============
// Create a function which will take unlimited amount of parameters & log all of that params to the console
function variadic(...params) {
    console.log(params)
}
console.log("SUJIT","SARAN",23,"JAJPUR",[29])