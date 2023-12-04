// will return 1,2,3,4 final 5
// because you are assigning var to the variable i so outside this {} block there is access

function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final',i);
}

loop();

// if we change var to let or const it will return undefined because let and const are block scoped
// cant use i outside of its blocked scoped {} environment

function loop2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final',i);
}

loop2();