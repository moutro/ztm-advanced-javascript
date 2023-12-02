var favoriteFood = 'pizza';

var foodThoughts = function () {
    console.log("Original favorite food: " + favoriteFood);

    var favoriteFood = 'burgers';

    console.log("New favorite food: " + favoriteFood);
};

console.log(foodThoughts());

// What happens during the Creation Phase:::::
// First the variable is hoisted to the top of the function and will be undefined. becomes var favoriteFood = undefined.
// var favoriteFood = undefined;
// var foodThoughts = undefined;
// creation phase is now done since there are no more var's or functions left


// What happens during the Execution Phase:::::
//during the execution phase, it's almost as if we don't need the variable Key words anymore because they've been created during the creation phase. So now we start executing the code. The first execution that we do is favorite food equals to grapes.
// then we have foodThoughts that gets now assigned to this function and then JS engine sees the () on line 11 ... and says its time to run this function
// as soon as we run this function a new Execution context is created and inside this execution context (inside of this function is a new world {} and then), hoisting happens during the creation phase and var favoriteFood now inside the function gets hoisted to the top of the function and becomes var favoriteFood = undefined. that is why the first one is undefined and the second is burgers.


// we get undefined in the first hoisting happens on every execution context. Any time we run a function. A new execution context gets created and we have to go through the creation phase and execution phase again.

// avoid using hoisting in your code by not using "var" keywordd - use const and let only
