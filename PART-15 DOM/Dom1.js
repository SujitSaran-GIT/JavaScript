// DOM in JAVASCRIPT
// DOM stands for Document Object Model
// When a web page is loaded, the browser create a document object model of the page
// console.log(document)
// console.dir(document)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)
// console.log(document.documentURI)

/*

*****************DOM Selectors*******************
------------------
1. getElementByTagName
2. getElementById
3. getElementByClassName
4. querySelector
5. querySelectorAll
*/

// 1. getElementByTagName
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1").length
)

// 2. getElementById
console.log(document.getElementById("main"))

// 3. getElementByClassName
console.log(document.getElementsByClassName("cls"))

// 4. querySelector
console.log(document.querySelector(".cls"))
console.log(document.querySelector("#main"))
console.log(document.querySelector("#game"))
// using querySelector we can get only the first element

// 5. querySelectorAll()
console.log(document.querySelectorAll("#game"))
// using querySelectorAll() we can get all the selected elements

// Storing data in variable
const headone = document.querySelector("h1")
console.log(headone)
const headall = document.querySelectorAll("h1")
console.log(headall)

