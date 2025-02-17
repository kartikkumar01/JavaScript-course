// Primitives (number, string, boolean) don’t have methods.
// When you call a method on a primitive, JavaScript temporarily converts it into an object.
// This is called Autoboxing.
// Explicitly creating an object with new Number(num) is not needed in most cases.

let num = 504574571
console.log(num.toString()); //converts number to string
console.log(num.toFixed(2)); 
console.log(num.toLocaleString()); 
console.log(num.toLocaleString('en-IN')); 

// Math is prebuilt object in js

console.log(Math.round(4.2564));
console.log(Math.ceil(4.2564));
console.log(Math.floor(4.2564));
console.log(Math.trunc(4.2564));
let min = 10, max = 20
let range = max - min
console.log(Math.random()); //by default return b/w 0-1
console.log(Math.trunc(Math.random() * (max - min + 1)) + min); //by default return b/w 0-1



