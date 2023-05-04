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

let numer = Number(prompt('Введите число 5 или 10'));

if (numer == 10 || numer == 5) {
    function checkNum() {
        console.log('Это корректное число');
    }
} else {
    function checkNum() {
        console.log('Значение не является верным числом');
    }
if (numer == 10 || numer == 5) {
    
        console.log('Произведение чисел ')
}
}
checkNum();
