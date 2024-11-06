// syntax
// if (condition) {
//     //this part of code runs for truthy condition
//   }


  let num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

let isRaining = true
if (isRaining) {
  console.log("It is raining cats and dogs!")
}

//If Else
//If the condition is true the first block will be executed, if not the else condition will be executed
// //syntax
// if (condition) {
//   //execute this code
// } else {
//   //execute this block of code
// }
let num2 = 4
if (num2 > 0) {
  console.log("this is a positive number")
} else {
  console.log("number is not greater than zero")
}


//if else if else
if (condition) {
  //execute this block of code
} else if (condition) {
  //execute this block of code
} else {
  //execute this block of code
}
//Example
let a = 0
if (a > 0) {
  console.log("a is a positive number")
} else if ( a == 0) {
  console.log("a is zero") 
} else {
  console.log("a is not a number")
}

//example2
let weather = "sunny"
if (weather === "rainy") {
  console.log("You need a a rain coat")
} else if (weather == "cloud") {
  console.log("you might need a light jacket")
} else if (weather === "sunny"){
  console.log("get out and enjoy the sun!")
} else {
  console.log("just stay in the house")
}