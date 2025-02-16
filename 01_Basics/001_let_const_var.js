//Variables ek dibbe ki tarah hai jispe label laga do or kuch andar daal do

//constant (Jo kabhi change nahi hoga)
const gender = 'Male'
// gender = 'Female' (Not possible)

//variables (let or var[not used due to global scope issue])
let userName = "Kartik Kumar"
userName = "Vishal"

console.table([gender, userName])
// ┌─────────┬──────────┐
// │ (index) │ Values   │
// ├─────────┼──────────┤
// │ 0       │ 'Male'   │
// │ 1       │ 'Vishal' │
// └─────────┴──────────┘


let interest;
console.log(interest) //undefined