//задание 1

let js = 'js';
console.log(js.toUpperCase());

//задание 2

const products = ['Хлеб Бородинский', 'Молоко Молочная благодать','Белые росы Молоко', 'Яблоки Гренни Смит', 'Мороженое Чистая линия', 'Морковь'];
const search = 'мо';

products.forEach((product) => {
	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});

//задание 3

x = Math.floor(32.58884);
console.log(x);
x = Math.ceil(32.58884);
console.log(x);
x = Math.round(32.58884);
console.log(x);

//задание 4

const arr = [52, 53, 49, 77, 21, 32];
const min = Math.min(...arr);
console.log(min);
const max = Math.max(...arr);
console.log(max);

//задание 5

function getRandomInt(minValue, maxValue) {   
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}                            
console.log(getRandomInt(1, 10));

//задание 6

function getRandomArrNumbers(a) {
    const numArr2 = [];
    let miniNew = 4;
    let maxiNew = 20;
    let length = a / 2;
    for (let i = 0; i < length; i++) {
        numArr2.push(Math.round(Math.random() * (maxiNew - miniNew) + miniNew));
     };
     return numArr2;
}

console.log(getRandomArrNumbers(10));

//задание 7

function getRandomInt(minValue, maxValue) {   
    return Math.round(Math.random() * (maxValue - minValue)) + minValue
}                            
    console.log(getRandomInt(25, 50));

//задание 8

let myDate = new Date;
console.log(myDate);

//задание 9

let currentDate = new Date;
currentDate.setDate(73);
console.log(currentDate);

//задание 10

const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let myDateNew = new Date;
let fullDate = 'Дата: ' + myDateNew.getDate() + '' + myDateNew.getFullYear() + '- это' + weekdays[myDateNew.getDay()] + 'Время: ' + myDateNew.getHours() + ':' + myDateNew.getMinutes() + ':' + myDateNew.getSeconds();
console.log(fullDate);


//задание 11

//находится в файле script.js