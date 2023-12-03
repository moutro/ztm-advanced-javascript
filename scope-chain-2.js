function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        console.log(c)
        return function printName() {
            var c = 'c';
            return 'JSON Bariamis';
        }
    }
}

// console.log(sayMyName());

// when we run the function it returns the part of it starting with function findName() all the way to the end

// so when you use two () () it will invoke the next function findName()  

// console.log(sayMyName() ());

console.log(sayMyName()()());

//  function lexical environment - that is findName is written inside of sayName function. So findName function's lexical environment is sayMyName, and printName function lexical environment is findName

// so printName has access to b and a
// findName has access to b and a
// remember the scope chain goes in reverse order so printName has access to c, b, and a, findName has access to b, and a, and sayMyName has access to a