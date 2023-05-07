//задание 1

min(8, 4);
min(6, 6);
function min(a, b) {
    if (a > b) {
       return b;
    } else {
        return a;
    }
}
console.log(min(8, 4));
console.log(min(6, 6));

//задание 2

function even(num) {
    if (num % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
even(Number(prompt('Введите число')));

//задание 3

function numberQuare(num) {
    return num ** 2
}

console.log(numberQuare(prompt('Введите число')));

//задание 4

function printAge() {
    let age = Number(prompt('Сколько Вам лет?'));
    if (age <= 12) {
        console.log('Привет, друг!');
    } else if (age => 13) {
        console.log('Добро пожаловать!');
    } {
    if (age <= 0) {
        console.log('Вы ввели неправильное значение');
    }
    }
}
printAge();

//задание 5

function checkNum(x, y) {
    if (isNaN(x) || isNaN(y)) {
        alert('Одно или оба значения не являются числом');
    }
    else {
        return x * y;
    }
}

console.log(checkNum(10, 5));

//задание 6

function exam() {
    let numer = Number(prompt('Введите любое число'));
    if (isNaN(numer)) {
        alert('Переданный параметр не является числом');
    } else {
        alert(`${numer} в кубе равняется ${numer**3}`);
    }
}

exam();

//задание 7

const circle1 = {
    radius: 50,
    getArea () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter () {
        return 2*Math.PI * this.radius;
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

const circle2 = {
    radius: 70,
    getArea () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter () {
        return 2*Math.PI * this.radius;
    }
}
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//задание 8

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