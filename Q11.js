

// me.firstName = "Gabby"
// me["age"] = 21

// console.log(me) // => { firstName: 'Gabby', lastName: 'Fitzgerald', age: 21 }

// function Person(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
// }

// let me = new Person("Gab", "Fitzgerald", 21)
// console.log(me) // => Person { firstName: 'Gab', lastName: 'Fitzgerald', age: 21 }

let me = {
    firstName: "Gab",
    lastName: "Fitzgerald",
    age: 20
}


Object.seal(me)
me.age = 21
console.log(me.age) // =>21
me.suburb = "South Brisbane"
console.log(me.suburb) // => undefined
