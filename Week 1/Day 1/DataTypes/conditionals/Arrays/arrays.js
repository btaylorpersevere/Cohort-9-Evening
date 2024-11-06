// // // syntax
// // // const arr = Array()
// // // // or
// // // // let arr = new Array()
// // // console.log(arr) // []

// // // const arr2 = [] //creates an empty array
// // // console.log(arr2)

// // // const numbers = [0, 10, 20, 30, 40, 50, 60] //array of numbers
// // // const fruits = ['banana', 'apples', 'grapes'] //array of strings
// // // const mixture = [0, 'apples', 2, 'bananas', true] //can be a mixture of datatypes

// // // console.log(numbers)
// // // console.log(fruits)
// // // console.log(mixture)

// // //Creating an array using split
// // let js = 'Javascript'
// // const charInJavascript = js.split('')
// // console.log(charInJavascript)


// // let companiesString = 'Facebook, Google, Microsoft, Instagram, Twitter'
// // const companyArray = companiesString.split(',')
// // console.log(companyArray)

// // //Accessing arrqay items using index
// // //we acces each element in array using it's index number; each element is zero based index, which means that we start wit the numbefr 0 when accessing an element
// // //in the array

// // // let myFavFruits = ['apples', 'grapes', 'bananas']
// // // console.log(myFavFruits[2])
 
// // // let fruit2 = myFavFruits[2]
// // // console.log(fruit2)

// // //Modifying array element
// // //An array is mutable(modifiable).  Once an array is creatd, we can modify the content of the elements

// // const numbers2 = [1, 2, 3, 4, 5]
// // numbers2[0] = 10 //we are accesing the element in index 0 and replacing 1 with 10
// // numbers2[4] = 50 //replacing the number 5 with 50]
// // console.log(numbers2)

// // const countries = ['Belize', 'Mexico', 'Jamaica', 'Dominican' ,'Aruba']
// // let lastIndex = countries.length-1
// // console.log(lastIndex)

// // //Methods to manipulate array
// // //There are different methods in JS to manipulate an array. Some of the available built-in JS methods are Arry, length, concat, indexOf, slice, splice, join,
// // //toString, includes, lastIndexOf , isArray, fill, push, pop, shift, unshift

// // //Creating an array
// // const arr3 = []

// // //Creating static using the "fill method"
// // //Creating an array and filling it with 8 x's
// // const eightValues = Array(10).fill('x')
// // console.log(eightValues)

// // const sevenValues = Array(7).fill('apples')
// // console.log(sevenValues)

// // //Concatenating array using concat
// // //concat:To concatenate two arrays.

// // const firstList = [1, 2, 3]
// // const secondList = [4, 5, 6]
// // const thirdList = firstList.concat(secondList)

// // console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// // const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// // const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

// // console.log(fruitsAndVegetables)
// // ["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]

// // Getting array length
// // Length:To know the size of the array

// const numbers1 = [1, 2, 3, 4, 5]
// console.log(numbers1.length) // -> 5 is the size of the array

// // Getting the index of an element in arr array
// // indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1

// // Check an element if it exist in an array.

// // Check items in a list
// // let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('watermelon')  // 0

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }


// // Getting last index of an element in array
// // lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1

// // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.includes('Node'))  // true
// console.log(webTechs.includes('C'))     // false

// // Checking array
// // Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

// // Converting array to string
// // toString:Converts array to string

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// // Joining array elements
// // join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
// Slice array elements