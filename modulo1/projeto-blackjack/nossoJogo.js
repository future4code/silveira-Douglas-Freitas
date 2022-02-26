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

const fonte = 'font-size: 15px';
let novoJogo;

console.log(`%cBoas vindas ao jogo de Blackjack!`, fonte);

do {
    if (confirm(`Quer iniciar uma nova rodada?`)) {
        const cartasDoUsuario = [comprarCarta(), comprarCarta()];
        const cartasDoComputador = [comprarCarta(), comprarCarta()];
        const pontosDoUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor; 
        const pontosDoComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor;
        
        console.log(`%cUsuário -> Cartas: [${cartasDoUsuario[0].texto}] [${cartasDoUsuario[1].texto}] | Pontuação: ${pontosDoUsuario}`, fonte);
        console.log(`%cComputador -> Cartas: [${cartasDoComputador[0].texto}] [${cartasDoComputador[1].texto}] | Pontuação: ${pontosDoComputador}`, fonte);
        
        if (pontosDoUsuario > pontosDoComputador) {
            console.log(`%cO usuário ganhou!`, fonte);
        } else if (pontosDoComputador> pontosDoUsuario) {
            console.log(`%cO computador ganhou!`, fonte);
        } else {
            console.log(`%cEmpate!`, fonte);
        };

        novoJogo = true;
    } else {
        console.log(`%cO jogo acabou!`, fonte);
        novoJogo = false;
    };
} while (novoJogo == true);
