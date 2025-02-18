// Primitives (number, string, boolean) don’t have methods.
// When you call a method on a primitive, JavaScript temporarily converts it into an object.
// This is called Autoboxing.
// Explicitly creating an object with new Number(num) is not needed in most cases.


//Number object
let num = 504574571
console.log(num.toString()); //converts number to string
console.log(num.toFixed(2)); 
console.log(num.toLocaleString()); 
console.log(num.toLocaleString('en-IN')); 
console.log(num.toPrecision(1)); //it is not decimal values, but digits from left to right , generally used in calculators

//Math object
console.log((Math.PI).toFixed(2)); //returns a pi value
console.log(Math.abs(4201));
console.log(Math.abs(-4201));
console.log(Math.min(25,65,1,64,10));
console.log(Math.max(25,65,1,64,10));
console.log(Math.pow(2, 3));
console.log(2**3); //same as Math.pow()
console.log(Math.sqrt(25));
console.log(Math.round(2.564));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.trunc(2.99999454));


//Math.random() is very very important
console.log(Math.random()); // return b/w 0-1
console.log(Math.random() * 10); // shift 1 decimal and returns b/w 0 - 9
console.log((Math.random() * 10) + 1); // just to shift range from 1-10 we add 1
let min = 15, max = 200
console.log(Math.trunc((Math.random() * (max - min)) + min)); //  just to shift range from 1-10 we add 1

