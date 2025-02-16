//Datatypes in JS are categorized in two types based on how they are stored in memory and how they are accessed.

//Primitive / Basic Types (stored in stack[copy of value is provided])
// 1) number
// 2) string 
// 3) boolean 
// 4) undefined 
// 5) null 
// 6) bigint 
// 7) symbol 

//Referenced / derived Types (stored in heap[reference is provided])
// 1) object (it is not {}, it is some entity which has properties and may have methods) => student is object
// 2) array (it is not [], it is list of similar type of things) => marks of student
// 3) function (it is not ()=>{}, it is a piece of instructions that may take some input, process and returns a result.) => teacher is a function which takes student paper as input , checks it, and return marks

//NOW again why derived datatypes jab primitive se kaam chal sakta hi. 
//Ye actually me complex, relative data ko store karne me efficient hai.
//functions provide readablity, reusability, and provides abstraction