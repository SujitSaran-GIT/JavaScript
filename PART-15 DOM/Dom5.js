const firstList = document.querySelector("li")
console.log(firstList)
// parent of the li
console.log(firstList.parentElement)
console.log(firstList.parentElement.parentElement)
console.log(firstList.parentElement.parentElement.parentElement)

// Children
let ul = document.querySelector("ul")
console.log(ul.children)
console.log(ul.children[0])
console.log(ul.children[0].innerText = "One")

// Siblings
console.log(firstList.nextElementSibling.textContent)
console.log(firstList.nextElementSibling.nextElementSibling.textContent)
console.log(firstList.nextElementSibling.nextElementSibling.nextElementSibling.textContent)

const fourthList = document.querySelector(".fourth")
console.log(fourthList.previousElementSibling.textContent)