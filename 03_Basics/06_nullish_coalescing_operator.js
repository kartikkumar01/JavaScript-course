// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//Normally it is used when we request somthing from other source and the null value or undefined is returned and at that time we want to store somthing else not null and undefined
//When we have null and undefined in our program then that is bad
function fetchData(){
    console.log(`Fetching data...`);
    console.log(`Error occured`);
    return `DATA`
}

let data = fetchData() ?? `Some error occured!!`
console.log(data);
