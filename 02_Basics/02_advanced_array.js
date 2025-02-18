let fruits = [`mango`, `apple`, `grapes`, `papaya`, `orange`, `litchi`]
let vegetables = new Array(`cauliflower`, `lagyfinger`, `eggplant`, `cabbage`, `capcicum`)

//concat v/s spread operator
let concat1 = fruits.concat(vegetables)
let concat2 = fruits.concat(vegetables, fruits) //concat multiple arrays
let spread = [...fruits, ...vegetables, ...`kartik`]
console.log(spread);

//flat(depth) simplifies the concatinated array into any depth
let nestedArr = [1,[2,[3,[4,[5,[6]]]]]]
let simplifiedArr = nestedArr.flat(Infinity)
console.log(nestedArr);
console.log(simplifiedArr);

//isArray(any)
console.log(Array.isArray([]));

//from([]) -> converts array from iterable
console.log(Array.from("kartik")); // [ 'k', 'a', 'r', 't', 'i', 'k' ]

//of(-,-,-,-,...) => returns a new array from the set of elements
console.log(Array.of(1,2,3,4,5));
console.log([1,2,3,4,5]);



