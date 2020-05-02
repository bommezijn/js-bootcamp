# Day 3 - Data Structures

## Binding and scopes

Bindings are variables that have a value assigned to it. Scoping is basically telling you whether a variable is accessible from inside a {} or outside a {}

## Hoisting 

Is pulling the declarations of variables and functions to the top of the compiled stack for later initialization or execution.

## Closures

Closures control what is and isn't in a scope of a function, along with variables that are shared between sibling and parent functions within the same scope.

A `closure` is the combination of a function bundled together (enclosed) with reference to its surrounding state (lexical environment). 

Meaning a closure can give you access to an outer function's scope within the inner function.
Closures are created at the function creation (function creation time).

The common usecase of a closure is to give objects data privacy.