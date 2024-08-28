// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
let a = 0;
let b = 1;
let count = 10;

for (let i = 1; i <= count; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}
