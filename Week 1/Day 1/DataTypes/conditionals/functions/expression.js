// Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4

const generateFullName = function(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))


