"use strict" //It defines latest version of JS

//Mocha->Livescript->Javascript (Vs code is made with Js)

//Ecma International is a nonprofit standards organization for information and communication systems. It acquired its current name in 1994, when the European Computer Manufacturers Association changed its name to reflect the organization's global reach and activities.

//Ecma basically standards/specifications likhta hai.

//Ecma se pehle, sabhi browser apna apna raaj karte the, ki hamare browser me ye lang chalegi, kisi me koi, kisi me koi.
//  Developers ko pareshani na ho isliye , JS wale ecma ke paas gaye or unse js ko sabhi browser ke liye standard set karwa diya.

//Ab Ecma JS ke liye naye naye versions nikalti rehti hai or naye features add hote rehte hai. Jese spread operator, arrow functions. 

//Datatypes in JS
//Primitive data types/ Basic data types => (Store values in stack / actual value is given to the variable)

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