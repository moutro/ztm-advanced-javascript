// leakage of global variables
// var, let, const are not there so JS goes up the scope chain to global env. but no error. it will create it for you on its own

// so we 'use strict' to top of page as a way to prevent JS to do weird edge cases

// 'use strict'
// function weird() {
//     height = 50;
//     return height;
// }

// console.log(weird());

var heyhey = function doodle() {
    // do something
    return 'heyhey'
}

console.log(heyhey());
// console.log(doodle());

// will reference error on doodle no where to be seen on the scope chain. cant access it on the global scope What does that mean?
//That means it's nowhere to be seen in the scope chain.
//This is because the doodle function is actually enclosed in its own scope, Doodle.
// Gets actually added to its own execution contexts Variable environment.

// we can only access it inside of itself

var heyhey2 = function doodle2() {
    doodle2();
    return 'heyhey2';
}

console.log(heyhey2());
console.log(doodle2());