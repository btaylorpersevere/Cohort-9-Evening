// // // // syntax
// // // // const arr = Array()
// // // // // or
// // // // // let arr = new Array()
// // // // console.log(arr) // []

// // // // const arr2 = [] //creates an empty array
// // // // console.log(arr2)

// // // // const numbers = [0, 10, 20, 30, 40, 50, 60] //array of numbers
// // // // const fruits = ['banana', 'apples', 'grapes'] //array of strings
// // // // const mixture = [0, 'apples', 2, 'bananas', true] //can be a mixture of datatypes

// // // // console.log(numbers)
// // // // console.log(fruits)
// // // // console.log(mixture)

// // // //Creating an array using split
// // // let js = 'Javascript'
// // // const charInJavascript = js.split('')
// // // console.log(charInJavascript)


// // // let companiesString = 'Facebook, Google, Microsoft, Instagram, Twitter'
// // // const companyArray = companiesString.split(',')
// // // console.log(companyArray)

// // // //Accessing arrqay items using index
// // // //we acces each element in array using it's index number; each element is zero based index, which means that we start wit the numbefr 0 when accessing an element
// // // //in the array

// // // // let myFavFruits = ['apples', 'grapes', 'bananas']
// // // // console.log(myFavFruits[2])
 
// // // // let fruit2 = myFavFruits[2]
// // // // console.log(fruit2)

// // // //Modifying array element
// // // //An array is mutable(modifiable).  Once an array is creatd, we can modify the content of the elements

// // // const numbers2 = [1, 2, 3, 4, 5]
// // // numbers2[0] = 10 //we are accesing the element in index 0 and replacing 1 with 10
// // // numbers2[4] = 50 //replacing the number 5 with 50]
// // // console.log(numbers2)

// // // const countries = ['Belize', 'Mexico', 'Jamaica', 'Dominican' ,'Aruba']
// // // let lastIndex = countries.length-1
// // // console.log(lastIndex)

// // // //Methods to manipulate array
// // // //There are different methods in JS to manipulate an array. Some of the available built-in JS methods are Arry, length, concat, indexOf, slice, splice, join,
// // // //toString, includes, lastIndexOf , isArray, fill, push, pop, shift, unshift

// // // //Creating an array
// // // const arr3 = []

// // // //Creating static using the "fill method"
// // // //Creating an array and filling it with 8 x's
// // // const eightValues = Array(10).fill('x')
// // // console.log(eightValues)

// // // const sevenValues = Array(7).fill('apples')
// // // console.log(sevenValues)

// // // //Concatenating array using concat
// // // //concat:To concatenate two arrays.

// // // const firstList = [1, 2, 3]
// // // const secondList = [4, 5, 6]
// // // const thirdList = firstList.concat(secondList)

// // // console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// // // const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// // // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// // // const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

// // // console.log(fruitsAndVegetables)
// // // ["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]

// // // Getting array length
// // // Length:To know the size of the array

// // const numbers1 = [1, 2, 3, 4, 5]
// // console.log(numbers1.length) // -> 5 is the size of the array

// // // Getting the index of an element in arr array
// // // indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

// // const numbers = [1, 2, 3, 4, 5]

// // console.log(numbers.indexOf(5)) // -> 4
// // console.log(numbers.indexOf(0)) // -> -1
// // console.log(numbers.indexOf(1)) // -> 0
// // console.log(numbers.indexOf(6)) // -> -1

// // // Check an element if it exist in an array.

// // // Check items in a list
// // // let us check if a banana exist in the array

// // const fruits = ['banana', 'orange', 'mango', 'lemon']
// // let index = fruits.indexOf('watermelon')  // 0

// // if(index === -1){
// //    console.log('This fruit does not exist in the array')  
// // } else {
// //     console.log('This fruit does exist in the array')
// // }


// // // Getting last index of an element in array
// // // lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// // const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// // console.log(numbers.lastIndexOf(2)) // 7
// // console.log(numbers.lastIndexOf(0)) // -1
// // console.log(numbers.lastIndexOf(1)) //  6
// // console.log(numbers.lastIndexOf(4)) //  3
// // console.log(numbers.lastIndexOf(6)) // -1

// // // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

// // const numbers = [1, 2, 3, 4, 5]

// // console.log(numbers.includes(5)) // true
// // console.log(numbers.includes(0)) // false
// // console.log(numbers.includes(1)) // true
// // console.log(numbers.includes(6)) // false

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB'
// // ] // List of web technologies

// // console.log(webTechs.includes('Node'))  // true
// // console.log(webTechs.includes('C'))     // false

// // // Checking array
// // // Array.isArray:To check if the data type is an array

// // const numbers = [1, 2, 3, 4, 5]
// // console.log(Array.isArray(numbers)) // true

// // const number = 100
// // console.log(Array.isArray(number)) // false

// // // Converting array to string
// // // toString:Converts array to string

// // const numbers = [1, 2, 3, 4, 5]
// // console.log(numbers.toString()) // 1,2,3,4,5

// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// // console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// // // Joining array elements
// // // join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// // const numbers = [1, 2, 3, 4, 5]
// // console.log(numbers.join()) // 1,2,3,4,5

// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// // console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// // console.log(names.join('')) //AsabenehMathiasEliasBrook
// // console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// // console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// // console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// // const webTechs = [
// //   'HTML',
// //   'CSS',
// //   'JavaScript',
// //   'React',
// //   'Redux',
// //   'Node',
// //   'MongoDB'
// // ] // List of web technologies

// // console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// // console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"



// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

//   const numbers2 = [1,2,3,4,5]

//   console.log(numbers2.slice()) // -> it copies all  item
//   console.log(numbers2.slice(0)) // -> it copies all  item
//   console.log(numbers2.slice(0, numbers2.length)) // it copies all  item
//   console.log(numbers2.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
//console.log(numbers2.slice(1, 3))  // ->[2,3]

// Splice method in array

// Splice: It takes three parameters:Starting position, number of items to be removed and number of items to be added.

//   const numbers = [1, 2, 3, 4, 5]
//   numbers.splice()
//   console.log(numbers)                // -> remove all items

//   const numbers = [1, 2, 3, 4, 5]
// 	numbers.splice(0,1)
//   console.log(numbers)            // remove the first item

//   const numbers = [1, 2, 3, 4, 5, 6]
// 	numbers.splice(3, 3, 7, 8, 9)
//   console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items// 
// const numbers5 = [7, 6, 5, 4, 3, 2, 1]
//numbers5.splice(4,2, 9, 8) ->[]

 // Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
// const arr  = ['item1', 'item2','item3']
// arr.push('new item')

// console.log(arr)
 // ['item1', 'item2','item3','new item']

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// const numbers = ]1, 2, 3, 4, 5]
// console.log(numbers.pop)
 // -> [1,2,3,4]

// let fruits = ['banana', 'orange', 'mango', 'lemon']
// fruits.push('apple')
// console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

// fruits.push('lime')
// console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// Removing the end element using pop
// pop: Removing item in the end.

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4]

// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

// const numbers3= [1, 2, 3, 4, 5]
// numbers3.shift() // -> remove one item from the beginning
// console.log(numbers3) // -> [2,3,4,5]

// Add an element from the beginning
// unshift: Adding array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]

// Reversing array order
// reverse: reverse the order of an array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

// Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// webTechs.sort()
// console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse() // after sorting we can reverse it
// console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray =  [[1, 2, 3], [1, 2, 3], [4,5,6]]
// console.log(arrayOfArray[2]) // [4, 5 6]
// console.log(arrayOfArray[1][1])

//  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
//  console.log(fullStack.length)  // 2
//  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
//  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

 // 🌕 You are diligent and you have already achieved quite a lot. You have just completed day 5 challenges and you are 5 steps ahead on your way to greatness. Now do some exercises for your brain and for your muscle.

