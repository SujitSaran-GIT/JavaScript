// Events in javascript
// JavaScript's interaction with HTML is handled through events tht occur when the user or the browser manipulates a page. When the page loads, it is called an event. When the user clicks a button, that click is also an event

const secondbtn = document.querySelector(".second-btn")
// secondbtn.onclick = alert("Also a bad way of writting") By using this, first alert will pop up that stops the execution of rendering the page
// The right way is
secondbtn.onclick = function() {
    alert("Sujit Saran")
}

const best = document.querySelector('.best')
// best.addEventListener("click",function(){
//     alert("Hello World")
// })
best.addEventListener("click",()=>console.log("I click it"))

// Event Object
// ------------------