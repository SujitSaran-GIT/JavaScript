/*
classlist
add()
remove()
toggle()
*/
const head = document.querySelector("h1")
console.log(head.classList)
// Add class to specific element
const head1 = document.querySelector("h2")
head1.classList.add("styles")
console.log(head1.classList)

// remove classes from the element
const head2 = document.querySelector("h3")
head2.classList.remove("address")

// toggle() is used for if the element contains class it will remove it if not then add
const head3 = document.querySelector("h4")
head3.classList.toggle("college")