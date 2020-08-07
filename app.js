// app.js is the main-entry file for this app
// this file - app.js, is what we run to run the app
// req the custom module stuff.js
let stuff = require('./stuff.js');

// console.log this:
// call mikesCounter fnctn in stuff.js 
// send it an array arg
console.log(stuff.mikesCounter(['arrItem1', 'arrItem2', 'arrItem3', 'arrItem4', 'arrItem5', 'arrItem6']));

// console.log this:
// call mikesAdder fnctn in stuff.js 
// send it 2 int args
console.log(stuff.mikesAdder(11,9));

// console.log this:
// call mikesAdder fnctn in stuff.js 
// send it th valu of MikesPi & an int
console.log(stuff.mikesAdder(stuff.mikesPi, 2));