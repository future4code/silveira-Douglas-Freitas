/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// ==================================================

// Declaração de variáveis
const fonte = 'font-size: 15px';
let cartasDoUsuario, cartasDoComputador, maisCartas, novoJogo;

// Mensagem de saudação no console
alert(`Boas vindas ao jogo de Blackjack!`);

// Laço para repetir o jogo
do {
   // Início do jogo
   if (confirm(`Quer iniciar uma nova rodada?`)) {
      // Início da nova rodada
      do {
         // Distribuição (pseudo)aleatória de cartas
         cartasDoUsuario = [];
         cartasDoComputador = [];
         for (let i = 0; i < 2; i++) {
            cartasDoUsuario.push(fixComprarCarta(cartasDoUsuario.concat(cartasDoComputador)));
            cartasDoComputador.push(fixComprarCarta(cartasDoUsuario.concat(cartasDoComputador)));
         };
      } while (somarCartas(cartasDoUsuario) == 22 || somarCartas(cartasDoComputador) == 22);

      do {
         // Compra de mais cartas pelo usuário
         if (confirm(`Suas cartas são ${exibirCartas(cartasDoUsuario)}. A carta revelada do computador é [${cartasDoComputador[0].texto}].\nDeseja comprar mais uma carta?`)) {
            cartasDoUsuario.push(fixComprarCarta(cartasDoUsuario.concat(cartasDoComputador)));
            maisCartas = true;
         } else {
            maisCartas = false;
         };
      } while (maisCartas == true && somarCartas(cartasDoUsuario) <= 21);

         // Compra de mais cartas pelo computador
         while (somarCartas(cartasDoComputador) < somarCartas(cartasDoUsuario) && somarCartas(cartasDoUsuario) <= 21) {
            cartasDoComputador.push(fixComprarCarta(cartasDoUsuario.concat(cartasDoComputador)));
         };

         // Mensagens com o resultado no fim de cada rodada
         alert(finalDaRodada([cartasDoUsuario, cartasDoComputador], exibirCartas, somarCartas));

      novoJogo = true;
   } else {
      // Fim do jogo
      alert(`O jogo acabou!`);
      novoJogo = false;
   };
} while (novoJogo == true);

// ==================================================

// Função que corrige a função 'comprarCarta()' do arquivo 'naoMexer.js', uma vez que a função 'comprarCarta()' permite o sorteio de cartas repetidas ─ mesmo valor e naipe
function fixComprarCarta(cartas) {
   let carta = comprarCarta();
   
   if (cartas.map(item => item.texto).includes(carta.texto) && cartas.length != 0) {
      carta = fixComprarCarta(cartas);
   };
   return carta;
};

// Função para exibir o naipe das cartas
function exibirCartas(cartas) {
   let texto = ``;
   for (let i = 0; i < cartas.length; i++) {
      texto += `[${cartas[i].texto}] `;
   };
   return texto.slice(0, -1);
};

// Função para somar o valor das cartas
function somarCartas(cartas) {
   return cartas.reduce((soma, numero) => soma += numero.valor, 0);
};

// Função para exibir mensagem final da rodada
function finalDaRodada(cartas, exibir, somar) {
   let texto = `Suas cartas são ${exibir(cartas[0])}. Sua pontuação é ${somar(cartas[0])}.\nAs cartas do computador são ${exibir(cartas[1])}. A pontuação do computador é ${somar(cartas[1])}.`

   if (somar(cartas[0]) > somar(cartas[1]) && somar(cartas[0]) <= 21 || somar(cartas[1]) > 21) {
      return texto += `\nO usuário ganhou!`;
   } else if (somar(cartas[0]) < somar(cartas[1]) && somar(cartas[1]) <= 21 || somar(cartas[0]) > 21) {
      return texto += `\nO computador ganhou!`;
   } else {
      return texto += `\nEmpate!`;
   };
};

// ==================================================