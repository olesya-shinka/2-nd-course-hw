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

let numArr = [];
let minNew = 1;
let maxNew = 10;
let length = 1;
for (let i = 0; i < length; i++) {
   numArr.push(Math.round(Math.random() * (maxNew - minNew) + minNew));
};
console.log(numArr);

//задание 6

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}
(getRandomInt(4, 20));

