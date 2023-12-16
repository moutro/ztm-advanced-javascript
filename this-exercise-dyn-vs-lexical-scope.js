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

// this in b will be window - one of the biggest gotchas when it comes to this keyword, because the this keyword is not lexical scoped. That is, it doesn't matter where it is written, it matters how the function was called.

// the THIS keyword is actually dynamically scoped. That is, it doesn't matter where its written, it matters how the function was called.
// how do we avoid this pitfall?
// by using ARROW FUNCTIONS - the are lexically bound, that is they have a lexical THIS behavior unlike normal functions


const obj2 = {
    name: 'matt',
    sing() 
    {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this);
        }
        anotherFunc();
    }
}

// before arrow functions in ES6 we used 'bind' to this to fix this issue
const obj3 = {
    name: 'matt',
    sing() 
    {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this);
        }
        return anotherFunc.bind(this);
    }
}
