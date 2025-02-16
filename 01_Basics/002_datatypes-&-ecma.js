"use strict" //It defines latest version of JS

//Ecma basically standards/specifications likhta hai.
//ecma standard == qwerty standard


//Datatypes in JS
//Datatypes in JS are categorized in two types based on how they are stored in memory and how they are accessed.

//Primitive data types/ Basic data types => (Store values in stack / copy value is given to the variable)

//Number => 10 / 5.5 / NaN / Infinity
//String => 'hello' / "hello" / `hello`
//Boolean => true / false
//undefined => undefined
//null => null (default type is object which is a bug)
//bigint => large ranges jab number datatype kam pad jaaye
//symbol => jada tar react me use karte hai, (uniqueness) ke liye

//USER DETAILS
let userName = 'Kartik Kumar'
let age = 50
let isWorking = false
let profession;
let bmi = null 

console.table([
    typeof userName,
    typeof age,
    typeof isWorking,
    typeof profession,
    typeof bmi
]);

// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 'string'    │
// │ 1       │ 'number'    │
// │ 2       │ 'boolean'   │
// │ 3       │ 'undefined' │
// │ 4       │ 'object'    │
// └─────────┴─────────────┘