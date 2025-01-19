// Date and Time in javascript
// --------------------------------
/**
 * Year, Month, Day, Hours, Minute, Seconds, Miliseconds
 */
// const today = new Date()
// console.log(today)
// const day = new Date(2024, 2, 24, 12, 30, 0, 0)
// console.log(day)
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const hours = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()
const miliseconds = date.getMilliseconds()

console.log(`Year: ${year}`)
console.log(`Month:${month}`)
console.log(`Day:${day}`)
console.log(`Hours: ${hours}`)
console.log(`Minutes: ${minute}`)
console.log(`Seconds: ${second}`)
console.log(`Miliseconds ${miliseconds}`)

console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())

date.setDate(date.getDate()+1)
console.log(date)

// setInterval in javascript
// Executes a function repeatedly at specified intervals.
// Time in milliseconds to wait before executing the function.
// setInterval(() =>{
//     console.log(`This function is executed every two seconds`)
// },2000)

// setTimeout
// Executes a function once after a specified delay.
// Time in milliseconds to wait before executing the function.
// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds.");
// }, 2000);
  
// clearInterval
// Stop the interval after some time
const interval = setInterval(() => {
    console.log(`This mesage is displayed in every 1 sec interval`)
}, 1000);

setTimeout(function (){
    clearInterval(interval)
    console.log(`Interval is stopped after 5 seconds`)
}, 5000)