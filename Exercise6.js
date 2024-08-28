// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:b
// Isósceles, escaleno ou eqüilátero.
const prompt = require("prompt-sync")();

let a = Number(prompt("Digite o tamanho do lado A: "));
let b = Number(prompt("Digite o tamanho do lado B:  "));
let c = Number(prompt("Digite o tamanho do lado C:  "));

if (a < b + c && b < a + c && c < a + b) {
  if ((a == b && a != c) || (a == c && a != b) || (b == c && c != a)) {
    console.log(
      "Os valores digitados formam um Triângulo ISÓSCELES : possui dois lados iguais"
    );
  } else if (a != b && b != c && c != a) {
    console.log(
      "Os valores digitados formam um Triângulo ESCALENO: possui todos os lados diferentes"
    );
  } else if (a == b && b == c) {
    console.log(
      "Os valores digitados formam um Triângulo EQÜILÁTERO: possui todos os lados iguais "
    );
  }
} else {
  console.log("Os valores digitados não formam um triângulo");
}
