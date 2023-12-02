// types of things we have in the variable environment

function two() {
    var isValid; // undefined
}

function one() {
    var isValid = true; // local env or variable env
    two(); // new EC created
}

var isValid = false;

console.log(one());

// two // EC - var isValid = undefined
// one() -- EC - var isValid = true
// global() EC -- var isValid = false, we also have 'one' and 'two' functions in the global variable environments\

// when we finish executing the functions we remove from the execution stack two, then one, then global and all their memory spaces are also gone


