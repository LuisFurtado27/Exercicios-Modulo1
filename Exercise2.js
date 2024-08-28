// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else

const prompt = require("prompt-sync")();
let idade = Number(
  prompt("Digite sua idade e receba a categoria da sua faixa etaria de idade: ")
);

if (idade < 0) {
  console.log("ESSA IDADE É INVALIDA");
} else if (idade <= 12) {
  console.log("CRIANÇA");
} else if (idade <= 17) {
  console.log("ADOLECENTE");
} else if (idade <= 65) {
  console.log("ADULTO");
} else {
  console.log("IDOSO");
}
