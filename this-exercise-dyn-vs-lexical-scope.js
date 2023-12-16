const a = function() {
    console.log('a', this);
    const b = function() {
        console.log('b', this);
        const c = {
            hi: function() {
            console.log('c', this);
        }}
        c.hi()
    }
    b();
}


const obj = {
    name: 'matt',
    sing() 
    {
        console.log('a', this);
        var anotherFunc = function() {
            console.log('b', this);
        }
        anotherFunc();
    }
}

// this in b will be window - one of the biggest gotchas when it comes to this keyword, because the thiskeyword is not lexical scoped. That is, it doesn't matter where it is written, it matters how the function was called.