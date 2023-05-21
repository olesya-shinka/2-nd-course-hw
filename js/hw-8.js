//задание 1

   const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort((a, b) => Number(a.age) - Number(b.age));
 console.log(people);

 //задание 2

 function isPositive(number) {
  if (number > 0) {
      return number;
  }
}

function isMale(mens) {
  if (mens.gender == 'male') {
      return mens;
  }    
}

function filter(arr, ruleFunction) {
  for (let i = 0; i < arr.length; i++) {
  return arr.filter(ruleFunction);

  }
}

  console.log(filter([3, -4, 1, 9], isPositive));
  
  const peopleTwo = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(peopleTwo, isMale)); 

 //задание 3

//let today = new Date;
//let timerId = setInterval(() => alert(today), 3000);
//setTimeout(() => { clearInterval(timerId); alert('Прошло 30 секунд'); }, 30000);//

 //задание 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}
 
delayForSecond(function () {
 console.log('Привет, Глеб!');
})

 //задание 5

 function delayForSecondTwo(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecondTwo(() => sayHi('Глеб')); 