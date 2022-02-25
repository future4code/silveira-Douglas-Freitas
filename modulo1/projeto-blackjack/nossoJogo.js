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

let novoJogo;

console.log(`Boas vindas ao jogo de Blackjack!`);

do {
   if (confirm(`Quer iniciar uma nova rodada?`)) {
      let cartasDoUsuario = [comprarCarta(), comprarCarta()];
      let cartasDoComputador = [comprarCarta(), comprarCarta()];
      let pontosDoUsuario = cartasDoUsuario.map(item => item.valor).reduce((soma, numero) => soma += numero);
      let pontosDoComputador = cartasDoComputador.map(item => item.valor).reduce((soma, numero) => soma += numero);

      console.log(`Usuário - cartas: [${cartasDoUsuario[0].texto}] [${cartasDoUsuario[1].texto}] - pontuação ${pontosDoUsuario}`);
      console.log(`Computador - cartas: [${cartasDoComputador[0].texto}] [${cartasDoComputador[1].texto}] - pontuação ${pontosDoComputador}`);

      if (pontosDoUsuario > pontosDoComputador) {
         console.log(`O usuário ganhou!`);
      } else if (pontosDoUsuario < pontosDoComputador) {
         console.log(`O computador ganhou!`);
      } else {
         console.log(`Empate!`)
      };
     
      novoJogo = true;
      continue;
   } else {
      console.log(`O jogo acabou!`);

      novoJogo = false;
      break;
   };
} while (novoJogo == true);
