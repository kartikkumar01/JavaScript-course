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


//FOR OF - (iterate maps, strings and arrays)
//For each - arrays