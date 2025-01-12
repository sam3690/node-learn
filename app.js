// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./3-utils')

// console.log(names);

sayHi("Ali")
sayHi(names.john)
sayHi(names.peter) 