
const courses = [
    {
        id: 1,
        title: "JavaScript для початківців",
        category: "Програмування",
        price: 1200,
        duration: 40,
        rating: 4.8,
        available: true
    },
    {
        id: 2,
        title: "HTML та CSS",
        category: "Веброзробка",
        price: 800,
        duration: 25,
        rating: 4.5,
        available: true
    },
    {
        id: 3,
        title: "Python з нуля",
        category: "Програмування",
        price: 1500,
        duration: 50,
        rating: 4.9,
        available: true
    },
    {
        id: 4,
        title: "Основи вебдизайну",
        category: "Дизайн",
        price: 950,
        duration: 30,
        rating: 4.3,
        available: false
    },
    {
        id: 5,
        title: "Робота з базами даних",
        category: "Програмування",
        price: 1800,
        duration: 45,
        rating: 4.7,
        available: true
    },
    {
        id: 6,
        title: "Графічний дизайн",
        category: "Дизайн",
        price: 1100,
        duration: 35,
        rating: 4.6,
        available: true
    },
    {
        id: 7,
        title: "Основи кібербезпеки",
        category: "Безпека",
        price: 2000,
        duration: 60,
        rating: 4.9,
        available: false
    },
    {
        id: 8,
        title: "React для початківців",
        category: "Веброзробка",
        price: 1600,
        duration: 40,
        rating: 4.8,
        available: true
    }
];

function findCourseById(id) {
    return courses.find(course => course.id === id);
}

function findCoursesByCategory(category) {
    return courses.filter(course =>
        course.category.toLowerCase() === category.toLowerCase()
    );
}

function findCoursesByPrice(maxPrice) {
    return courses.filter(course => course.price <= maxPrice);
}

function findCoursesByTitle(part) {
    return courses.filter(course =>
        course.title.toLowerCase().includes(part.toLowerCase())
    );
}

function getCourseTitles() {
    return courses.map(course => course.title);
}

function getDiscountedCourses() {
    return courses.map(course => ({
        title: course.title,
        price: Number((course.price * 0.85).toFixed(2))
    }));
}

function sortCoursesByPrice() {
    return [...courses].sort((a, b) => a.price - b.price);
}

function sortCoursesByRating() {
    return [...courses].sort((a, b) => b.rating - a.rating);
}

function sortCoursesByTitle() {
    return [...courses].sort((a, b) =>
        a.title.localeCompare(b.title, "uk")
    );
}

function getAvailableCoursesStatistics() {
    const availableCourses = courses.filter(course => course.available);

    const totalPrice = availableCourses.reduce(
        (sum, course) => sum + course.price,
        0
    );

    const averagePrice = availableCourses.length > 0
        ? totalPrice / availableCourses.length
        : 0;

    return {
        count: availableCourses.length,
        totalPrice,
        averagePrice
    };
}

function formatCourse(course) {
    return `ID: ${course.id}
Назва: ${course.title}
Категорія: ${course.category}
Ціна: ${course.price} грн
Тривалість: ${course.duration} год.
Рейтинг: ${course.rating}
Доступність: ${course.available ? "Так" : "Ні"}`;
}

function showCourses(list) {
    if (list.length === 0) {
        alert("Курсів не знайдено.");
        return;
    }

    alert(list.map(formatCourse).join("\n\n"));
}

function showMenu() {
    return prompt(
        "=== КАТАЛОГ ОНЛАЙН-КУРСІВ ===\n\n" +
        "1 — Знайти курс за ID\n" +
        "2 — Курси за категорією\n" +
        "3 — Курси за максимальною ціною\n" +
        "4 — Пошук за частиною назви\n" +
        "5 — Вивести назви всіх курсів\n" +
        "6 — Ціни зі знижкою 15%\n" +
        "7 — Сортування за зростанням ціни\n" +
        "8 — Сортування за спаданням рейтингу\n" +
        "9 — Сортування за назвою\n" +
        "10 — Статистика доступних курсів\n" +
        "0 — Вихід\n\n" +
        "Введіть номер операції:"
    );
}

function runOperation(choice) {
    let value;
    let result;

    switch (choice) {
        case 1:
            value = prompt("Введіть ID курсу:");

            if (value === null || value.trim() === "" ||
                !Number.isInteger(Number(value)) || Number(value) <= 0) {
                alert("Некоректний ID.");
                break;
            }

            result = findCourseById(Number(value));

            if (result) {
                alert(formatCourse(result));
            } else {
                alert("Курс із таким ID не знайдено.");
            }
            break;

        case 2:
            value = prompt("Введіть категорію курсу:");

            if (value === null || value.trim() === "") {
                alert("Категорію не введено.");
                break;
            }

            showCourses(findCoursesByCategory(value.trim()));
            break;

        case 3:
            value = prompt("Введіть максимальну ціну курсу:");

            if (value === null || value.trim() === "" ||
                !Number.isFinite(Number(value)) || Number(value) < 0) {
                alert("Введіть коректну невід'ємну суму.");
                break;
            }

            showCourses(findCoursesByPrice(Number(value)));
            break;

        case 4:
            value = prompt("Введіть частину назви курсу:");

            if (value === null || value.trim() === "") {
                alert("Введіть текст для пошуку.");
                break;
            }

            showCourses(findCoursesByTitle(value.trim()));
            break;

        case 5:
            alert(
                "Назви курсів:\n\n" +
                getCourseTitles()
                    .map((title, index) => `${index + 1}. ${title}`)
                    .join("\n")
            );
            break;

        case 6:
            result = getDiscountedCourses();

            alert(
                "Ціни зі знижкою 15%:\n\n" +
                result.map(course =>
                    `${course.title} — ${course.price} грн`
                ).join("\n")
            );
            break;

        case 7:
            showCourses(sortCoursesByPrice());
            break;

        case 8:
            showCourses(sortCoursesByRating());
            break;

        case 9:
            showCourses(sortCoursesByTitle());
            break;

        case 10:
            result = getAvailableCoursesStatistics();

            alert(
                `Кількість доступних курсів: ${result.count}\n` +
                `Загальна вартість: ${result.totalPrice} грн\n` +
                `Середня вартість: ${result.averagePrice.toFixed(2)} грн`
            );
            break;

        case 0:
            return false;

        default:
            alert("Некоректний пункт меню. Введіть число від 0 до 10.");
    }

    return true;
}

let continueMenu = true;

do {
    const choice = showMenu();

    if (choice === null) {
        continueMenu = false;
    } else if (choice.trim() === "" ||
        !Number.isInteger(Number(choice))) {
        alert("Введіть ціле число від 0 до 10.");
        continueMenu = confirm("Повернутися до меню?");
    } else if (Number(choice) === 0) {
        continueMenu = false;
    } else {
        runOperation(Number(choice));
        continueMenu = confirm("Повернутися до меню?");
    }
} while (continueMenu);

alert("Роботу з каталогом завершено!");
