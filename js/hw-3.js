//задание 1

let password = Number(123);
let answer = Number(prompt('Введите пароль'));
if (password == 123) {
    alert ('Пароль введен верно')
} else {
    alert ('Пароль введен неправильно')
};

//задание 2

let c = 5;
c = [0, 10, -3, 2];
if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
};

//задание 3

let d = 50;
let e = 101;
if (d > 100 || c > 100) {
    console.log('Верно')
} else {
    alert('Неверно')
};

//задание 4

let a = Number('2');
let b = Number('3');
alert(Number(a + b));

//задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case Number(12):
    case Number(1):
    case Number(2):
        console.log('зима');
        break;
    case Number(3):
    case Number(4):
    case Number(5):
        console.log('весна');
        break;
    case Number(6):
    case Number(7):
    case Number(8):
        console.log('лето');
        break;
    case Number(9):
    case Number(10):
    case Number(11):
        console.log('осень');
        break;
    default:
        console.log('Ошибка');
        break;
}

//задание 7

let numer = prompt('Пожалуйста, введите любое число');
const check = numer => !isNaN(numer);
if (numer % 2 === 0) {
    alert('Четное число');
} else if (numer % 2 === 1){
    alert('Нечетное число');
} else {
    alert('Что-то не то')
};

//задание 8

let clientOS = prompt('Если у Вас IOS, то введите 0; Если у Вас android, то введите 1');
if (clientOS == 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS == 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
     alert('Вы ввели неверное значение');
}

//задание 9

let clientDeviceYear = prompt('Введите год выпуска Вашего телефона');
if (clientOS == 0 && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS == 0 && clientDeviceYear > 2015) {
    alert('Установите версию приложения для iOS по ссылке')
}
if (clientOS == 1 && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для Android по ссылке')
}
else if (clientOS == 1 && clientDeviceYear > 2015) {
    alert('Установите версию приложения для Android по ссылке')
}

