// // Creating object methods
// // Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// console.log(person.getFullName())
// // Asabeneh Yetayeh

// // Setting new key for an object
// // An object is a mutable data structure and we can modify the content of an object after it gets created.

// // Setting a new keys in an object

// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   getFullName: function() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// person.nationality = 'Ethiopian'
// person.country = 'Finland'
// person.title = 'teacher'
// person.skills.push('Meteor')
// person.skills.push('SasS')
// person.isMarried = true

// person.getPersonInfo = function() {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(', ')
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0]

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//   let fullName = this.getFullName()
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//   return statement
// }
// console.log(person)
// console.log(person.getPersonInfo())

// // Asabeneh Yetayeh is a teacher.
// // He lives in Finland.
// // He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.


// // Object Methods
// // There are different methods to manipulate an object. Let us see some of the available methods.

// // Object.assign: To copy an object without modifying the original object

const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

// Getting object values using Object.values()
// Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)

// Getting object keys and values using Object.entries()
// Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries)

// Checking properties using hasOwnProperty()x
// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('firstName'))
console.log(copyPerson.hasOwnProperty('score'))

