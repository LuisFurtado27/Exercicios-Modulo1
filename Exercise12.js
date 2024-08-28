// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for
const prompt = require("prompt-sync")();

let entrada = prompt("Digite um numero e receba sua tabuada de 1 a 10: ");

if (entrada <= 0 || entrada > 10) {
  console.log("NUMERO DIGITADO FORA DO LIMITE ESPECIFICADO!");
} else {
  for (let i = 1; i <= 10; i++) {
    let resultado = entrada * i;
    console.log(`${entrada} X ${i}  = ${resultado} `);
  }
}
