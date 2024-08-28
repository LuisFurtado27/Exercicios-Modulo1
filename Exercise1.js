// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if

const prompt = require("prompt-sync")();
let num = Number(prompt("DIGITE UM NUMERO E VERIFIQUE SE É PAR OU IMPAR: "));

if (num % 2 == 0) {
  console.log(`O NUMERO ${num} É PAR`);
} else {
  console.log(`O NUMERO ${num} É IMPAR`);
}
