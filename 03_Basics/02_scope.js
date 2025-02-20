//var has global scope always that's why it is replaced with let and const which provides block level scope and global scope too

//Globe scope is different in browsers and nodeJs
{
    var x = 100
    let y = 20
}
{
    var x = 10 //x =100 will be overridden with x = 10
    let y = 30
}
// console.log(y);// not defined
