// createElement()
const input = document.createElement("h1")
console.log(input)
console.log(input.textContent = "Hello world")
input.classList.add("name")
// appendChild()
const body = document.body
body.appendChild(input)
// insertBefore()-: selector.insertBefore(what,where)
const ul = document.querySelector("ul")
const newList = document.createElement("li")
newList.innerText = "I am a list tag"
ul.appendChild(newList)

const flist = document.querySelector("li")
ul.insertBefore(newList,flist)

/*
insertAdjacentElement(
    'beforeBegin'
    'afterbegin'
    'afterend'
    'beforeend'
    'element'
)
*/

const fpara = document.querySelector("p")
const i = document.createElement("i")
i.innerText = "I am a Italic tag"
i.style.color = "red"
fpara.insertAdjacentElement("beforebegin",i)
// fpara.insertAdjacentElement("afterbegin",i)

// append()-: Add element at the end
const name = document.createElement("span")
name.innerText = " SUJIT"
name.style.color = "teal"
const section = document.querySelector('section')
section.append(name)

// prepend()-: Add element at the begining
const greet = document.createElement("span")
greet.innerText = "Good Morning "
greet.style.color = "green"
section.prepend(greet)

// remove()
const newLi = document.querySelector('.new-list')
const fourthChild = document.querySelector(".fourth")
newLi.removeChild(fourthChild)
newLi.remove()