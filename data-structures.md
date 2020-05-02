# Day 3 - Data Structures

Sets of data that is structered in a certain way. Array's and Objects.
## Topics

### [Arrays by the coding train](https://www.youtube.com/watch?v=VIQoUghHSxU)

what is an array? A place of storing multiple values (list of values) Within block quotes
elem in array have an order, crucial key aspect. Arrays start at 0.
```
var arrayName[key]
```

### [Object by the coding train](https://www.youtube.com/watch?v=-e5h4IGKZRY)

collection of name value pairs (and other objects (nested objects)) within curly brackets
Is neat way to collect variables that are doing something with eachother. `key:value`

```
var objectName = {
    name: 'Nathan',
    dob: '21-02-1997',
    occupation: 'Student',
    bankAccount: 99999999,
    favFood: '🍜'
};

console.log(objectName.name + ' loves ' + objectName.favFood);
```

### [Read CH4 of Eloquent JavaScript](https://eloquentjavascript.net/04_data.html)
All JS values have properties, exceptions are `null` and `undefined`.
Something that is mentioned again is the `.length method`

Methods:
Properties that contain functions are generally called *methods* of the value they belong to. Example: .toUpperCase is a method of a string.
```jsx
cat.language = (langs) => {
    console.log(`the cat speaks '${langs}'`);
}
cat.language('miauw')
//the cat speaks 'miauw'
//the cat method language returns the language that the cat speaks
```
----

### [Read CH6 of Eloquent JavaScript](https://eloquentjavascript.net/06_object.html)

The more in-depth chapter about objects, object-oriented-programming (OOP) and the intricisies of it

## Encapsulation

The core itself of OOP is dividing a program in smaller pieces and make every piece responsible for managing its own state. This extends to how the piece of the program is kept to itself. This way the rest of the program isn't aware of what is happening in it.

The way these bits interact is through interfaces. an interface is a limited set of functions on abstract levels. properties that are part of the interface are called public, others which outside code isnt touched, is private.

this is the essence of encapsulattion, the ability of an object to be a container for its member properties incl. var and methods.

----
## Prototypes

Prototype is another object that is being used as a fallback source for the properties of an object.
When an object gets a request for a property that doesnt exist... it will go to the prototype.



 