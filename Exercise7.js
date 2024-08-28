// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra
const prompt = require("prompt-sync")();

let macas = Number(prompt("Digite o numero de Maças que deseja comprar: "));

if (macas < 12) {
  let totalCompra = macas * 0.3;
  console.log(`O Total da compra é ${totalCompra}`);
} else if (macas >= 12) {
  let totalCompra = macas * 0.25;
  console.log(`O Total da compra é ${totalCompra}`);
}
