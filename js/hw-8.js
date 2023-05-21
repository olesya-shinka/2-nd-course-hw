//фибоначчи
const fibonacci = [1, 1, 2, 3, 5, 8];
const multipleByTwoFib = fibonacci.map((num) => num * 2);
console.log(multipleByTwoFib);

const plusTenFib = fibonacci.map((num) => num + 10);
console.log(plusTenFib);

const onlyBigFib = fibonacci.filter(function filtr (value) {
    return value > 3;
});
console.log(onlyBigFib);//

//из практики(2)

function log(arrItem) {
    console.log("Элемент массива:", arrItem);
  }
  
  function each(arr, callback) {
   for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
   }
  }
  each(["Глеб", "Олег", "Татьяна", "Платон"], log);//

  //из практики(1)

  function callbackWithArrayLength(arr, callback) {
    callback(arr.length); 
   }
   
   callbackWithArrayLength([1], (length) => {
    console.log(length);
   });
   
   callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
   });
   
   callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l); 
   }); //

   // задание 1


   const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort((a, b) => Number(a.age) - Number(b.age));
 console.log(people);

 //задание 2

function isPositive() {
    const numer = [3, -4, 1, 9];
    return numer.filter(item => item > 0);
}
console.log(isPositive());

function isMale() {
    const peopleNew = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];
    return peopleNew.filter(person => person.gender.includes('male'));
}
console.log(isMale());

function filter() {
    // писать код тут
}

//задание 3

// let myDate = new Date;
// let timerId = setInterval(() => alert(myDate), 3000);
// let timeOver = '30 секунд прошло';
// setTimeout(() => { clearInterval(timerId); alert(timeOver); }, 30000);

//задание 4

function delayForSecond(callback) {
    setTimeout(1000 * 1);
    clearTimeout(callback);
    callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// задание 5

