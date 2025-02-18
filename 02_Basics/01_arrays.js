//Arrays are objects in Javascript
let fruits = [`mango`, `apple`, `grapes`, `papaya`, `orange`, `litchi`]
let vegetables = new Array(`cauliflower`, `lagyfinger`, `eggplant`, `cabbage`, `capcicum`)

// console.log(typeof fruits) //object
console.log(fruits) //object
// console.log(typeof vegetables) //object

//Methods of array - push,pop
// console.log(fruits.push(`banana`))
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)

//Methods of array - unshift, shift
// console.log(fruits.unshift(`banana`))
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)

//sort() => //changes the original array
// console.log(fruits.sort());
// console.log(fruits);

//reverse() => // changes the original array
// console.log(fruits.reverse()); 
// console.log(fruits);

//includes(element)
// console.log(fruits.includes(`litchi`)); // true
// console.log(fruits.includes(`guava`)); // false

//indexOf(element)
// console.log(fruits.indexOf(`litchi`)); // 5
// console.log(fruits.indexOf(`guava`)); // -1


//join() => returns the string converted array
// console.log(fruits.join()); //mango,apple,grapes,papaya,orange,litchi

// slice(startIndex, endIndex[excluded]) // copies from the original array
// console.log(fruits.slice(1,5));
// console.log(fruits);

// splice(startIndex, endIndex[included]) => cuts from the original array
// console.log(fruits.splice(1,5));
// console.log(fruits);

//concat(array)
console.log(fruits.concat(vegetables));


