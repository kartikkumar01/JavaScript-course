//Objects are created in two types: by literal or by constructor
//objects created with constructor are SINGLETON

//creating a symbol
let sym = Symbol('This is unique symbol')

//creating object by Object constructor
// let obj = new Object()

//creating an object by literal
let user = {
    name : "kartik",
    age : 50,
    course : 'Javascript',
    skills : ['html', 'css', 'JS'],
    [sym] : 'i am unique'
}

//accessing values in object
console.log(user.age);
console.log(user.skills[1]);

//accessing symbols
console.log(user[sym]);
console.log(user.newage);

//adding key in object
user.email = 'hola@gmail.com';

//deleting key in object
delete user.skills

//Object.seal(user) => restrict add/delete
//Object.freeze(user) => restrict add/ delete/ modify

//checking key in object or not
console.log('age' in user); //latest syntax
console.log(user.hasOwnProperty('age')); //mdn say use Object.hasOwn()
console.log(Object.hasOwn(user, 'age'));

//extracting keys from object
console.log(Object.keys(user));

//extracting values from object
console.log(Object.values(user));


//MERGING TWO OBJECTS
let user1PersonalDetails = {
    name : 'Rohan',
    age : '50'
}

let user1Choices = {
    hobbies : ['cricket', 'pubg'],
    mostPurchased : ['books', 'games']
}

//merging by spread operator
let user1Merge = {...user1Choices, ...user1PersonalDetails}
console.log(user1Merge);

//merging by Object.assign(targetObject, sourceObject1, sourceObject2, .....)
let user1Merge1 = Object.assign({}, user1PersonalDetails, user1Choices)
console.log(user1Merge1);

//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let myObj = {
    name : 'kartik',
    age : 50,
    email : 'hola@gmail.com'
}

//destructure syntax  const {key : newName?,...} = objectName
const {name, age, email : mail} = myObj
console.log(mail)


