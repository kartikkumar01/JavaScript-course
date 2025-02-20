// function expression are of two types =>  (anonymous function) & (named function) 
//IIFE is just invoking the function while it is created
//WHY IIFE(Immediate Invoke Function Expression)
// Reason1 : Somtimes we need to invoke somthing immediately like database connection function
// Reason 2 : Stopping the global scope pollution
// Invalid reason : kyuki immediatly invoke karana ho

//invoking a function
(function () {
    console.log('hello world');
}) ();

//let create another iife with arrow functions
( () => {
    console.log('I am arrow function');
}) ();

//iife with param and arg
( (name) => {
    console.log(`Hi, ${name}`);
    
}) ('kartik');