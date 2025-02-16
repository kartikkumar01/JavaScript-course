//Equality check (==) / Strict equality check (===) / comparison operators(>, <, <=, >=) works differently with different datatype comparison
// JESE DIFFERENT DATAYPES PE OPERATIONS PERFORM KARTE HUE JS IMPLICIT CONVERSTION KARTA HAI USI TARAH DIFFERENT DATATYPES PE EQUALITY CHECK PERFORM KARTE HUE YA COMPARISON KARTE HUE JS IMPLICIT CONVERSION KARTA HAI. 

//YE TO SIMPLE HAI
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


//IT IS GOOD TO KNOW BUT NOT CONSIDERED A GOOD PRACTICE IN CODE AS IT DECREASE READABILITY FOR OTHERS AND MAKE SIMPLE THINGS COMPLEX
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (CHECKS DATAYPE FIRST THEN VALUE)

console.log("2" === 2);