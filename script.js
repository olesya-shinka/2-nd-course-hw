
function year() {
    let numMonth = Number(prompt('Введите номер месяца'));

    if (numMonth == 12 || numMonth == 1 || numMonth == 2) {
        alert("Зима");
    } else if (numMonth == 3 || numMonth == 4 || numMonth == 5) {
        alert("Весна");
    } else if (numMonth == 6 || numMonth == 7 || numMonth == 8) {
        alert("Лето");
    } else if (numMonth == 9 || numMonth == 10 || numMonth == 11) {
        alert("Осень");
    } else {
         alert("Неивестное время года");
    }
}

//10

function memoryWords() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let answer = prompt('Чему равнялся первый элемент массива?');
    let answer2 = prompt('Чему равнялся последний элемент массива?');
    if (answer.toLowerCase().toUpperCase() == fruit[0] && answer2.toLowerCase().toUpperCase() == fruit[6]) {
        alert('Позравляем, ты все угадал!');
    } else if(answer.toLowerCase().toUpperCase() == fruit[0] || answer2.toLowerCase().toUpperCase() == fruit[6]) {
        alert('Вы были близки к победе!');
    }
     else {
        alert('Все ответы неверные');
    }
}
;
