//   INPUT? --------> FUNCTION ------> RETURN?
//function is like packing some instructions in a block which can be used again and again
//jese coffee machine is a function which takes coffebeans, processess and return a hot coffee

/*
function hello(param1, param2){
    ----body/definition---
}
hello(arg1, arg2) //calling
hello //reference [react me kaam ayega]
*/    

//function will not do anything after returning****

//function with default parameter and return type
function greet(name = 'user'){
    return `Welcome ${name}`
}

// packed thing ------> ...spreadOperator ------> many things
let arr = [1,2,3,4,5]
console.log(...arr) // 1 2 3 4 5

//function with rest operator
function addCartPrices(...price){
    console.log(price[0])
}
// many things -----> ...restOperator -------> pack all together
addCartPrices(1,2,3,4,5)

//function taking object and array
function takeObj({name , age}){
    console.log(`Hi ${name}, you are ${age} years old !`)
}

function takeArray([one, two]){
    console.log(`Your first priority is ${one} and second is ${two}`)
}

takeObj({
    name : 'kartik',
    age : 20
})

takeArray(['Js', 'College'])