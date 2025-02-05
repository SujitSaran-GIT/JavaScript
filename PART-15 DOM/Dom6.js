const header = document.querySelector("h1")
console.log(header.style.backgroundColor = "red")

const container = document.querySelector(".container")
const h1 = document.querySelector(".main-headings")
const p = document.querySelector(".sub-headings")
const btn = document.querySelector(".btn")

// 1. Provide "400px" of height of the container element
container.style.minHeight = "400px"
// 2. Change the background-color of the container to "teal"
container.style.backgroundColor = "teal"
// 3. Change the color of the h1 to "skyblue"
h1.style.color = "skyblue"
// 4. Change the fontFamily of paragraph to "sans-serif"
p.style.fontFamily = "sans-serif"
// 5. Change the color of paragraph to white
p.style.color = "white"
// 6. Change the color of btn to pink
btn.style.color = "pink"