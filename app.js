// Michael_Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 07 - Module Patterns
//-----
let stuff = require('./stuff.js');

// console.log this:
// call mikesCounter fnctn in stuff.js 
// send it an array arg
console.log(stuff.mikesCounter(['arrItem1', 'arrItem2', 'arrItem3', 'arrItem4', 'arrItem5', 'arrItem6', 'arrItem7']));

// console.log this:
// call mikesAdder fnctn in stuff.js 
// send it 2 int args
console.log(stuff.mikesAdder(11,11));

// console.log this:
// call mikesAdder fnctn in stuff.js 
// send it th valu of MikesPi & an int
console.log(stuff.mikesAdder(stuff.mikesPi, 7));