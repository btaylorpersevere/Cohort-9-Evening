// Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// Callback
// A callback is a function which can be passed as parameter to other function. See the example below.

// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
//declaration function
// function callback(n) {
//   return n ** 2
// }

 // function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))

//  Returning function
//  Higher order functions return function as a value​

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
 console.log(higherOrder(2)(3)(10))

 // Let us see where we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

// 15
// The above example can be simplified as follows:

// const numbers = [1, 2, 3, 4]
// ​
// const sumArray = arr => {
//   let sum = 0
//   arr.forEach(function(element) {
//     sum += element
//   })
//   return sum

// }
// console.log(sumArray(numbers))
// 15

// Setting time
// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// setInterval
// setTimeout
// Setting Interval using a setInterval function
// In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// // syntax
// function callback() {
//   // code goes here
// }
// // setInterval(callback, duration)
// function sayHello() {
//   console.log('Hello')
// }
// setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// // Setting a time using a setTimeout
// // In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

// // // syntax
// function callback() {
//   // code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

// Functional Programming
// Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr) 
// })
// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr)
// })
 // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
// 1
// 2
// 3
// 4
// 5
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)

// console.log(sum)
// 15
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))
// // FINLAND
// // DENMARK
// // SWEDEN
// // NORWAY
// // ICELAND
// // map

 // map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

//  const modifiedArray = arr.map(function (element, index, arr) {
//   return element
// })

// /*Arrow function and explicit return
// const modifiedArray = arr.map((element,index) => element);
// */
// //Example
// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)
// [1, 4, 9, 16, 25]
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)
// ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]
// const countriesToUpperCase = countries.map((country) => country.toUpperCase())
// console.log(countriesToUpperCase)

// /*
// // Arrow function
// const countriesToUpperCase = countries.map((country) => {
//   return country.toUpperCase();
// })
// //Explicit return arrow function
// const countriesToUpperCase = countries.map(country => country.toUpperCase());
// */
// ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 3)
// )
//  ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]

// // filter
// // Filter: Filter out items which full fill filtering conditions and return a new array.

// //Filter countries containing land
// const countriesContainingLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesContainingLand)
// ['Finland', 'Ireland']
// const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
// console.log(countriesEndsByia)
// ['Albania', 'Bolivia','Ethiopia']
// const countriesHaveFiveLetters = countries.filter(
//   (country) => country.length === 5
// )
// console.log(countriesHaveFiveLetters)
// ['Japan', 'Kenya']
// const scores = [
//   { name: 'Asabeneh', score: 95 },
//    { name: 'Lidiya', score: 98 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'John', score: 100 },
// ]

// const scoresGreaterEighty = scores.filter((score) => score.score > 80)
// console.log(scoresGreaterEighty)
// [{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]

// // reduce
// // reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//  return 
// }, initialValue)
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// console.log(sum)
// 15
// every
// every: Check if all the elements are similar in one aspect. It returns boolean

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

// console.log(areAllStr)
// true
// const bools = [true, true, true, true]
// const areAllTrue = bools.every((b) => b === true) // Are all true? 

// console.log(areAllTrue) // true
// // true
// // find
// // find: Return the first element which satisfies the condition

// const ages = [24, 22, 25, 32, 35, 18]
// const age = ages.find((age) => age < 20)

// console.log(age)
// 18
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const result = names.find((name) => name.length > 7)
// console.log(result)
// Asabeneh
// const scores = [
//   { name: 'Asabeneh', score: 95 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'John', score: 100 },
// ]

// const score = scores.find((user) => user.score > 80)
// console.log(score)
// { name: "Asabeneh", score: 95 }

// // findIndex
// // findIndex: Return the position of the first element which satisfies the condition

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

// const age = ages.findIndex((age) => age < 20)
// console.log(age) // 5
// some
// some: Check if some of the elements are similar in one aspect. It returns boolean

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) =>  b === true)

// console.log(areSomeTrue) //true
// const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
// console.log(areAllStr) // false

// // sort
// // sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

// // Sorting string values
// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// //Now the original products array  is also sorted

// // Sorting Numeric values
// // As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]

// // Sorting Object Arrays
// // Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.

// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1
//   if (a.key > b.key) return 1
//   return 0
// })

// // or

// objArr.sort(function (a, b) {
//   if (a['key'] < b['key']) return -1
//   if (a['key'] > b['key']) return 1
//   return 0
// })

// const users = [
//   { name: 'Asabeneh', age: 150 },
//   { name: 'Brook', age: 50 },
//   { name: 'Eyob', age: 100 },
//   { name: 'Elias', age: 22 },
// ]
// users.sort((a, b) => {
//   if (a.age < b.age) return -1
//   if (a.age > b.age) return 1
//   return 0
// })
// console.log(users) // sorted ascending
// // [{…}, {…}, {…}, {…}]

// // 🌕 You are doing great.Never give up because great things take time. You have just completed day 9 challenges and you are 9 steps a head in to your way to greatness. Now do some exercises for your brain and for your muscle.

