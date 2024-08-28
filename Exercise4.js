// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require("prompt-sync")();

let entrada = Number(prompt("Digite a opção desejada: "));

switch (entrada) {
  case 1:
    console.log("A Opção selecionada foi a numero 1");
    break;
  case 2:
    console.log("A Opção selecionada foi a numero 2");
    break;
  case 3:
    console.log("A Opção selecionada foi a numero 3");
    break;
  default:
    console.log("Essa não é uma opção Valida");
    break;
}
