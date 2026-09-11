let n = Number(prompt("Введіть кількість учасників"));

let sum = 0;
let count90 = 0;
let count60 = 0;
let countLow = 0;

let max = 0;
let min = 100;
let first100 = -1;

for (let i = 1; i <= n; i++) {
    let result = Number(prompt(`Введіть результат учасника ${i} (0-100)`));

    while (result < 0 || result > 100 || isNaN(result)) {
        result = Number(prompt("Неправильне значення. Введіть ще раз (0-100)"));
    }

    sum += result;

    if (result >= 90) {
        count90++;
    } else if (result >= 60) {
        count60++;
    } else {
        countLow++;
    }

    if (result > max) {
        max = result;
    }

    if (result < min) {
        min = result;
    }

    if (result === 100 && first100 === -1) {
        first100 = i;
    }
}

let average = sum / n;

alert(
    `Середній результат: ${average.toFixed(2)}
90–100 балів: ${count90}
60–89 балів: ${count60}
Нижче 60: ${countLow}
Найвищий результат: ${max}
Найнижчий результат: ${min}
Перший учасник зі 100 балами: ${first100 === -1 ? "немає" : first100}`
);