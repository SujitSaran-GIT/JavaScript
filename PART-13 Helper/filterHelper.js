// Filter method
// The filter method is a built-in array method in javascript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria

const songs = [
    {
        name : "Lucky You",
        duration : 4.00
    },
    {
        name : "Just Like You",
        duration : 3.00
    },
    {
        name : "The Search",
        duration : 2.00
    },
    {
        name : "Old Town Road",
        duration : 1.50
    },
    {
        name : "The Rock",
        duration : 5.00
    }
]
console.log(songs.filter(song => song.duration >= 3))

const computers = [
    {
        name : "Lenovo",
        ram : 8,
        hdd : 256,
        ssd : 512
    },
    {
        name : "Asus",
        ram : 8,
        hdd : 256,
        ssd : 512
    },
    {
        name : "Apple",
        ram : 16,
        hdd : 512,
        ssd : 1024
    },
    {
        name : "Hp",
        ram : 4,
        hdd : 64,
        ssd : 256
    },
    {
        name : "Dell",
        ram : 4,
        hdd : 256,
        ssd : 512
    }
]
console.log(computers.filter((check) => check.ram >= 8))
console.log(computers.filter((check) => check.ram < 8))

// Assignment
const ages = [32,33,16,40]
console.log(ages.filter((age) => age > 18))

const words = [
    "sprey","limit","elite","exuberant","destruction","present"
]
// Print only those words which length is greater than 6
const res = words.filter(word => word.length > 6)
console.log(res)