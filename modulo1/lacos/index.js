/*

Exercícios de interpretação de código

1. Resposta:
Inicialmente, o código declara a variável 'valor' e atribui-lhe o valor 0. Em seguida, executa o laço for 5 vezes, somando à variável 'valor' o valor de 'i'. No console.log imprime na tela o valor final igual a 10.

2. Respostas:
a) Serão impressos os valores do array 'lista' maiores que 18, conforme segue: 19, 21, 23, 25, 27, 30.

b) Sim. Com adaptação de um contador é possível ter acesso ao índicie de cada elemento do array 'lista'. O novo código seria assim:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];

let i = 0;
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
   }
   i++;
};

3. Resposta:
Se o usuário digitasse 4, a saída impressa seria uma sequência de arteriscos da seguinte forma:
* -> 1ª execução do while
** -> 2ª execução do while
*** -> 3ª execução do while
**** -> 4ª execução do while

*/

// Exercícios de escrita de código

// 1. Resposta:
// a), b), c)
const numeroDePets = +prompt('Quantos pets vocês tem?');
let nomesDosPets = [];

if (numeroDePets == 0) {
   console.log('Que pena! Você pode adotar um pet!');
} else {
   for (let i = 0; i < numeroDePets; i++) {
      nomesDosPets[i] = prompt(`Qual o nome do seu ${i + 1}º pet?`);
   };
   for (let i = 0; i < numeroDePets; i++) {
      console.log(nomesDosPets[i]);
   };
};

// 2. Resposta:
// a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (let k = 0; k < arrayOriginal.length; k++) {
   console.log(arrayOriginal[k]);
};

// b)
for (let k of arrayOriginal) {
   console.log(k/10);
};

// c)
let arrayNovo = [];
for (let k of arrayOriginal) {
   if ((k % 2) == 0) {
      arrayNovo.push(k);
   };
};

console.log(arrayNovo);

// d)
let arrayFrase = [];
for (let k = 0; k < arrayOriginal.length; k++) {
   arrayFrase[k] = `O elemento do índice ${k} é igual a ${arrayOriginal[k]}`;
};

for (let frase of arrayFrase) {
   console.log(frase);
};

// e)
let minimo = arrayOriginal[0]; 
let maximo = arrayOriginal[0];

for (let numero of arrayOriginal) {
   if (numero < minimo) {
      minimo = numero;
   };
   if (numero > maximo) {
      maximo = numero;
   };
};

console.log(`O maior número é ${maximo} e o menor é ${minimo}`);

// Desafio

// 1.
// a), b), c)
function jogoOriginal() {
   const numeroSecreto = +prompt('Digite o número secreto:');
   console.log('Vamos jogar!');

   let chute;
   let tentativas = 0;
   do {
      chute = +prompt('Qual é o seu chute:');
      if (chute < numeroSecreto) {
         console.log(`O número chutado foi: ${chute}\nErrrrrrrrou, é maior`);
      };
      if (chute > numeroSecreto) {
         console.log(`O número chutado foi: ${chute}\nErrrrrrrrou, é menor`);
      };
      tentativas++;
   } while (chute != numeroSecreto);

   console.log(`Acertou!\nO número de tentativas foi: ${tentativas}`);
};

jogoOriginal();

// 2. 
function jogoModificado() {
   const numeroSecreto = Math.floor(Math.random() * 100) + 1;
   // console.log(numeroSecreto);
   console.log('Vamos jogar!');

   let chute;
   let tentativas = 0;
   do {
      chute = +prompt('Qual é o seu chute (entre 1 e 100):');
      if (chute < numeroSecreto) {
         console.log(`O número chutado foi: ${chute}\nErrrrrrrrou, é maior`);
      };
      if (chute > numeroSecreto) {
         console.log(`O número chutado foi: ${chute}\nErrrrrrrrou, é menor`);
      };
      tentativas++;
   } while (chute != numeroSecreto);

   console.log(`Acertou!\nO número de tentativas foi: ${tentativas}`);
};

jogoModificado();

/*

A alteração foi extremamente simples. Bastou remover o input do outro jogar e solicitar que o computador gerasse um número aleatório. Existem muitos algoritmos para, a partir de uma semente, gerar números aleatórios e/ou pseudo aleatórios; entretanto, o método mais prático em JS é utilizar as propriedades floor() e random() do objeto Math.

*/