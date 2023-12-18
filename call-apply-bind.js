// call() apply() bind()
// call and apply mostly just call functions but can do more

// all functions use call() when invoking a function
function a() {
    console.log('hi');
}

console.log(a()); // hi
console.log(a.call()); // hi
console.log(a.apply()); // hi


const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

console.log(wizard.heal()); // 100

const archer = {
    name: 'Robin Hood',
    health: 30,
}
console.log(archer);
// console.log(wizard.heal.call(archer)); // 100
// console.log(wizard.heal.call(archer, 10, 20)); // 100
// console.log(archer);
// console.log(wizard.heal.apply(archer, [100, 20])); // 100 - apply takes an array of parameters
console.log(archer);
// borrow a function from wizard and heal the archer - borrow methods of other objects to keep DRY and not to add to memory,lot less bugs in our code
// use call and apply to borrow methods

// bind() - returns a new function with a certain context and parameters, whereas call and apply invoke the function immediately
// You see bind unlike call and apply that immediately runs a function. Bind returns a new function with a certain context and parameters.
// And it's usually used when we want a function to be called later on with a certain type of context or a certain type of this keyword.


const healArcher = wizard.heal.bind(archer, 100, 20);
console.log(healArcher()); // 100