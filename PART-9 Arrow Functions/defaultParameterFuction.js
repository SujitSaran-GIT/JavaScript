// Default Function Parameter
// ============================
// Default function parameters, introduced in ECMAScript 6, allow you to asign default values to function parameters. When a function is called, and an arguent is not provided for a parameter, the default value will be used instead. This featrure makes it easier to handle cases where arguuments might be missing or indefined

function countToFive(count = true){
    if (count === true) {
        for (let index = 0; index < 5; index++) {
            console.log(`Count: ${index}`)
        }
    }
}
countToFive()
// countToFive(false)

function ratings(rate = 0){
    if (rate === 5) {
        console.log(`High Ratings`)
    }else if (rate === 0) {
        console.log(`Low Ratings`)
    }
}
ratings()
ratings(5)

// Create a function name multiply with two parameters a,b which will multiply the parameters value

// provide 1 as the default to parameter "b"

function multiply(a,b=1) {
    return a*b
}
console.log(multiply(10))