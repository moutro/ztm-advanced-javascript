// Function Expression
const canada = function() {
    console.log('cold');
}

// can use arrow functions too and has same effect
const canada2 = () => {
    console.log('cold');
}

// Function Declaration
function sayHello() {
    console.log('Hello');
}

// call your function
// Invocation/Call/Execution - we are telling our JS Engine to run the code in the function
// we put those functions in memory or at least  we've assigned them to a variable

// we do a function invocation by running the function with the () and this creates an execution context
canada();
sayHello();

// canada function is defined (define what the function does) at Runtime - when we actually run the function or call or execute the function or invoke the function
// versus sayHello function  - this function gets defined at Parse Time - when the compiler initially looks at the code and starts hoisting and allocating memory

function marry(parson1, parson2) {
    console.log('arguments', arguments);
    console.log(Array.from(arguments))
    return `${parson1} and ${parson2} are getting married`;
}

function marry2(...args) {
    console.log('arguments', arguments);
    console.log(Array.from(arguments))
    return `${args[0]} and ${args[1]} are getting married`;
}

console.log(marry('Bob', 'Jane'));
console.log(marry2('Bob', 'Jane'));

// we dont get arguments in the global object. we get arguments in the execution context of the function only - it is only available in the execution context
