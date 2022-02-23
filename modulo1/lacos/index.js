/*

Exercícios de interpretação de código

1. Resposta: 
O código abaixo soma os valores dos número inteiros do intervalo [0, 5). O resultado exibido na tela é 10.
   
2. Resposta:
a) Serão impressos os números que pertencem ao array 'lista' e são maiores que 18.

b) Sim. Dentre as possibilidades, aquela que julgo melhor utilizar é o método indexOf(), da seguite forma:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {
  if (numero > 18) {
		console.log(lista.indexOf(numero), numero);
	};
};

3. Resposta:
Para o código em questão, a impressão no console para um input igual a 4 é a seguinte:
*
**
***
****

*/

// Exercícios de escrita de código

// 1. Resposta:
// a), b), c)
const numeroDePets = +prompt(`Quantos pets você tem?`);
let nomesDosPets = [];

if (numeroDePets == 0) {
   console.log(`Que pena! Você pode adotar um pet!`)
} else {
   for (let i = 0; i < numeroDePets; i++) {
      nomesDosPets[i] = prompt(`Nome do ${i+1}º pet:`);
   };
};

console.log(nomesDosPets);

// 2. Resposta:
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a)
for (numero of array) {
   console.log(numero);
};

// b)
for (numero of array) {
   console.log(numero/10);
};

// c)
let novoArray = [];
for (numero of array) {
   if (numero % 2 == 0) {
      novoArray.push(numero);
   };
};

console.log(novoArray);

// d)
let fraseArray = [];
for (numero of array) {
   fraseArray.push(`O elemento do índex ${array.indexOf(numero)} é: ${numero}`);
   console.log(fraseArray[array.indexOf(numero)]);
};

// e)
let minimo = array[0], maximo = minimo;
for (numero of array) {
   if (numero < minimo) {
      minimo = numero;
   } else if (numero > maximo) {
      maximo = numero;
   };
};

console.log(`O maior número é ${maximo} e o menor é ${minimo}`);

// Desafios

// 1. Resposta:
function jogoOriginal() {
   let numero = +prompt(`Digite um número secreto:`);
   let palpite;

   console.log(`Vamos jogar um jogo!`);

   tentativas = 0;
   do {
      palpite = +prompt(`Adivinhe o número secreto:`);
      console.log(`Seu chute foi ${palpite}!`);

      if (palpite < numero) {
         console.log(`Errrrrrrrou, o número secreto é maior!`);
      } else if (palpite > numero) {
         console.log(`Errrrrrrrou, o número secreto é menor!`);
      };

      tentativas++;
   } while (palpite != numero);

   console.log(`Acertou!!!`);
   console.log(`Tentativas: ${tentativas}`);
};

jogoOriginal();

// 2. Resposta:
function jogoModificado() {
   let numero = Math.floor(Math.random() * 99) + 1;
   let palpite;

   // console.log(numero);
   console.log(`Vamos jogar um jogo!`);

   tentativas = 0;
   do {
      palpite = +prompt(`Adivinhe o número secreto:`);
      
      console.log(`Seu chute foi ${palpite}!`);

      if (palpite < numero) {
         console.log(`Errrrrrrrou, o número secreto é maior!`);
      } else if (palpite > numero) {
         console.log(`Errrrrrrrou, o número secreto é menor!`);
      };

      tentativas++;
   } while (palpite != numero);

   console.log(`Acertou!!!`);
   console.log(`Tentativas: ${tentativas}`);
};

jogoModificado();

/*

A alteração foi extremamente simples. Bastou remover o input via prompt, feito pelo 1º jogador, e solicitar que o computador gerasse um número aleatório. Existem muitos algoritmos para gerar números pseudo-aleatórios; entretanto, o método mais prático em JS é utilizar as propriedades floor() e random() do objeto Math.

*/