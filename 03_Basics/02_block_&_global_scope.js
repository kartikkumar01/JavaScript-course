//var has global scope always that's why it is replaced with let and const which provides block level scope and global scope too
{
    var x = 100 //global scope
    let y = 20 //block scope
}

//scope is like papa and beta eating icecream jaha beta apne papa ki icecream le sakta hai par papa apne bete ki icecream nahi chin sakta
//isi tarah local global ko access kar sakta hai par global local ko nahi

//Global scope is different in browsers and nodeJs

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++---HOISTING
// Hoisting concept says you can access before declare
greet('kartik')
function greet(name){
    console.log(`hello ${name}`);
}

//Jab function ko variable me store karte hai to pehle access nahi kar sakte(hoisting, execution context vgera kuch use hua hai yaha pe jo sir age batayege)
greet2('kartik')
let greet2 = function (name)//THIS is called function expression
{
    console.log(`hello ${name}`);
}
