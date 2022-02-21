/* 

Exercícios de interpretação de código

1. Resposta:
a) O primeiro console.log imprime 'Matheus Nachtergaele'; o segundo, 'Virgínia Cavendish'; o terceiro, o terceiro objeto do array 'transmissão', {canal: 'Globo', horario: '14h'}.

2. Resposta:
a) O primeiro console.log imprime {nome: 'Juca', idade: 3, raca: 'SRD'}; o segundo, {nome: 'Juba', idade: 3, raca: 'SRD'}; o terceiro, {nome: 'Jubo', idade: 3, raca: 'SRD'}.

b) Os 3 pontos são uma sintaxe de espelhamento. Basicamente, ele faz um clone do objeto original.

3. Resposta:
a) Serão impressas as saídas 'false' e 'undefined', respectivamente.

b) No primeiro caso, a propriedade 'backender' do objeto 'pessoa' está definida como 'false'. No segundo caso, a propriedade 'altura' do objeto 'pessoa' não existe, logo, não está definida.

*/

// Exercícios de escrita de código

// 1. Resposta
// a)
const pessoa = {
   nome: 'Douglas Joziel',
   apelidos: ['Doug', 'Do', 'DJ']
};

const mensagem = (objeto) => {
   console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
};

mensagem(pessoa);

// b)
const novaPessoa = {
   ...pessoa,
   apelidos: ['Joziel', 'Douglas', 'Freitas']
};

mensagem(novaPessoa);

// 2. Resposta
// a)
const pessoa1 = {
   nome: 'João',
   idade: 49,
   profissao: 'médico'
};

const pessoa2 = {
   nome: 'Ana',
   idade: 26,
   profissao: 'advogada'
};

// b)
const dadosDaPessoa = (dados) => {
   let informacao = [];
   informacao.push(dados.nome);
   informacao.push(dados.nome.length);
   informacao.push(dados.idade);
   informacao.push(dados.profissao);
   informacao.push(dados.profissao.length);
   return informacao;
};

console.log(dadosDaPessoa(pessoa1));
console.log(dadosDaPessoa(pessoa2));

// 3. Resposta
// a)
var carrinho = [];

// b)
const fruta1 = {
   nome: 'mamão',
   disponibilidade: true
};

const fruta2 = {
   nome: 'melancia',
   disponibilidade: false
};

const fruta3 = {
   nome: 'melão',
   disponibilidade: true
};

// c)
function compras(listaDeCompra, produto) {
   return listaDeCompra.push(produto);
};

compras(carrinho, fruta1);
compras(carrinho, fruta2);
compras(carrinho, fruta3);

// d)
console.log(carrinho);

// Desafios

// 1. Reposta
function dadosDoUsuario() {
   let dados = {};
   dados.nome = prompt('Qual é o seu nome?');
   dados.idade = +prompt('Qual é a sua idade?');
   dados.profissao = prompt('Qual é a sua profissão?');
   console.log(dados, typeof dados);
};

dadosDoUsuario();

// 2. Resposta
const testeFilme = (filme1,filme2) => {
   console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.lancamento < filme2.lancamento}\nO primeiro filme foi lançado no mesmo ano do segundo?${filme1.lancamento == filme2.lancamento}`);
};

const filme1 = {
   lancamento: 2020,
   nome: 'Enola Holmes'
};

const filme2 = {
   lancamento: 2010,
   nome: 'A Origem'
};

testeFilme(filme1, filme2);

// 3. Resposta
let controleDeEstoque = function(fruta) {
   return fruta.disponibilidade = !fruta.disponibilidade;
};

console.log(fruta1);
controleDeEstoque(fruta1);
console.log(fruta1);
