/* 

Exercícios de interpretação de código

1. Resposta:
a) Na primeira chamada do console.log, é impresso na tela o valor 10; na segunda chamada, o valor 50.

b) Absolutamente nada seria impresso na tela.

2. Resposta:
a. A função anônima 'outraFuncao' recebe uma 'string', modifica todos os caracteres aplicáveis para minúsculas e verifica se 'cenoura' é parte da 'string' original, retornando 'true' ou 'false'.

b.
i. true
ii. true
ii. true

*/

// Exercícios de escrita de código

// 1. Resposta:
// a)
const aboutMe = function() {
   console.log(`Eu sou Douglas, tenho 34 anos, moro em Santa Cruz do Sul e sou estudante.`)
};

aboutMe();

// b)
function sobreMim(nome, idade, cidade, profissao) {
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
};

sobreMim('Douglas Joziel', 34, 'Santa Cruz do Sul', 'professor de matemática');

// 2. Resposta:
// a)
const somar = function(a, b) {
   return a + b;
};

console.log(somar(10, 10));

// b)
const comparar = function(a ,b) {
   return a >= b;
};

console.log(comparar(10, 10));

// c)
const testePar = function(a) {
   return (a % 2) == 0;
};

console.log(testePar(10));

// d)
function imprimeMensagem(texto) {
   console.log(`${texto.length}\n${texto.toUpperCase()}`);
};

imprimeMensagem('Socorram-me, subi no ônibus em Marrocos');

// 3. Resposta:
function funcaoSoma(x, y) {
   return x + y;
};

function funcaoSubtrcao(x, y) {
   return x - y;
};

function funcaoMultiplicacao(x, y) {
   return x * y;
};

function funcaoDivisao(x, y) {
   return x / y;
};

let n = [];
n[0] = +prompt("Digite o primeiro número:");
n[1] = +prompt("Digite o primeiro número:");

console.log(`Números inseridos: ${n[0]} e ${n[1]}
${n[0]} + ${n[1]} = ${funcaoSoma(n[0], n[1])}
${n[0]} - ${n[1]} = ${funcaoSubtrcao(n[0], n[1])}
${n[0]} x ${n[1]} = ${funcaoMultiplicacao(n[0], n[1])}
${n[0]} : ${n[1]} = ${funcaoDivisao(n[0], n[1])}`);

// Desafios

// 1. Resposta:
// a)
const imprimir = (valor) => {console.log(valor)};
imprimir('Teste da função imprimir');

// b)
const adicao = (x, y) => {imprimir(x + y)};
adicao(2, 3);

// 2. Resposta:
const hipotenusa = (a, b) => {return (a * a + b * b)**0.5};

console.log(hipotenusa(1, 1));
