//задание 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 4);
    console.log(numbs[i]);
    break;
}

//задание 2

let numer = [1, 5, 4, 10, 0, 3];
numer.findIndex(i => i == 4);

//задание 3

let nums = [1, 3, 5, 10, 20];
nums = nums.join('');
console.log(nums);

//задание 4

let oneNum = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1]
];
console.log(oneNum);

//задание 5

const Numbers = [1, 1, 1];
Numbers.push(2, 2, 2);
console.log(Numbers);

//задание 6

const ex = [9, 8, 7, 'a', 6, 5];
ex.sort();
delete ex[5];
console.log(ex);

//задание 7

let question = Number(prompt('Введите число от 1 до 10'));
const answer = [9, 8, 7, 6, 5];
let mean = answer.includes(question);
console.log(mean);

//задание 8

const strng = 'abcdef';
const reverse = strng.split('').reverse('');
console.log(reverse);

//задание 9

let arr = [
    [1, 2, 3],
    [4, 5, 6]
];
for (let i of arr) {
    for (let j of i) {
      console.log(j);
    }
  };

  // задание 10

let newArr = [3, 5, 7, 9];
for (let i = 1; i < newArr.length; i++) {
  console.log(newArr[i - 1] + newArr[i]);
}

//задание 11

 var secongArr = [4, 5, 6, 7, 8];
 var newsecongArr = secongArr.map(function(elem) {
   return elem * elem;
 });
  console.log(newsecongArr);

//задание 12

const findLength = source => source.map(str => str.length);
console.log(findLength(['skypro', 'frontend', 'developer', 'salary']));

//задание 13

let massiv = [-1, 0, 5, -10, 56];
massiv.push(-25, 25, 0, -1000, -2);
let res = massiv.filter(function filterPositive(elem) {
  if (elem < 0) {
    return elem;
  }
});
console.log(res);

//задание 14

let numArr = [];
let min = 0;
let max = 10;
let length = 10;
for (let i = 0; i < length; i++) {
   numArr.push(Math.round(Math.random() * (max - min) + min));
};
console.log(numArr);

let evenNum = numArr.filter(function (elem){
  if (elem % 2 == 0) {
    return true
  }
});
console.log(evenNum);

//задание 15

let sixNum = [];
let n = 1;
let m = 10;
let long = 6;
for (let i = 0; i < long; i++) {
  sixNum.push(Math.round(Math.random() * (m - n) + n));
};

const Average = (sixNum) => {
  let sum = 0; 
  for (let i = 0; i < sixNum.length; i += 1) { 
    sum += sixNum[i]; 
  }
  return sum / sixNum.length; 
};
console.log(Average(sixNum)); 
