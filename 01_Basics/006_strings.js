// Primitives (number, string, boolean) don’t have methods.
// When you call a method on a primitive, JavaScript temporarily converts it into an object.
// This is called Autoboxing.
// Explicitly creating an object with new Number(num) is not needed in most cases.

// let str = 'hi'
// str.length
//actually ->  new String(str).length Now here js is doing this behind the scenes which is called autoboxing

//NOW WHY JS IS DOING THIS?
//BCZ object is an entity which has properties and methods. we can use methods and properties on an object only

let name1 = 'kartik' //string primitive
let upperName1 = name1.toUpperCase() //agar object pe hi methods use ho sakte hai to yaha to name1 ek primitive hai lekin uspe bhi mehtods use ho rahe hai
//esa isliye kyuki **JS implicity converts primitive to temporary object so that we can use properties and methods**
//to js ne primitive uthaya or uski copy leke object bana diya


//STRING METHODS
let str = `The quick brown fox jumps over the lazy dog.`

// at(index) - supports -ve and +ve index
console.log(str.at(5))
console.log(str.at(-1)) //last character
// charAt(index) - supports positive index only
console.log(str.charAt(5))

//charCodeAt(index) - utf-16 upto 65,535
console.log(str.charCodeAt(5))
//codePointAt(index)  => covers all unicode
let newStr = `☃★♲🌍`
console.log(newStr.codePointAt(3))

// concat(str1, str2, ...) 
console.log(str.concat(` `, `hi`))

// startsWith(string, ?from) 
console.log(str.startsWith(`The`)) //true
console.log(str.startsWith(`quick`, 4)) //true
// endsWith(string, ?till) 
console.log(str.endsWith(`dog.`))
console.log(str.endsWith(`quick`, 9)) //true

// includes(string, ?from) --returns true/false
console.log(str.includes(`fox`))
console.log(str.includes(`fox`, 16))
// search(string, ?from) --returns index
console.log(str.search(`fox`))
console.log(str.search(`fox`, 16))

// indexOf(string) -- returns starting index
console.log(str.indexOf(`fox`))
//  lastIndexOf(string)
console.log(`ababab`.lastIndexOf(`a`))

// isWellFormed() & toWellFormed()
//not well formed = ab\uD800
//well formed = ab�
console.log(`ab\uD800`.isWellFormed())
console.log(`ab\uD800`.toWellFormed())

//padStart(string, ?padcharacter)
console.log(str.padStart(100, `*`))
// padEnd(string, ?padcharacter) --redefines the length of string
console.log(str.padEnd(100))
console.log(str.padEnd(100, `*`))


//repeat(times)
console.log(`kartik `.repeat(5));

//replace(actualStr, tobereplacedwithstr)
console.log(str.replace(`fox`, `ant`));
//replaceAll(actualStr, tobereplacedwithstr)
console.log(str.replaceAll(`he`, `HE`));

//substring(startIndex, ?endIndex)
console.log(str.substring(4));
console.log(str.substring(4,8));
//slice(startIndex,?endIndex) --it can take -ve index
console.log(str.slice(5));
console.log(str.slice(2,15));

//split(str)
console.log(`my name is kartik and i am learning, js`.split(`and`));

//toLowerCase()
console.log(str.toLowerCase());
//toUpperCase()
console.log(str.toUpperCase());

//trimStart()
console.log(`   hello world      `.trimStart());
//trimEnd()
console.log(`   hello world      `.trimEnd());
//trim()
console.log(`   hello world      `.trim());

// main functions - trim, startWith, endsWith, toUpperCase, toLowerCase, split, slice, replace, search, includes, repeat, indexOf, concat







