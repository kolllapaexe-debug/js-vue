let prices = [120, 250, 180, 300, 150, 400];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log("Загальний виторг:", total, "грн");

let count = 0;

for (let price of prices) {
    if (price >= 200) {
        count++;
    }
}

console.log("Квитків від 200 грн:", count);

let average = total / prices.length;
console.log("Середня ціна:", average.toFixed(2), "грн");

let total2 = 0;
prices.forEach(price => {
    total2 += price;
});
console.log("Виторг через forEach:", total2, "грн");

let expensiveTickets = prices.filter(price => price >= 200);
console.log("Квитків від 200 грн через filter:", expensiveTickets.length);