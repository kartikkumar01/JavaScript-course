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



let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

//YE HAI KUCH TRICKY OPERATIONS -------------JINPE KOI ZARURAT NAHI HAI (MATHA) MARNE KI
//HERE JS IS DOING IMPLICIT(APNEAAP) CONVERSION. JAB BHI STRING MILTA HAI TO SABHI OPERANDS KO STRING ME CONVERT KAR DETA HAI
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); //left to right execution hoti hai, jese hi string milta hai to sab string me convert ho jata hai
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


//sir ne bataya ki ye complex operations bhi hote hai, par hume inko zada samajhne ki need nahi hai kyuki real world production me is code ko easy to read code nahi mana jata. and READABILITY IS VERY IMPORTANT

//Increment prefix and postfix
//++x -> pehle increment karega fir x ki value return karega
//x++ -> pehle return karega fir x ki value increment karega