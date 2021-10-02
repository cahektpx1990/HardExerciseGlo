let num = 266219;

const numMas = Array.from(String(num), Number);
console.log(numMas);

let mult = 1;

for (let i = 0; i < numMas.length; ++i) {

  mult = mult * numMas[i];
}

console.log(mult);

mult **= 3;

console.log(mult);

mult = String(mult);

console.log(mult.substring(0, 2));