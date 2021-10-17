"use strict";

const getString = function(varia) {
  let string = 'Строка нужна';

  if (typeof varia === 'string') {    
    const str = varia.trim();
    if(str.length > 30) {
      string = str.substring(0, 30) + '....';
    } else {
      string = str;
    }
  }
  return string;
};

console.log(getString('qwer qwer qwer qer'));
console.log(getString(0));
console.log(getString('qwer qwer qwer qerw qwe qwe qwer qwer qewr qwer qewr qewr'));