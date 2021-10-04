"use strict";

/* Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. 
Решите
задачу
  a) через if,
  b) через switch-case
  c) через многомерный массив без ифов и switch.*/

  let lang = prompt('выберите и введите нужный язык как указано в примере', 'ru или en');

  if (lang == 'ru') {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
  } else if ('en') {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
  }


  switch (lang) {
    case 'ru':
      console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
      break;
    case 'en':
      console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
      break;
  }

  let langMas = [];
  langMas.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  langMas.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  console.log(langMas[lang]);

/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Александр” то вывести в
консоль “преподаватель”, с любым другим значением вывести в консоль студент
 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch */

let namePerson = prompt('Введите имя учащегося');

namePerson === "Артем" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log('студент')

