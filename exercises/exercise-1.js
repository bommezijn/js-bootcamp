//Dit is een comment
/*
    Dit is een blockComment
*/

var globalVar = 1;
var undefinedVar;
let incrementVar = 0;
incrementVar++;
console.log('getal is nu ' + incrementVar)

//Some assignments inbetween
// Assignment Basic JavaScript: Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside"
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);