// Very common interview question

console.log('1');
setTimeout(() => {console.log('2')}, 1000);
console.log('3');

// returns 1,3, undefined, 2


// reason is a common interview question is The reason that happens is that no matter how fast the set timeout timer happens, it still gets sent to the web API, still get sent to the callback queue and the event loop. Still needs to check those two checks. Hey, is the stack empty and has the entire file been run in our case? 
// No. We're still waiting on console.log to run. And only then will I push. Our callback function, our console log to our call stack.

console.log('1');
setTimeout(() => {console.log('2')}, 0);
console.log('3');

// still returns 1,3, undefined, 2