# Day 2 - Functions

## Slides



## Topics

### Functions; Params Args

### [Function Basics](https://www.youtube.com/watch?v=wRHAitGzBrg)

A function is a piece of repeatable code that you want to invoke multiple times
* modularity
* Reusability
```
function aFunction(parameter) {
    let minLength = 5;
    return parameter.length > minLength ? 'You can Pass' : 'STOP!';
}
```

### [Net Ninja](https://www.youtube.com/watch?v=xUI5Tsl2JpY)

functions fall under the object type.
```
const bFunction = function() {
    console.log('You are so Beta!');
}

bFunction()
// 'You are so Beta!'
```
Functions can be connected to a variable and called upon as the example written above.
functions are hoisted if they are declared. If they are expressed (see example) they are not hoisted and will return an err.

passing values through the function to do something, example: sending hello ${Name} (template literal Never forget Backticks)



### [Read CH3 of Eloquent JavaScript](https://eloquentjavascript.net/03_functions.html)

### Higher Order Functions (HOF)

A higher order functions are functions that take other functions as arguments or returns functions as their result. 

Taking a function as an argument is usually called a callback function.
The array functions are a good example of HOF's.
* map()
* sort()
* reduce()
* filter()
```jsx
//Without HOF
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];

for(let i = 0; i < birthYear.length; i++) {
  let age = 2018 - birthYear[i];
  ages.push(age);
}
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);

//With HOF
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);
```
[Reference to origin of the example](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad#ec74 "Higher Order Function Example")
## Scopes

visible 

referenceable

> the current context of execution
- Global scope
VS
- Local scope
- Function scope
    var binnen func
    func binnen func
    ```jsx
    function greeting() {
    	const name = ''; 
    }

    console.log(name);

    ```
VS
- Block scope
    binnen een actie
    example
    - if statement
    - for loop
    ```jsx
    if (true) {
    	var y = 5;  //<- block scope not function scope
    }
    console.log(y)
    ```

lexical scoping constant omhoog lopen tot aan de global

----
## Exercises
Finished the freecodecamp assignments.
