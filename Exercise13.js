// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();
let numbers = [];
let total = 0;
let entrada = 1;

console.log("Digite numeros e receba sua media ");

while (entrada != 0) {
  entrada = prompt("Digite o numero que deseja ou 0 para calcular ");
  if (entrada != 0) {
    numbers.push(parseInt(entrada));
  }
}

for (sum of numbers) {
  total += sum;
}

let media = total / numbers.length;

console.log(`A media de todos os elementos é ${media}`);

console.log(numbers);
