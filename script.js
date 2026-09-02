
let productName = prompt("Enter your product name");
let price = Number(prompt("Enter your price"));
let quantity = Number(prompt("Enter your quantity"));
let delivery = Number(prompt("Enter your delivery"));
let discount = Number(prompt("Enter your discount"));


let totalCost = price * quantity * (100-discount)/100 + delivery;
console.log(`Total cost: ${totalCost} uah Product ${productName}`);
alert('Product' + productName +
"\nTotal cost: " + totalCost + " uah");