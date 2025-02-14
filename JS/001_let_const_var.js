// Jese amazon website hai usme kuch values ko store karna pad sakta hai, jese login karwate hue, signup karwate hue, to unko kaha karege
//isi chiz ke liye hai variables and constants
//ye ek dibbe ki tarah hai jispe label laga do or kuch andar daal do

//constant (Jo kabhi change nahi hoga)
const gender = 'Male'
// gender = 'Female' (Not possible)

//variables
//ab variables do tarah se ban sakte hai (let se or var se)
//var ab use nahi hota, ye ek purana concept hai.
//Isme dikkat ye thi ki na iska scope har jagah global rehta tha. Par hum chahte hai ki block me jo chiz hai vo bahar available na ho. Esa hum isliye chahte hai ki block ka apna variable ho, dusre block ka apna
//isliye hum (let) ka use karte hai[As it provides block level scope]
let userName = "Kartik Kumar"
userName = "Vishal"

//jada values ko print karane ka badiya tarika hai console.table([..., ..., ...])
console.table([gender, userName])
// ┌─────────┬──────────┐
// │ (index) │ Values   │
// ├─────────┼──────────┤
// │ 0       │ 'Male'   │
// │ 1       │ 'Vishal' │
// └─────────┴──────────┘


//Jab variable me value nahi denge to Js usme (undefined) daal deta hai
let interest;
console.log(interest)