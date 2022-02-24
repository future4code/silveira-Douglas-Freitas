/* 

Exercícios de interpretação de código

1. Resposta:
a) Imprime na tela o 'novoArrayA' contendo cada um dos itens do array 'usuarios', ao lado o índice de cada um dos itens e também o array 'usuarios' de modo completo.

2. Resposta:
a) Imprime na tela o 'novoArrayB' contendo os valores da propriedade 'nome' de cada um dos itens do array 'usuarios'.

3. Resposta:
a) Imprime na tela o 'novoArrayC' contendo os dois primeiros itens do array 'usuarios', que possuem a propriedade 'apelido' diferente de 'Chijo'.

*/

// Exercícios de escrita de código

// 1. Resposta:
const pets = [
   {nome: "Lupin", raca: "Salsicha"},
   {nome: "Polly", raca: "Lhasa Apso"},
   {nome: "Madame", raca: "Poodle"},
   {nome: "Quentinho", raca: "Salsicha"},
   {nome: "Fluffy", raca: "Poodle"},
   {nome: "Caramelo", raca: "Vira-lata"}
];

// a)
const nomesDosPets = pets.map(item => item.nome);
console.log(nomesDosPets);

// b)
const racaSalsicha = pets.filter(item => item.raca == 'Salsicha');
console.log(racaSalsicha);

// c)
const mensagemPromocao = pets.filter(item => item.raca == 'Poodle').map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`);
console.log(mensagemPromocao);

// 2. Resposta:
const produtos = [
   {nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5},
   {nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8},
   {nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6},
   {nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7},
   {nome: "Leite", categoria: "Bebidas", preco: 2.99},
   {nome: "Cândida", categoria: "Limpeza", preco: 3.30},
   {nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2},
   {nome: "Vinho Tinto", categoria: "Bebidas", preco: 55},
   {nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99},
   {nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80}
];

// a)
const nomesDosProdutos = produtos.map(item => item.nome);
console.log(nomesDosProdutos);

// b)
const desconto = 0.05;
const precosComDesconto = produtos.map(item => {
   return {nome: item.nome, preco: +(item.preco * (1 - desconto)).toFixed(2)};
});
console.log(precosComDesconto);

// c)
const listaDeBebidas = produtos.filter(item => item.categoria == 'Bebidas');
console.log(listaDeBebidas);

// d)
const produtosYpe = produtos.filter(item => item.nome.includes('Ypê'));
console.log(produtosYpe);

// e)
const mensagemYpe = produtosYpe.map(item => `Compre ${item.nome} por R$ ${item.preco.toFixed(2).replace('.',',')}`)
console.log(mensagemYpe);

// Desafios

// 1.
const pokemons = [
   {nome: "Bulbasaur", tipo: "grama"},
   {nome: "Bellsprout", tipo: "grama"}, 
   {nome: "Charmander", tipo: "fogo"},
   {nome: "Vulpix", tipo: "fogo"},
   {nome: "Squirtle", tipo: "água"},
   {nome: "Psyduck", tipo: "água"}
];

// a)
const nomesDosPokemons = pokemons.map(item => item.nome).sort();
console.log(nomesDosPokemons);

// b)
const listaDosTipos = pokemons.map(item => item.tipo).filter((item, indice, array) => {
   return array.indexOf(item) == indice;
});
console.log(listaDosTipos); 
