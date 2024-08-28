// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
const prompt = require("prompt-sync")();

let a = Number(prompt("Digite o primeiro valor: "));
let b = Number(prompt("Digite o segundo valor: "));

if (a == b) {
  console.log("OS NUMEROS SÃO IGUAIS");
} else if (a < b) {
  console.log(a + " ," + b);
} else {
  console.log(b + " , " + a);
}
