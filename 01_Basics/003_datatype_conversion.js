//Kai baar data ko dusre datatype me convert karne ki zaroorat pad sakti hai
//Jese form se data aa raha string me or hume convert karna hai number me.
//esa calculator ke case me ho skta hai.

//String -> Number
    console.log(Number('50')) //50
    console.log(Number('50gkdfj')) //NaN
    console.log(Number('gkdfj')) // NaN
    console.log(Number('')) // 0

//Boolean -> Number
    console.log(Number(true)) //1
    console.log(Number(false)) //0

//undefined -> Number
    console.log(Number(undefined)) //NaN


//null -> Number
    console.log(Number(null)) //0

//number -> Number
    console.log(Number(50))//50 or same



//null -> String
    console.log(String(null)) //'null'

// undefined -> String
    console.log(String(undefined)) //'undefined'

// Boolean -> String
    console.log(String(true)) //'true'
    console.log(String(false)) //'false'

//Number -> String
    console.log(String(50)) //'50'
    console.log(String(50.5)) //'50.5'
    console.log(String(NaN)) //'NaN'
    console.log(String(Infinity)) //'Infinity'
    
// String -> String
    console.log(String('hello')) //'hello' or same
    

// Falsy Values for anything -> boolean [f 4 falsy , f 4 five]
console.log(Boolean(NaN)) //false
console.log(Boolean(0)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean('')) //false
//all others are true