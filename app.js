// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 07 - Module Patterns
//-----
let stuff = require('./stuff.js');

// console.log this:
// call mikesCounter fnctn in stuff.js 
// send it an array arg
console.log(stuff.mikesCounter(['arrItem1', 'arrItem2', 'arrItem3', 'arrItem4', 'arrItem5', 'arrItem6', 'arrItem7']));

// console.log this:
// call mikesAdder1 fnctn in stuff.js 
// send it 2 int args
console.log(stuff.mikesAdder1(11,11));

// console.log this:
// call mikesAdder2 fnctn in stuff.js 
// send it 2 int args
console.log(stuff.mikesAdder2(9,9));

// console.log this:
// call mikesAdder1 fnctn in stuff.js 
// send it th valu of MikesPi & an int
console.log(stuff.mikesAdder1(stuff.mikesPi, 7));