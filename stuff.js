// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners 
// Lesson 07 - Module Patterns
//-----
let mikesCounter = function(arr){
    return '\n•••••••••\nmikesCounter:\nThere be ' + arr.length + ' elements in Mikes demo array\n•••••••••\n';
};

// Old concatenation syntax:
let mikesAdder1 = function(a,b){
    return "\n•••••••••\nmikesAdder1:\nDa sum of da 2 numbers is " + (a+b) + "\n•••••••••\n";
};

// New ES6 concatenation syntax:
let mikesAdder2 = function(a,b){
    return `\n•••••••••\nmikesAdder2:\nDa sum of da 2 numbers is ${a+b}\n•••••••••\n`;
};

let mikesPi = 3.412;

// module.exports.mikesCounter = mikesCounter;
// module.exports.mikesAdder = mikesAdder;
// module.exports.mikesPi = mikesPi;

module.exports = {
    mikesCounter: mikesCounter,
    mikesAdder1: mikesAdder1,
    mikesAdder2: mikesAdder2,
    mikesPi: mikesPi
};