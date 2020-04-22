# Slides

There are six primitive types of data types:
- Undefined: automatically assigned to variables that just have been declared
- Boolean: Logical data type, can only have the values True or False
- Number: Numerical data type (In IEEE 754, other langs have different numeric types).
- String: A sequence of characters used to represent text
- Bigint: Numeric value in the arbitrary precision format, can't be used for Math object.
- Symbol: Anonymous unique value
And the other three are
- Null: Nonexistent or invalid
- Object (Arrays)
- Function: code sniper that can be called by other code or itself, a variable can also refer to the function. Can accept arguments.

----

Javascript is that weird kid on the block that allows the user to subtract an integer from a string
```
//ES5
var number = 1;
/*
    var declares function-scoped or globally-scoped variables and are processed before any code is executed (hoisting).
    var has no blockscope though which can cause confusion and bugs.
    initial value of var: undefined
    example:
    console.log(string);        // undefined
*/
var string = 'string';
/*
    console.log(string);        // string
*/
```
```
//ES6
let number = 1;
/*
    Declares a let, block-scoped variable. Optionally initializing it to a value
*/
const string = 'string';
/*
    Constants are block-scoped, just like variables defined with let. The value of const cannot be changed through reassignment and it can't be redeclared
*/
```

# Topics

## Read the first chapter of Eloquent JavaScript book.
[Eloquent Javascript CH0](https://eloquentjavascript.net/00_intro.html)

common task = appropriate application
unique / open-ended task = progamming (act of constructing a program).
Also the act of automating the mundane tasks that take alot of time fiddling to the matter of seconds.

Book will explain the basic principles of programming, remember programming is hard, the fundamental rules are simple and clear but can become complex quite quickly.

and then some about language, what is JS, what we can do with code and the overview of the book.

## Read about [ECMAScript 1](https://flaviocopes.com/ecmascript/)

ECMAScript is the standard upon which JS is based on and is usually abbreviated to ES.
Most popular currently is ES5 and ES6 but we already at ES2020 (See BigInt, dynamic import, Nullish coalescing, optional chaining, promise.allSettled and a few others).

TC39 are the big guys in the industry about JS and the browser vendors.

## Read about [What Javascript is and the standards](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md)

## [Watch fun fun function - var, let const](https://www.youtube.com/watch?v=sjyJBL5fkp8)

explains hoisting, function / global / block scoping and the three syntaxes for variables

## [Values from elequentJavaScript](https://eloquentjavascript.net/01_values.html)

explains indepth about values, operators, auto type conversion

## [JavaScript Conventions](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript#General_JavaScript_guidelines)

General conventions in MDN style. Ternary operators, strict equality, shortcuts, template literals etc.

----
# Exercises
[link naar exercise-1](exercises/exercise-1.js)

[link naar exercise-1 optional](https://github.com/workshopper/javascripting)