/* 

Exercícios de interpretação de código

1. Resposta:
a.  undefined
b.  null
c.  11
d.  3
e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9

2. Resposta:
Se a entrada for "Subi num ônibus em Marrocos", a saída do console.log será "SUBI NUM ÔNIBUS EM MIRROCOS 27".

*/

// Exercícios de escrita de código

// 1. Resposta:
const nome = prompt('Qual é o seu nome?');
const email = prompt('Qual é o seu e-mail?');

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

// 2. Resposta:
const comidas = ['churrasco', 'feijão', 'arroz', 'batata', 'lasanha'];

// a)
console.log(comidas);

// b)
console.log(`Essas são as minhas comidas preferidas:
- ${comidas[0]}
- ${comidas[1]}
- ${comidas[2]}
- ${comidas[3]}
- ${comidas[4]}`);

// c)
comidas[1] = prompt("Qual a sua comida favorita?");

console.log(comidas);

// 3. Resposta:
// a)
let listaDeTarefas = [];

// b)
listaDeTarefas[0] = prompt('Qual sua 1ª tarefa do dia?');
listaDeTarefas[1] = prompt('Qual sua 2ª tarefa do dia?');
listaDeTarefas[2] = prompt('Qual sua 3ª tarefa do dia?');

// c)
console.log(`Minha lista de tarefas diárias:
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}`);

// d)
let removerTarefa = +prompt(`Qual tarefa você já concluiu?
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}
3 - ${listaDeTarefas[2]}`);

// e)
listaDeTarefas.splice(removerTarefa - 1, 1);

console.log(`Tarefas ainda não concluídas:
1 - ${listaDeTarefas[0]}
2 - ${listaDeTarefas[1]}`);

// Desafios

// 1. Resposta:
const frase = prompt('Digite uma frase qualquer:');
const palavrasDaFrase = frase.split(' '); 

console.log(palavrasDaFrase);

// 2. Resposta:
const frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa'];

console.log(frutas.indexOf('Abacaxi'), frutas.length);