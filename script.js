"use strict";

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const day = new Date();
let dayWeek = day.getDay();

if (dayWeek === 0) {
  dayWeek = 6;
} else { dayWeek--; }

week.forEach((day, i) => {
  let str = day;
  if (i === dayWeek) {
    str = `<b>${day}</b>`;
  } else {
    str = `${day}`;
  }
  if (i === 5 || i === 6) { str = `<i>${str}</i>`; }
  document.body.insertAdjacentHTML('beforeend', `<div>${str}</div>`);
});
