// for each do not return any values explicitly or implicitly
// so we can use filter which return array while checking condition
// map har ek value pe operation perform karta hai or har value return karta hai
// reduce shopping cart me kaafi use hota hai jaha hame bill ka total nikalna hota hai

// Real-World Scenario: E-Commerce Sales Analysis
// Imagine you are working for an e-commerce company and you have a list of customer orders. You need to:

// Extract the product names from the orders (map)
// Filter out orders where the total amount is below $50 (filter)
// Calculate the total revenue from all orders (reduce)

let orders = [
    { id: 1, product: "Laptop", amount: 1200 },
    { id: 2, product: "Phone", amount: 800 },
    { id: 3, product: "Mouse", amount: 25 },
    { id: 4, product: "Keyboard", amount: 45 },
    { id: 5, product: "Monitor", amount: 300 }
];

let productNames = orders.map((item) => {
    return item.product.toUpperCase()
})

let filter = orders.filter((item)=>{
    return (item.amount < 50)
})

let total = orders.reduce((acc,item)=>{
    return acc + item.amount
},0)

console.log(total)