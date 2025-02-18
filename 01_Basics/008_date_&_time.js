//Date object is complex in js and it is shifting to Temporal object
//Date object stores the particular INSTANCE date and time when the object is created
let date = new Date()
//simplifying the date
console.log(date.toString()); // Tue Feb 18 2025 10:49:00 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleString()); // 2/18/2025, 10:49:00 AM
console.log(date.toDateString()); // Tue Feb 18 2025
console.log(date.toISOString()); // 2025-02-18T10:52:09.911Z
console.log(date.toLocaleDateString()); // 2/18/2025
console.log(date.toLocaleTimeString()); // 10:53:37 AM
console.log(date.toTimeString()); //10:54:21 GMT+0000 (Coordinated Universal Time)

//Passing our own date
// Date(yyyy, m, dd)
let date1 = new Date(2004, 6, 15)

console.log(date1.toString()); //Thu Jul 15 2004 00:00:00 GMT+0000 (Coordinated Universal Time)
// Date(yyyy, m, dd, hh,mm, ss, ms)
let date2 = new Date(2004, 6, 15, 12, 45, 52, 10, 4) 
console.log(date2.toString()); // Thu Jul 15 2004 12:45:52 GMT+0000 (Coordinated Universal Time)

//timestamps in js
let timestamp1 = Date.now() //gives miliseconds from jan 1 1970
console.log(timestamp1); //number

//converting date to miliseconds from 1 jan 1970
let timestamp2 = date2.getTime()
console.log(timestamp2);
console.log(Math.round(timestamp2 / 1000)); //converting miliseconds to seconds


console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getFullYear());
console.log(new Date().getHours());


console.log(new Date().toLocaleString());
console.log(new Date().toLocaleString('default', {
    day : "2-digit",
    month : "long",
    year: "numeric",
    hour:"numeric"
}))