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

console.log(over2) // => [3, 10]