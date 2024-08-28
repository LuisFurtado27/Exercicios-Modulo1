// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

const prompt = require("prompt-sync")();

let number = Number(prompt("Digite um numero para escrevê-lo 10x na tela: "));

for (let i = 1; i <= 10; i++) {
  console.log(i + " - " + number);
}
