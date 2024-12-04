// // Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.

// // Creating an empty object
// // An empty object

// const person = {}

// // Creating an objecting with values
// // Now, the person object has firstName, lastName, age, location, skills and isMarried properties. The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

// // Let us see some examples of object. Each key has a value in the object.

// const rectangle = {
//   length: 20,
//   width: 20
// }
// console.log(rectangle) // {length: 20, width: 20}

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
//   isMarried: true
// }
// console.log(person)

// Getting values from an object
// We can access values of object using two methods:

// using object name followed by key name if the key-name is a one word
// using square bracket and a quote

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
 console.log(person['phone number'])

// Creating object methods
// Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

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
 // Asabeneh Yetayeh
// Setting new key for an object
// An object is a mutable data structure and we can modify the content of an object after it gets created.

// Setting a new keys in an object

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
    console.log(person.skills[2])
 person.nationality = 'Ethiopian'
// person.country = 'Finland'
 person.title = 'teacher'
 person.skills.push('Meteor')
 person.skills.push('SasS')
 person.isMarried = true

console.log(person)

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
// Asabeneh Yetayeh is a teacher.
// He lives in Finland.
// He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.