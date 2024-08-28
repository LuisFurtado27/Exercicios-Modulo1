// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
const prompt = require("prompt-sync")();
let numbers = [];
let i = 1;
let total = 0;

console.log("Digite 5 numeros e receba a soma dos mesmos: ");
while (i <= 5) {
  let entrada = prompt(`Digite o ${i}° numero `);
  numbers.push(parseInt(entrada));
  i++;
}
for (sum of numbers) {
  total += sum;
}
console.log(`A soma de todos os elementos é ${total}`);

console.log(numbers);
