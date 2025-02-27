//for in - returns a key (works on objects and arrays and strings)
let user = {
    name : 'kartik',
    age : 20
}
for (const key in user) {
    // console.log(key);// name age
}

let marks = [1,2,3,4,5]
for (const key in marks) {
    // console.log(key); // 0 1 2 3 4
}

//** Maps- store unique value, remembers order, not iterable
let map = new Map()
map.set('name', 'kartik')
map.set('course', 'BCA')
for (const key in map) {
    console.log(key); // prints nothing as maps are not iterable
}


//FOR EACH (iterate elements of array)
// Modify the following array to convert all names to uppercase using forEach:
let people = ["john", "jane", "smith"]
people.forEach( (element, index, array) => {
    array[index] = element.toUpperCase()
} )
// people.forEach(element => console.log(element))

//FOR IN (selects the key of object)
// Given a nested object, use for...in to print all keys and values, including nested ones:
let person = {
    name: "David",
    age: 30,
    address: {
        city: "Los Angeles",
        country: "USA"
    }
};
// console.log(person);

for(const key in person){
    if(typeof(person[key]) === 'object'){
        for(const k in person[key]){
            // console.log(`${key}.${k} : ${person[key][k]}`)
        }
    }else{
        // console.log(`${key} : ${person[key]}`)
    }
}

//FOR OF LOOP (Iterates over values)
// Given an array of objects representing students, use for...of to print each student's name and grade:
let students = [
    { name: "John", grade: 85 },
    { name: "Sarah", grade: 92 },
    { name: "Mike", grade: 78 }
];
for(const object of students){
    console.log(`${object.name} scored ${object.grade} marks `)
}
