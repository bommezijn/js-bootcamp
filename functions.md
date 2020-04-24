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

## Scopes

visible 

referecable

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
