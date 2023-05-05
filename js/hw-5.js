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
"use strict";
let age = prompt('Сколько Вам лет?');

if (age <= 12 ) {
    function printAge() {
        console.log('Привет, друг!');
    }
} else if (age => 13) {
    function printAge() {
        console.log('Добро пожаловать!');
    }
}
if (age <= 0) {
    function printAge() {
        console.log('Вы ввели неверное число');
    }
}
printAge();

//задание 5

function checkNum(x, y) {
    if (Number.isNaN(x, y)) {
        return x, y;
    }
    else {
        return(x * y);
}
}

console.log(checkNum(10, 5));

//задание 6

let numer = Number(prompt('Введите любое число'));

function exam(numer) {
    if (Number.isNaN(numer)) {
        return numer;
    } else {
        return(numer*numer*numer);
    }
}

console.log(exam(numer));

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