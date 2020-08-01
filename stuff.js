var mikesCounter = function(arr){
    return '•••••••••\nThere be ' + arr.length + ' elements in Mikes demo array';
};

var mikesAdder = function(a,b){
    return `•••••••••\nDa sum of da 2 numbers is ${a+b}\n•••••••••`;
};

var mikesPi = 3.412;

// module.exports.mikesCounter = mikesCounter;
// module.exports.mikesAdder = mikesAdder;
// module.exports.mikesPi = mikesPi;

module.exports = {
    mikesCounter: mikesCounter,
    mikesAdder: mikesAdder,
    mikesPi: mikesPi
};