//   INPUT? --------> FUNCTION ------> RETURN?

//function with no parameter and no return type
// function greet(){
//     console.log('Hello world')
// }

//function with parameter and no return type
// function greet(name){
//     console.log(`Welcom ${name}`)
// }

//function with default parameter and no return type
// function greet(name = 'user'){
//     console.log(`Welcom ${name}`)
// }

//function with default parameter and return type
// function greet(name = 'user'){
//     return `Welcome ${name}`
// }

//function with rest operator
function addCartPrices(...price){
    console.log(price[0])
}

addCartPrices(200,100,500,655)

