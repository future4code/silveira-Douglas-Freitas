/* 

Exercícios de interpretação de código

1. Resposta:
10
10 5

2. Resposta:
10 10 10

3. Resposta:
let horasDeTrabalhoPorDia = prompt("Quantas horas você trabalha por dia?");
let valorDaReceitaPorDia = prompt("Quanto você recebe por dia?");
alert(`Você recebe R$ ${valorDaReceitaPorDia/horasDeTrabalhoPorDia} por hora.`);

*/

// Exercícios de escrita de código

// 1. Resposta:
let nome;
let idade;

console.log("O tipo da variável 'nome' é", typeof nome);
console.log("O tipo da variável 'idade' é", typeof idade);

// As variáveis 'nome' e 'idade' são do tipo undefined, pois nenhum valor lhes foi a atribuído

nome = prompt("Qual é o seu nome?");
idade = Number(prompt("Qual é a sua idade?"));

console.log("O tipo da variável 'nome' é", typeof nome);
console.log("O tipo da variável 'idade' é", typeof idade);

// As variáveis 'nome' e 'idade' agora são do tipo string e number, respectivamente

console.log("Olá,", nome, "você tem", idade, "anos");

// 2. Resposta:
let verificaHumor = prompt("Você está feliz?");
let verificaFome = prompt("Vocẽ está com fome?");
let verificaSono = prompt("Você está com sono?");

console.log("Você está feliz?", verificaHumor);
console.log("Você está com fome?", verificaFome);
console.log("Você está com sono?", verificaSono);

// 3. Resposta:
let a = 10;
let b = 25;

let variavelAuxiliar = a;
a = b;
b = variavelAuxiliar;

console.log("O novo valor de 'a' é", a);
console.log("O novo valor de 'b' é", b);

// Desafios

// 1. Resposta:

const primeiroNumero = Number(prompt("Digite o primeiro número:"));
const segundoNumero = Number(prompt("Digite o segundo número:"));
let soma = primeiroNumero + segundoNumero;
let produto = primeiroNumero * segundoNumero;

console.log(primeiroNumero.toString(), "+", segundoNumero.toString(), "=", soma.toString());
console.log(primeiroNumero.toString(), "x", segundoNumero.toString(), "=", produto.toString());