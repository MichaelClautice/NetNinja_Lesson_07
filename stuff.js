// Michael_Clautice, Richmond, VA
// The Net Ninja - Node JS Tutorial for Beginners 
// Lesson 07 - Module Patterns
//-----
let mikesCounter = function(arr){
    return '•••••••••\nmikesCounter:\nThere be ' + arr.length + ' elements in Mikes demo array';
};

let mikesAdder = function(a,b){
    return `•••••••••\nmikesAdder:\nDa sum of da 2 numbers is ${a+b}\n•••••••••`;
};

let mikesPi = 3.412;

// module.exports.mikesCounter = mikesCounter;
// module.exports.mikesAdder = mikesAdder;
// module.exports.mikesPi = mikesPi;

module.exports = {
    mikesCounter: mikesCounter,
    mikesAdder: mikesAdder,
    mikesPi: mikesPi
};