//this keyword -> current context(object) ko refer karta hai
//context matlab kiske baare me baat ki ja rahi hai

//MYTH - arrow functions me this nahi hota

//nodeJS me this global me empty object ko refer karta hai
// but browser me ye Window object ko refer karta hai
console.log(typeof this); //object
console.log(this);


//=><=+++++ARROW FUNCTIONS+++++=><=
// 1) function expression =>  (anonymous function) & (named function) 
//functions can be stored in a variable
let logHello = function(){
    console.log('hello world');
}
logHello()

let logHelloWorld = logHello
logHelloWorld()

// 2) arrow function
let sayHola = () => {
    return 'hola'   
}
//if arrow function is only returning:[then no need to write return keyword]
//Now this is called implicit return
//above we were doing explicit return
let sayHola1 = () => 'hola'
//or we can enclose return in parentheses
let sayHola2 = () => ('hola') // this is used in react a lot
//() provides benefits while returning object
let returnObj = () => ({name : 'kartik'})





