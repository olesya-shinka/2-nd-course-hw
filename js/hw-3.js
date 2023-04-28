//задание 1

let password = 'skypro';
let answer = prompt ('Введите пароль');
if (password === '123') {
    alert ('Пароль введен верно');
} else {
    alert ('Пароль введен неправильно')
};
//задание 2

let c = 5;
c = 0 && 10 && -3 && 2;
alert (c > 0); 
alert (c < 10);
alert (c <= 10);
alert (c >= 0);
//задание 3

let d = 50;
let e = 101;
if (d < 100) {
    alert('Верно')
} else {
    alert('Неверно')
};
if (e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
};
//задание 4

let a = 2;
let b = 3;
alert(a + b);

//задание 5

let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case Number(12):
        console.log('зима');
        break;
    case Number(1):
        console.log('зима');
        break;
    case Number(2):
        console.log('зима');
        break;
    case Number(3):
        console.log('весна');
        break;
    case Number(4):
        console.log('весна');
        break;
    case Number(5):
        console.log('весна');
        break;
    case Number(6):
        console.log('лето');
        break;
    case Number(7):
        console.log('лето');
        break;
    case Number(8):
        console.log('лето');
        break;
    case Number(9):
        console.log('осень');
        break;
    case Number(10):
        console.log('осень');
        break;
    case Number(11):
        console.log('осень');
        break;
    default:
        console.log('Ошибка');
        break;
}

