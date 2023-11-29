// Memory Leak

// 1. Global Variable
let a = 10;
let b = 20;
let c = 30;

// 2. Event listeners
const element = document.getElementById('element');
element.addEventListener('click', onclick);

// 3. setInterval
setInterval(() => {
    // referencing objects....garbage collection wont clear it bec we keep referencing the objects and keeps running and running  
}, 1000);