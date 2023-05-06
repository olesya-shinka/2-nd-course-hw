let numMonth = Number(prompt('Введите номер месяца'));

function year(numMonth) {
    if (numMonth == 12 || numMonth == 1 || numMonth == 2) {
        console.log("Зима");
    } else if (numMonth == 3 || numMonth == 4 || numMonth == 5) {
        console.log("Весна");
    } else if (numMonth == 6 || numMonth == 7 || numMonth == 8) {
        console.log("Лето");
    } else if (numMonth == 9 || numMonth == 10 || numMonth == 11) {
        console.log("Осень");
    } else {
        console.log("Неивестное время года");
    }
}
year(numMonth);