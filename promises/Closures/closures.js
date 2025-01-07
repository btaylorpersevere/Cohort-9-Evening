// Closure
// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// Let us more example of inner functions

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
1
0
//You are making progress. Maintain your momentum, keep the good work. Now do some exercises for your brain and for your muscle.

// Exercises
// Exercises: Level 1
// Create a closure which has one inner function

// Exercises: Level 2
// Create a closure which has three inner functions

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

