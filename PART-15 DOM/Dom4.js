// Getting attributes
const a = document.querySelector("a")
console.log(a.href)

const b = document.querySelector("input")
console.log(b.value)

// setting attributes
a.href = "https://youtube.com"
console.log((b.value = "Hi"))

// getAttribute(attrName)
console.log(b.getAttribute("type"))

// setAttribute(attrName,value)
const c = document.querySelector("#input2")
c.setAttribute("placeholder","password")