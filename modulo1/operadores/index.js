/*

Exercícios de interpretação de código

1. Resposta:
A primeira mensagem impressa no console é "a.  false"; a segunda é "b.  false"; a terceira é "c.  true"; a quarta é "d.  boolean".

2. Resposta:
O valor de retorno do prompt() é do tipo string; logo, o resultado impresso no console será concatenação das strings contidas nas variáveis "primeiroNumero" e "segundoNumero".

3. Resposta:
A correção/solução é converter a saída do prompt() utilizando Number(), da seguinte forma:

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));
const soma = primeiroNumero + segundoNumero;
console.log(soma);

Além disso, como uma boa prática de programação é recomendável utilizar ponto e vírgula ao final de cada linha. 

*/

// Exercícios de escrita de código

// 1. Resposta:
// a)
let idade1 = Number(prompt("Qual é a sua idade?"));

// b)
let idade2 = Number(prompt("Qual é a idade do seu melhor amigo?"));

// c)
console.log("Sua idade é maior do que a do seu melhor amigo?", idade1 > idade2);

// d)
console.log("A diferença entre as idades é de", Math.abs(idade1 - idade2), "anos");

// 2. Resposta:
// a) 
let numero = Number(prompt("Digite um número par:"));

// b)
console.log(numero % 2);

// c) 
// O resto da divisão de um número par por 2 é sempre igual a 0, pois decorre do fato de que todos os números pares são múltiplos de 2.

// d)
// O resto da divisão de um número ímpar por 2 sempre tem resto 1, porque todo o número ímpar q pode ser decomposto pela forma q = p ± 1, onde p é um número par.

// 3. Resposta:
let idadeDoUsuario = Number(prompt("Qual é a sua idade?"));

// a)
console.log("Você já viveu", idadeDoUsuario * 12, "meses");

// b)
console.log("Você já viveu", idadeDoUsuario * 365, "dias");

// c)
console.log("Você já viveu", idadeDoUsuario * 8760, "horas");

// 4. Resposta:
const x = Number(prompt("Digite o primeiro número:"));
const y = Number(prompt("Digite o segundo número:"));

console.log("O primeiro número é maior que o segundo?", x > y);
console.log("O primeiro número é igual ao segundo?", x === y);
console.log("O primeiro número é divisível pelo segundo?", (x % y) == 0);
console.log("O segundo número é divisível pelo primeiro?", (y % x) == 0);

// Desafios

// 1. Resposta
// a)
let temperatura = 77;
let conversao = (temperatura - 32) * (5 / 9) + 273.15;
console.log(temperatura.toString(), "°F =", conversao.toString(), "K");

// b)
temperatura = 80;
conversao = temperatura * (9 / 5) + 32;
console.log(temperatura.toString(), "°C =", conversao.toString(), "°F");

// c)
temperatura = 30;
conversao = temperatura * (9 / 5) + 32;
console.log(temperatura.toString(), "°C =", conversao.toString(), "°F =", (temperatura + 273.15).toString(), "K");

// d)
temperatura = Number(prompt("Informe a temperatura em °C:"));
conversao = temperatura * (9 / 5) + 32;
console.log(temperatura.toString(), "°C =", conversao.toString(), "°F =", (temperatura + 273.15).toString(), "K");

// 2. Resposta:
const custo = 0.05;
let consumo = Number(prompt("Qual o consumo de energia [kWh]:"));

// a)
console.log("O valor total a ser pago é R$", consumo * custo);

// b)
let desconto = Number(prompt("Qual o valor do desconto [%]:"));
console.log("O valor total com desconto a ser pago é R$", consumo * custo * (100 - desconto) / 100);

// 3. Resposta:
let valor;
let resultado;
let unidade1;
let unidade2;

// a)
valor = 20;
unidade1 = "lb";
resultado = valor / 2.205;
unidade2 = "kg";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);

// b)
valor = 10.5;
unidade1 = "oz";
resultado = valor / 35.274;
unidade2 = "kg";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);

// c)
valor = 100;
unidade1 = "mi";
resultado = valor * 1609.34;
unidade2 = "m";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);

// d)
valor = 50;
unidade1 = "ft";
resultado = valor / 3.281;
unidade2 = "m";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);

// e)
valor = 103.56;
unidade1 = "gal";
resultado = valor * 4.546;
unidade2 = "l";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);

// f)
valor = 450;
unidade1 = "xic";
resultado = valor * 0.24;
unidade2 = "l";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);

// g)
valor = Number(prompt("Digite o total de milhas:"));
unidade1 = "mi";
resultado = valor * 1609.34;
unidade2 = "m";
console.log(valor.toString(), unidade1, "equivalem a", resultado.toString(), unidade2);
