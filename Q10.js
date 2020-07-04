// let array = ["Gab", "Leo", "Jerome"]
// array.forEach(logItem)

// function logItem (item) {
//     console.log(item)
// } 

// let numbers = [1, 2, 3]
// let numbersTimesTwo = numbers.map(timesTwo)

// function timesTwo(number) {
//   return number * 2
// }

// console.log(numbersTimesTwo) // => [2, 4, 6]

let numbers = [1, 2, 3, 10]
let over2 = numbers.filter(filterFunction);

function filterFunction(number) {
  return number > 2
}




// let children = ["Gab", "Leo", "Rebecca", "Jerome"]
// console.log(children.splice(2, 1)) // => ["Rebecca"]
// console.log(children) // => [ 'Gab', 'Leo', 'Jerome' ]

// delete children[1]
// console.log(children) // => [ 'Gab', <1 empty item>, 'Jerome' ]

// console.log(children.pop()) // => Jerome
// console.log(children) // => [ 'Brian', 'Gab', 'Leo' ]
// console.log(children.shift()) // => Brian
// console.log(children) // => [ 'Gab', 'Leo' ]


let children = ["Gab", "Leo", "Jerome"]

let youngerChildren = children.slice(1)
console.log(youngerChildren) // => [ 'Gab', 'Leo', 'Jerome' ]

let middleChildren = children.slice(1, children.length - 1)
console.log(middleChildren) // =>  [ 'Leo' ]

console.log(children) // => [ 'Leo', 'Jerome' ]