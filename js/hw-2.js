//задание 1
let a = alert (10);
a = 20;
console.log(a);
//задание 2
const year = "год выпуска первого Айфон - 2007";
alert (year);
//задание 3
const creation = "создатель языка Java Script - Брендан Эйх";
alert (creation);
//задание 4
let c = 10;
let d = 2;
let up = 2;
let resultsum = c + d;
alert (c);
alert (d);
alert (resultsum);
let resultdiff = c - d;
alert (resultdiff);
let resultmult = c * d;
alert (resultmult);
let resultdivis = c / d;
alert (resultdivis);
//задание 5
const result = 2 ** 5;
alert (result);
//задание 6
let f = 9;
let g = 2;
let newresult = f % g;
alert (newresult);
//задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);
//задание 8
let age = prompt ("Сколько Вам лет?");
alert (age);
//задание 9
const user = {
    name: 'Ivan',
    age: Number(35),
    isAdmin: Boolean(true),
}
console.log(user);
//задание 9.1
user.cityofresidence ='EKB',
//задание 9.2
user.age = Number(20);
//задание 9.3
delete user.cityofresidence;
console.log(user);
//задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user.name);
alert(user.age);
alert(user.isAdmin);
console.log("Какую информацию хотите узнать о пользователе?");
//задание 10
let greetings = prompt("Как Ваше имя?");
alert(`Привет, ${greetings} !`)
console.log("Как Ваше имя?");