//задание 1

let i = 0;
while (i < 2){
    console.log ("Привет");
    i++;
}

//задание 2

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

//задание 3

let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

//задание 4

const obj = {
   'Коля' : '200 $',
    'Вася' : '300 $',
    'Петя' : '400 $',
}
for (const key in obj) {
   console.log(`${key}-зарплата-${obj[key]}`);
}

//задание 5

let n = 1000;
let num = 0;
while (n > 50) {
    num++;
    n /= 2;
    console.log(num);
    console.log(n);
}

//задание 6

let day = Number(prompt('Введите число, которое будет являться днем отсчета(первой пятницей)'));
for (let day = 0; day <= 31; day++) {
    if (day == 5 || day == 12 || day == 19 || day == 26) {
        console.log(`Сегодня пятница, ${day}  число. Необходимо подготовить отчет.`);
    } 
    else {
        console.log('это не пятница')
    }
}
