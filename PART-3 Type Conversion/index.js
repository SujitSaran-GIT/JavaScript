// Type Conversion
let money = 50
console.log(money)
console.log(typeof(money))
// Change to string
money = "50"
console.log(typeof(money))
// Convert string to number
money = parseInt(money)
console.log(typeof money)
// or
money = +money
// or
money = Number(money)
// Convert integer to string
money = money.toString()
console.log(typeof money)
// or
money = String(money)
// Convert string to decimal
let moneyBank = "50.345"
moneyBank = parseFloat(moneyBank)
console.log(typeof moneyBank)