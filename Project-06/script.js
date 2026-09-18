console.log("=== TicketFlow ===");


let eventType;
let basePrice;

while (true) {
    eventType = Number(prompt(
        "Оберіть тип події:\n1 — кіно\n2 — театр\n3 — концерт"
    ));

    switch (eventType) {
        case 1:
            basePrice = 150;
            break;
        case 2:
            basePrice = 220;
            break;
        case 3:
            basePrice = 350;
            break;
        default:
            alert("Неправильний номер події!");
            continue;
    }

    break;
}


let dayType;

while (true) {
    dayType = Number(prompt(
        "Оберіть тип дня:\n1 — будній\n2 — вихідний"
    ));

    if (dayType === 1 || dayType === 2) {
        break;
    }

    alert("Неправильний тип дня!");
}


if (dayType === 2) {
    basePrice *= 1.15;
}


let ticketCount;

while (true) {
    ticketCount = Number(prompt(
        "Введіть кількість квитків від 1 до 6:"
    ));

    if (
        Number.isInteger(ticketCount) &&
        ticketCount >= 1 &&
        ticketCount <= 6
    ) {
        break;
    }

    alert("Кількість квитків повинна бути від 1 до 6!");
}


let processedTickets = 0;
let freeTickets = 0;
let discountedTickets = 0;
let fullPriceTickets = 0;
let totalSum = 0;


for (let i = 1; i <= ticketCount; i++) {


    let age;

    while (true) {
        age = Number(prompt(
            `Введіть вік для квитка №${i}.\n` +
            `Введіть -1, щоб завершити оформлення.`
        ));

        if (age === -1) {
            break;
        }

        if (
            Number.isInteger(age) &&
            age >= 0 &&
            age <= 120
        ) {
            break;
        }

        alert("Некоректний вік!");
    }

    if (age === -1) {
        break;
    }

    processedTickets++;

    let ticketPrice = basePrice;
    let hasDiscount = false;

    if (age >= 0 && age <= 5) {
        freeTickets++;

        console.log(`Квиток №${i}: безкоштовний`);

        continue;
    }

    if (age >= 6 && age <= 12) {
        ticketPrice *= 0.5;
        hasDiscount = true;
    }
    else if (age >= 13 && age <= 17) {
        ticketPrice *= 0.8;
        hasDiscount = true;
    }
    else if (age >= 18 && age <= 59) {
        ticketPrice = basePrice;
    }
    else if (age >= 60) {
        ticketPrice *= 0.75;
        hasDiscount = true;
    }

    if (age >= 18 && age <= 25) {

        let studentTicket;

        while (true) {
            studentTicket = prompt(
                "Чи є студентський квиток?\n1 — так\n2 — ні"
            );

            if (studentTicket === "1" || studentTicket === "2") {
                break;
            }

            alert("Введіть 1 або 2!");
        }

        if (studentTicket === "1") {
            ticketPrice *= 0.9;
            hasDiscount = true;
        }
    }

    if (hasDiscount) {
        discountedTickets++;
    }
    else {
        fullPriceTickets++;
    }

    totalSum += ticketPrice;

    console.log(
        `Квиток №${i}: ${ticketPrice.toFixed(2)} грн`
    );
}

let additionalDiscount = 0;

if (totalSum > 1000) {
    additionalDiscount = totalSum * 0.05;
    totalSum -= additionalDiscount;
}

console.log("=== Підсумок ===");
console.log(`Оброблено квитків: ${processedTickets}`);
console.log(`Безкоштовних: ${freeTickets}`);
console.log(`Зі знижкою: ${discountedTickets}`);
console.log(`За повною ціною: ${fullPriceTickets}`);
console.log(
    `Додаткова знижка: ${additionalDiscount.toFixed(2)} грн`
);
console.log(`Загальна сума: ${totalSum.toFixed(2)} грн`);

alert(
    `=== TicketFlow ===\n\n` +
    `Оброблено квитків: ${processedTickets}\n` +
    `Безкоштовних: ${freeTickets}\n` +
    `Зі знижкою: ${discountedTickets}\n` +
    `За повною ціною: ${fullPriceTickets}\n` +
    `Додаткова знижка: ${additionalDiscount.toFixed(2)} грн\n` +
    `Загальна сума: ${totalSum.toFixed(2)} грн`
);