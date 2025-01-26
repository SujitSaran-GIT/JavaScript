// Ternary Operator
// ----------------------
// The ternary operator in javascript is a concise way of writing conditional expressions. It is the only javascript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? expIfTrue : expIfFalse

let password = 4
function passwordCheck(pass){
    // if (pass === 8) {
    //     return `Strong Password`
    // } else {
    //     return `Password should be 8 Charecters`
    // }
    return pass === 8 ? `Strong password` : `Loose Password`
}
const res = passwordCheck(password)
console.log(res)

const age = 28
const isAdult = age > 18 ? `Adult` : `Not an adult`
console.log(isAdult)

// If the person have money they can 'buy products'
// If the person don't have any money 'They should bring money'

const money = false
const result = money ? `Buy Products` : `They should bring money`
console.log(result)