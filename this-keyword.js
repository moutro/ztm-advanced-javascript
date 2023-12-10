// THIS is the object that the function is a property of

// obj.someFunction(this); // we have an object and this object has some function. and inside of this function, when we do something, we have accesss to the THIS keyword.

console.log(this); // window object

function b() {
    'use strict'
    console.log(this); // window object
}

console.log(b());

// can use 'use strict' tag. And as we'll see later on, one of the pitfalls with this is that we unexpectedly have this referredto the window object when we think it should be something else

// ES6 has 'use strict' by default now

// example why this is useful and why was created

const obj = {
    name: 'matt',
    sing() {
        return 'lalala ' + this.name;
    },
    singAgain() {
        return this.sing() + '!';
    }
}

console.log(obj.sing());
console.log(obj.singAgain());

// this refers to whatever is to the left of the dot - rule of thumb
// Remember, with an object, we access properties and methods of an object.

// And a method of an object is a function.

// So methods are functions that are inside of objects.

// So the property and methods can be accessed with this dot notation.

// And when it comes to this, this simply refers to, hey, inside of this function, what's to the left

// of the dot well object?

// And that's all you really need to know about this.

// It's whatever to the left of the dot, which is the object that the function is a property of.

// REASONS THIS KEYWORD BENEFITS US
// 1. gives methods access to their object
// it gives sind() access to the objects so that it can use properties and methods within that object...so, its siblings.

// 2. the THIS keyword is so important or it benefits us is that we can execute the same code for multiple objects.

function importantPerson() {
    console.log(this.name);
}

const name = 'Sunny';

const obj1 = {
    name: 'Cassy',
    importantPerson
}

const obj2 = {
    name: 'Joe',
    importantPerson
}

// console.log(obj1.importantPerson());
// console.log(obj2.importantPerson());

console.log(obj1.importantPerson());