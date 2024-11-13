// // A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. Function makes code:

// // clean and easy to read
// // reusable
// // easy to test
// // --
// // A function can be declared or created in couple of ways:

// // Declaration function
// // Expression function
// // Anonymous function
// // Arrow function

// // Function Declaration
// // Let us see how to declare a function and how to call a function.

// //declaring a function without a parameter
// function functionName() {
//   // code goes here
// }
// functionName() // calling function by its name and with parentheses


// // Function without a parameter and return
// // Function can be declared without a parameter.

// Example:

// // function without parameter,  a function which make a number square
// function square() {
//   let num = 2 //the variable num has function scope
//   let sq = num * num //the variable sq has function scope
//   console.log(sq)
// }
// square() // 4 //in order to execute a function it must be called first

// // function without parameter
// function addTwoNumbers() {
//   let numOne = 10
//   let numTwo = 20
//   let sum = numOne + numTwo

//   console.log(sum)
// }
// addTwoNumbers() // a function has to be called by its name to be executed 

//   function printFullName (){
//       let firstName = 'Asabeneh'
//       let lastName = 'Yetayeh'
//       let space = ' '
//       let fullName = firstName + space + lastName
//       console.log(fullName)
// }
// printFullName() // calling a function

// // Function returning value
// // Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

// function printFullName (){
//       let firstName = 'Asabeneh'
//       let lastName = 'Yetayeh'
//       let space = ' '
//       let fullName = firstName + space + lastName
//       return fullName
// }
// console.log(printFullName())

//   function addTwoNumbers() {
//       let numOne = 2
//       let numTwo = 3
//       let total = numOne + numTwo
//       return total

//   }

// console.log(addTwoNumbers())


// // Function with a parameter
// // In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// // function with one parameter
// function functionName(parm1) {
//   //code goes her
// }
// functionName(parm1) // during calling or invoking one argument needed

// function areaOfCircle(r) {
//   let area = Math.PI * r * r
//   return area
// }
// console.log(areaOfCircle(10)) // should be called with one argument

// function square(number) {
//   return number * number
// }
// console.log(square(10))

// // Function with two parameters
// // function with two parameters
// function functionName(parm1, parm2) {
//   //code goes her
// }
// functionName(parm1, parm2) // during calling or invoking two arguments needed

// // Function without parameter doesn't take input, so lets make a function with parameters
// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   console.log(sum)
// }
// sumTwoNumbers(10, 20) // calling functions

// // If a function doesn't return it doesn't store data, so it should return

// function sumTwoNumbers(numOne, numTwo) {
//   let sum = numOne + numTwo
//   return sum
// }
// console.log(sumTwoNumbers(10, 20))

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log(printFullName('Asabeneh', 'Yetayeh'))

// // Function with many parameters
// // function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
//   //code goes here
// }
// functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// // this function takes array as a parameter and sum up the numbers in the array
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
//     //calling a function
// console.log(sumArrayValues(numbers));


//     const areaOfCircle = (radius) => {
//       let area = Math.PI * radius * radius;
//       return area;
//     }
// console.log(areaOfCircle(10))

// // Function with unlimited number of parameters
// // Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function. Let us see examples both in function declaration and arrow function.

// // Unlimited number of parameters in regular function
// // A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

// // Let us access the arguments object
// ​
// function sumAllNums() {
//  console.log(arguments)
// }

// sumAllNums(1, 2, 3, 4)
// // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// // function declaration
// ​
// function sumAllNums() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173