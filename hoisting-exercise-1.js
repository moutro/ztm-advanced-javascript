var one = 1;
var one = 2;

console.log(one);

// during execution it returns 2 
// what happens during hoisting? 
// during hoisting it returns undefined , one = undefined;
// with variables they are partially hoisted so we have "undefined" to that variable
// with a function declaration we FULLY hoist it so something gets put in memory during the creation phase


a()

function a() {
    console.log('hi');
}

function a() {
    console.log('bye');
}
// with a function declaration we FULLY hoist it so something gets put in memory during the creation phase
// during execution it returns bye
// Because we're doing it one after another It's going to rewrite that place in memory to include console.log bye.
// it doesnt matter if you put the a() after the first or the second function....its all about hoisting and execution order.!!!!!!

