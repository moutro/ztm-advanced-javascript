// function currying

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(5)); // 10

let multiplyByTen = multiply.bind(this, 3);
console.log(multiplyByTen(10)); // 30