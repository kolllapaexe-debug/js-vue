function getTotalPrices(prices: number[]): number {
    let sum: number = 0;

    for (let i: number = 0; i < prices.length; i++) {
        sum += prices[i];
    }

    return sum;
}

function getCount(): number {
    let count: number = Number(prompt("Введіть кількість чисел:"));
    return count;
}

function getNumbers(count: number): number[] {
    let numbers: number[] = [];

    for (let i: number = 0; i < count; i++) {
        let number: number = Number(prompt(`Введіть число ${i + 1}:`));
        numbers.push(number);
    }

    return numbers;
}

function getEvenNumbers(numbers: number[]): number[] {
    let evenNumbers: number[] = [];

    for (let i: number = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
}

let count: number = getCount();

let numbers: number[] = getNumbers(count);

let evenNumbers: number[] = getEvenNumbers(numbers);

console.log("Парні числа:", evenNumbers);