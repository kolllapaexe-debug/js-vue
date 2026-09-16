let age;

while (true) {
    age = Number(prompt("Введіть свій вік (від 12 до 90):"));

    if (age >= 12 && age <= 90) {
        break;
    } else {
        alert("Некоректний вік. Спробуйте ще раз.");
    }
}

const correctPin = "4321";
let attempts = 0;
let access = false;

while (attempts < 3) {
    let pin = prompt("Введіть PIN:");

    attempts++;

    if (pin === correctPin) {
        access = true;
        break;
    } else {
        if (attempts < 3) {
            alert("Неправильний PIN. Залишилось спроб: " + (3 - attempts));
        } else {
            alert("Ви використали всі 3 спроби.");
        }
    }
}

if (access) {
    let choice;

    do {
        choice = prompt(
            "МЕНЮ:\n" +
            "1 - Особистий кабінет\n" +
            "2 - Повідомлення\n" +
            "3 - Налаштування\n" +
            "0 - Вихід\n\n" +
            "Оберіть пункт:"
        );

        switch (choice) {
            case "1":
                alert("Особистий кабінет");
                break;

            case "2":
                alert("Повідомлення");
                break;

            case "3":
                alert("Налаштування");
                break;

            case "0":
                alert("Вихід із меню.");
                break;

            default:
                alert("Такого пункту немає.");
        }

    } while (choice !== "0");

} else {
    alert("Доступ заборонено.");
}