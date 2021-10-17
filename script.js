"use strict";

const arr = ['23333', '243545', '556564', '343535', '454545', '65656', '25454'];

for(let i = 0; i < arr.length; i++) {
  if(arr[i].startsWith(2) || arr[i].startsWith(4)) {
    console.log(arr[i]);
  }
}

const div = function(num) {
  let arr = [];
  if (num !== 1) {
    arr.push(1);
    for (let j = 2; j * j <= num; j++) {
      if (num % j === 0) {
        arr.push(j);
      }
    }
  }
  arr.push(num);
  return arr;
};

for (let i = 1; i <= 100; i++) {
  const n = div(i);
  if (n.length <= 2) {
    console.log(`${i}: Простое число. Делители этого числа: ${n.join(', ')}`);
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(`${i}: Делители этого числа: ${div(i).join(', ')}`);
}