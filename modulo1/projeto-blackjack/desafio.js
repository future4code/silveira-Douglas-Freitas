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

// Declaração das variáveis
const fonte = 'font-size: 15px';
let cartasDoUsuario, cartasDoComputador, maisCartas;

// Mensagem inicial no console
console.log(`%cBoas vindas ao jogo de Blackjack!`, fonte);

// Distribuição das cartas para o Usuário e o Computador
// Verifica repetição das cartas A (ás) e, caso true, distribuiu novas cartas 
do {
   cartasDoUsuario = [];
   cartasDoComputador = [];
   for (let i = 0; i < 2; i++) {
      cartasDoUsuario.push(comprarCarta());
      cartasDoComputador.push(comprarCarta());
   };
} while (cartasDoUsuario[0].valor + cartasDoUsuario[1].valor == 22 || cartasDoComputador[0].valor + cartasDoComputador[1].valor == 22);

// Compra de mais cartas pelo Usuário
// Verifica se a soma das cartas não é maior que 21
do {
   if (confirm(`Suas cartas são ${exibirCartas(cartasDoUsuario)}. A carta revelada do computador é [${cartasDoComputador[0].texto}].\nDeseja comprar mais uma carta?`)) {
      cartasDoUsuario.push(comprarCarta());
      maisCartas = true;
   } else {
      maisCartas = false;
   };
} while (maisCartas == true && somarCartas(cartasDoUsuario) <= 21);

// IF -> Vitória do Computador, exibe mensagem
// ELSE -> Compra de mais cartas pelo Computador 
if (somarCartas(cartasDoUsuario) > 21) {
   alert(`Suas cartas são ${exibirCartas(cartasDoUsuario)}. Sua pontuação é ${somarCartas(cartasDoUsuario)}.\nAs cartas do computador são ${exibirCartas(cartasDoComputador)}. A pontuação do computador é ${somarCartas(cartasDoComputador)}.\nO computador ganhou!`)
} else {
   


};

// ==================================================

function exibirCartas(cartas) {
   let texto = ``;
   for (let i = 0; i < cartas.length; i++) {
      texto += `[${cartas[i].texto}] `;
   };
   return texto.slice(0, -1);
};

function somarCartas(cartas) {
   return cartas.map(item => item.valor).reduce((soma, numero) => soma += numero);
};

