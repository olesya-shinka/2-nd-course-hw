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

let 