function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());

// ANSWER: the little brother function which returns the string no me gets hoisted. So, in the creation phase the JS engine first allocates memory for the first little brother function and as soon as it goes through the second little brother function it overwrites the first little brother function with the second little brother function. that's why the output is no me