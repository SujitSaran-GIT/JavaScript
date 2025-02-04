/*
innerText
textContext
innerHTML
*/
console.log("I am sujit saran")
const para = document.querySelector("p")
console.log(para.innerText)
console.log(para.textContent)

const head = document.querySelector("h1")
head.innerText = "Text Changed"
const head2 = document.querySelector(".head").innerHTML = "<em>Changed</em>"

