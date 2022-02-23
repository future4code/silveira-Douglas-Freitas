/* 

Exercícios de interpretação de código

1. Respostas:
a) Inicialmente, o código declara a variável `respostaDoUsuario` e atribui-lhe a saída `string` do prompt. Em seguida, declara a variável `numero` e atribui-lhe por valor a conversão para `number` da variável anterior. Por fim, o teste condicional verifica se o valor da variável `numero` é par e imprime na tela uma mensagem informando o resultado.

b) Todos os números múltiplos de 2, ou seja, todos os números pares da forma p = 2n, sendo n um número inteiro.

c) Todos os números não múltiplos de 2, ou seja, todos os números ímpares da forma q = p + 1, sendo p um número par.

2. Respostas:
a) O código em questão declara a variável `fruta` e atribui-lhe o valor da saída do prompt (após a interação com o usuário). Em seguinte, a variável `preco` é declara, porém, não definida. O teste condicional verifica a variável `fruta` e atribui a `preco` o valor do caso correspondente. Por fim, uma mensagem é exibida na tela com as informações do nome da fruta e do seu respectivo preço.

b) A mensagem será: "O preço da fruta  Maçã  é  R$  2.25".

c) Ao remover o `break` indicado, seria atribuido à variável `preco` o valor `default` que é igual a 5. Portanto, a mensagem impressa seria: "O preço da fruta  Pêra  é  R$  5".

3. Respostas:
a) Basicamente, quatro coisas: i. Declarando a variável `numero`; ii. Recebendo uma informação do usuário via prompt; iii. Convertendo a saída do promt para `number`; iv. Atribuindo o valor numérico à variável `numero`.

b) Para o número 10, a mensagem será: "Esse número passou no teste". Para o número -10, inexiste mensagem e ocorrerá um erro - aliás, o erro ocorrerá para ambos os casos.

c) Evidentemente, sim! A variável `mensagem` foi declarada como `let` dentro do condicional `if`, o que impossibilita seu uso fora desse escopo. Caso houvesse a intenção de utilizar a variável `mensagem` fora do escopo condicional, ela deveria ser declarada como `var`.

*/

// Exercícios de escrita de código

// 1. Respostas:
// a), b)
const idadeDoUsuario = Number(prompt(`Qual é a sua idade?`));

// c)
if (idadeDoUsuario >= 18) {
   console.log(`Você pode dirigir`);
} else {
   console.log(`Você não pode dirigir`);
};

// 2. Resposta:
let turnoDoAluno = prompt(`Qual turno você estuda?\nM - Matunino\nV - Vespetino\nN - Noturno`).toUpperCase();

if (turnoDoAluno === `M`) {
   console.log(`Bom Dia!`);
} else if (turnoDoAluno === `V`) {
   console.log(`Boa Tarde!`);
} else if (turnoDoAluno === `N`) {
   console.log(`Boa Noite!`);
} else {
   console.log(`Turno inválido`);
};

// 3. Resposta:

// Variável declarada no exercício anterior (linha 42)
turnoDoAluno = prompt(`Qual turno você estuda?\nM - Matunino\nV - Vespetino\nN - Noturno`).toUpperCase();

switch (turnoDoAluno) {
   case `M`:
      console.log(`Bom Dia!`);
      break;
   case `V`:
      console.log(`Boa Tarde!`);
      break;
   case `N`:
      console.log(`Boa Noite!`);
      break;
   default:
      console.log(`Turno inválido`);
};

// 4. Resposta:
let generoDoFilme = prompt(`Qual é o gênero do filme?`).toLowerCase();
let valorDoIngresso = +prompt(`Qual é o valor do ingresso?`);

if (generoDoFilme === `fantasia` && valorDoIngresso < 15) {
   console.log(`Bom filme!`);
} else {
   console.log(`Escolha outro filme :(`);
};

// Desafios

// 1. Resposta:

// Variáveis declaradas no exercício anterior (linhas 74-75)
generoDoFilme = prompt(`Qual é o gênero do filme?`).toLowerCase();
valorDoIngresso = +prompt(`Qual é o valor do ingresso?`);

if (generoDoFilme === `fantasia` && valorDoIngresso < 15) {
   const lanchinho = prompt(`Qual lanchinho você vai comprar?`);
   console.log(`Bom filme!\nAproveite o seu ${lanchinho}`);
} else {
   console.log(`Escolha outro filme :(`);
};

// 2. Resposta:
const bancoDeDados = {
   in: {cambio: 4.1, moeda: `US$`, etiqueta: `IN - Internacional`},
   do: {cambio: 1, moeda: `R$`, etiqueta: `DO - Doméstico`},
   fi: {precos: [1980, 1320, 880, 330], etiqueta: `FI - Final`},
   sf: {precos: [1320, 880, 550, 220], etiqueta: `SF - Semifinal`},
   dt: {precos: [660, 440, 330, 170], etiqueta: `DT - Disputa do 3º lugar`}
};

let dadosDaCompra = {};

dadosDaCompra.nome = prompt(`Informe o seu nome:`);

dadosDaCompra.tipo = prompt(`Escolha o tipo de jogo:
${bancoDeDados.in.etiqueta}
${bancoDeDados.do.etiqueta}`).toLowerCase();

dadosDaCompra.etapa = prompt(`Escolha a etapa do jogo:
${bancoDeDados.fi.etiqueta}
${bancoDeDados.sf.etiqueta}
${bancoDeDados.dt.etiqueta}`).toLowerCase();

dadosDaCompra.categoria = +prompt(`Escolha a categoria:
1 - ${bancoDeDados[dadosDaCompra.tipo].moeda} ${(bancoDeDados[dadosDaCompra.etapa].precos[0]/bancoDeDados[dadosDaCompra.tipo].cambio).toFixed(2).replace('.',',')}
2 - ${bancoDeDados[dadosDaCompra.tipo].moeda} ${(bancoDeDados[dadosDaCompra.etapa].precos[1]/bancoDeDados[dadosDaCompra.tipo].cambio).toFixed(2).replace('.',',')}
3 - ${bancoDeDados[dadosDaCompra.tipo].moeda} ${(bancoDeDados[dadosDaCompra.etapa].precos[2]/bancoDeDados[dadosDaCompra.tipo].cambio).toFixed(2).replace('.',',')}
4 - ${bancoDeDados[dadosDaCompra.tipo].moeda} ${(bancoDeDados[dadosDaCompra.etapa].precos[3]/bancoDeDados[dadosDaCompra.tipo].cambio).toFixed(2).replace('.',',')}`);

dadosDaCompra.quantidade = +prompt(`Informe a quantidade de ingressos:`);

dadosDaCompra.valorUnitario = bancoDeDados[dadosDaCompra.etapa].precos[dadosDaCompra.categoria - 1]/bancoDeDados[dadosDaCompra.tipo].cambio;
dadosDaCompra.valorTotal = dadosDaCompra.valorUnitario*dadosDaCompra.quantidade;

console.log(`--- Dados da compra ---
Nome do cliente: ${dadosDaCompra.nome}
Tipo do jogo: ${bancoDeDados[dadosDaCompra.tipo].etiqueta.substring(5)}
Etapa do jogo: ${bancoDeDados[dadosDaCompra.etapa].etiqueta.substring(5)}
Categoria: ${dadosDaCompra.categoria}
Quantidade de ingressos: ${dadosDaCompra.quantidade} ingressos
--- Valores ---
Valor do ingresso: ${bancoDeDados[dadosDaCompra.tipo].moeda} ${dadosDaCompra.valorUnitario.toFixed(2).replace('.',',')}
Valor total: ${bancoDeDados[dadosDaCompra.tipo].moeda} ${dadosDaCompra.valorTotal.toFixed(2).replace('.',',')}`);
