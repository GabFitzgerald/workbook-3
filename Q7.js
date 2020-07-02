

// if (x === 3) {
//   console.log("x is 3!")
// } else if (x === 2) {
//     console.log("x is 2!")
// } else {
//     console.log("x is not 2 or 3")
// }

// throw "Gab Error"
// console.log("code after")

// switch(x) {
//     case (3):
//         console.log("x is 3!")
//         break;
//     case 2:
//         console.log("x is 2!")
//         break;
//     case 2:
//         console.log("x is 2 again!")
//         break;
//     default:
//         console.log("x is not 2 or 3")
//   }

const x = ""
try {
    if(x == "") throw "Empty input";  //code to try
}
catch(err) {
    console.log(err)//code to handle errors
}
finally {
    console.log(`Your input: ${x}`)  //code to be executed regardless of the try / catch result
}