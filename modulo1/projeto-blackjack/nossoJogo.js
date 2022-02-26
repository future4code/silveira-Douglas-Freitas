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
let cartasDoUsuario, cartasDoComputador, pontosDoUsuario, pontosDoComputador, novoJogo;

// Mensagem de saudação no console
console.log(`%cBoas vindas ao jogo de Blackjack!`, fonte);

// Laço para repetir o jogo
do {
    // Início do jogo
    if (confirm(`Quer iniciar uma nova rodada?`)) {
        // Início da rodada
        // Distribuição (pseudo)aleatória de cartas
        cartasDoUsuario = [];
        cartasDoComputador = [];
        for (let i = 0; i < 2; i++) {
            cartasDoUsuario.push(fixComprarCarta(cartasDoUsuario.concat(cartasDoComputador)));
            cartasDoComputador.push(fixComprarCarta(cartasDoUsuario.concat(cartasDoComputador)));
        };

        pontosDoUsuario = cartasDoUsuario[0].valor + cartasDoUsuario[1].valor; 
        pontosDoComputador = cartasDoComputador[0].valor + cartasDoComputador[1].valor;
        
        // Mensagem no console com as cartas e as pontuações
        console.log(`%cUsuário -> Cartas: [${cartasDoUsuario[0].texto}] [${cartasDoUsuario[1].texto}] | Pontuação: ${pontosDoUsuario}`, fonte);
        console.log(`%cComputador -> Cartas: [${cartasDoComputador[0].texto}] [${cartasDoComputador[1].texto}] | Pontuação: ${pontosDoComputador}`, fonte);
        
        // Mensagem com o resultado no fim da cada rodada
        if (pontosDoUsuario > pontosDoComputador) {
            console.log(`%cO usuário ganhou!`, fonte);
        } else if (pontosDoUsuario < pontosDoComputador) {
            console.log(`%cO computador ganhou!`, fonte);
        } else {
            console.log(`%cEmpate!`, fonte);
        };

        novoJogo = true;
    } else {
        // Fim do jogo
        console.log(`%cO jogo acabou!`, fonte);
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

// ==================================================