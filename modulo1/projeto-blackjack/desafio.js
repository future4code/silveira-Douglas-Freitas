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

// Ajuste do index.html
document.getElementById('botaoSim').disabled = false;
document.getElementById('botaoNao').disabled = false;
document.getElementById('mensagemResultado').innerText = '👇👀';
document.getElementById('mensagemMesa').innerHTML = ''; 
document.getElementById('mensagemUsuario').innerText = 'Quer começar uma nova rodada?';

// Declara variáveis
let cartasDoUsuario, cartasDoComputador, maisCartas, novoJogo;

// Função para o botão 'Sim'
function cliqueSim() {
   switch (document.getElementById('mensagemUsuario').innerText) {
      case 'Quer começar uma nova rodada?':
         document.getElementById('mensagemResultado').innerText = '👇👀';

         // Geração (pseudo)aleatória das cartas
         do {
            cartasDoUsuario = [];
            cartasDoComputador = [];
            for (let i = 0; i < 2; i++) {
               cartasDoUsuario.push(fixGerarCarta(cartasDoUsuario.concat(cartasDoComputador)));
               cartasDoComputador.push(fixGerarCarta(cartasDoUsuario.concat(cartasDoComputador)));
            };
         } while (somarCartas(cartasDoUsuario) == 22 || somarCartas(cartasDoComputador) == 22);
         
         // Mensagem com exibindo as cartas
         document.getElementById('mensagemMesa').innerHTML = `As cartas da banca são...<br><span style="color: ${cartasDoComputador[0].cor}; font-size: 40pt">${cartasDoComputador[0].texto}</span><span style="color: gray; font-size: 40pt">🂠</span><br><br>As suas cartas são...<br>${exibirCartas(cartasDoUsuario)}`;
         document.getElementById('mensagemUsuario').innerText = 'Quer comprar mais uma carta?';
         break;
      case 'Quer comprar mais uma carta?':
         // Compras de mais cartas pelo usuário
         cartasDoUsuario.push(fixGerarCarta(cartasDoUsuario.concat(cartasDoComputador)));
            
         // Verificação caso ultrapasse 21 pontos
         if (somarCartas(cartasDoUsuario) > 21) {
            document.getElementById('mensagemMesa').innerHTML = `A banca fez ${somarCartas(cartasDoComputador)} pontos.<br>${exibirCartas(cartasDoComputador)}<br><br>Você fez ${somarCartas(cartasDoUsuario)} pontos.<br>${exibirCartas(cartasDoUsuario)}`;

            document.getElementById('mensagemResultado').innerText = finalDaRodada([cartasDoUsuario, cartasDoComputador], somarCartas);
            document.getElementById('mensagemUsuario').innerText = 'Quer começar uma nova rodada?';
         } else {
            // Atualiza a mensagem que exibe as cartas
            document.getElementById('mensagemMesa').innerHTML = `As cartas da banca são...<br><span style="color: ${cartasDoComputador[0].cor}; font-size: 40pt">${cartasDoComputador[0].texto}</span><span style="color: gray; font-size: 40pt">🂠</span><br><br>As suas cartas são...<br>${exibirCartas(cartasDoUsuario)}`;
         };
         break; 
   };
};

// Função para o botão 'Não'
function cliqueNao() {
   switch (document.getElementById('mensagemUsuario').innerText) {
      case 'Quer começar uma nova rodada?':
         // Mensagem de confirmação para sair do jogo
         if (confirm(`Olá, jogador(a)!\n\nPor que não dar outra chance à sorte? Clique em Cancelar e jogue uma nova rodada contra o computador. Porém, se você não quer mais jogar, clique em OK para fechar a página.\n\nObrigado por sua visita! ;)`)) {
            window.close();
         };

         // Reseta elementos do index.html
         document.getElementById('mensagemResultado').innerHTML = '👇👀';
         document.getElementById('mensagemMesa').innerHTML = ''; 
         break;
      case 'Quer comprar mais uma carta?':
         // Compras de mais cartas pelo computador
         while (somarCartas(cartasDoComputador) < somarCartas(cartasDoUsuario) && somarCartas(cartasDoUsuario) <= 21) {
            cartasDoComputador.push(fixGerarCarta(cartasDoUsuario.concat(cartasDoComputador)));
         };

         // Atualiza mensagens de exibição das cartas com o resultado
         document.getElementById('mensagemMesa').innerHTML = `A banca fez ${somarCartas(cartasDoComputador)} pontos.<br>${exibirCartas(cartasDoComputador)}<br><br>Você fez ${somarCartas(cartasDoUsuario)} pontos.<br>${exibirCartas(cartasDoUsuario)}`;
         document.getElementById('mensagemResultado').innerText = finalDaRodada([cartasDoUsuario, cartasDoComputador], somarCartas);
         document.getElementById('mensagemUsuario').innerText = 'Quer começar uma nova rodada?';
         break; 
   };
};

// ==================================================

// Função que corrige a função 'gerarrCarta()' do arquivo 'naoMexer.js', uma vez que a função 'gerarCarta()' permite o sorteio de cartas repetidas ─ mesmo valor e naipe
function fixGerarCarta(cartas) {
   let carta = gerarCarta();
   if (cartas.map(item => item.texto).includes(carta.texto) && cartas.length != 0) {
      carta = fixGerarCarta(cartas);
   };
   return carta;
};

// Função para exibir o naipe das cartas
function exibirCartas(cartas) {
   let texto = ``;
   for (let i = 0; i < cartas.length; i++) {
      texto += `<span style="color: ${cartas[i].cor}; font-size: 40pt">${cartas[i].texto}</span>`;
   };
   return texto;
};

// Função para somar o valor das cartas
function somarCartas(cartas) {
   return cartas.reduce((soma, numero) => soma += numero.valor, 0);
};

// Função para exibir mensagem final da rodada
function finalDaRodada(cartas, somar) {
   let texto = '';

   if (somar(cartas[0]) > somar(cartas[1]) && somar(cartas[0]) <= 21 || somar(cartas[1]) > 21) {
      return texto += `Feitooo!!! Parabéns, você ganhou!!! 😎🏆`;
   } else if (somar(cartas[0]) < somar(cartas[1]) && somar(cartas[1]) <= 21 || somar(cartas[0]) > 21) {
      return texto += `Ooops! A banca ganhou. 🤖🏆`;
   } else {
      return texto += `Viiish! Empate. 😐`;
   };
};

// Função que gera cada carta como um caractere especial
function gerarCarta() {
   const naipe = Math.floor(Math.random() * 4);
   const numero = Math.floor(Math.random() * 13); 
   const baralho = [
      [`🃁`, `🃂`, `🃃`, `🃄`, `🃅`, `🃆`, `🃇`, `🃈`, `🃉`, `🃊`, `🃋`, `🃍`, `🃎`],
      [`🂱`, `🂲`, `🂳`, `🂴`, `🂵`, `🂶`, `🂷`, `🂸`, `🂹`, `🂺`, `🂻`, `🂽`, `🂾`],
      [`🃑`, `🃒`, `🃓`, `🃔`, `🃕`, `🃖`, `🃗`, `🃘`, `🃙`, `🃚`, `🃛`, `🃝`, `🃞`],
      [`🂡`, `🂢`, `🂣`, `🂤`, `🂥`, `🂦`, `🂧`, `🂨`, `🂩`, `🂪`, `🂫`, `🂭`, `🂮`]
   ];
   let carta = {
      texto: baralho[naipe][numero],
      valor: undefined,
      cor: undefined
   };

   if (numero == 0) {
      carta.valor = 11;
   } else if (numero >= 9) {
      carta.valor = 10;
   } else {
      carta.valor = numero + 1;
   };
   
   if (naipe < 2) {
      carta.cor = `red`;
   } else {
      carta.cor = `black`;
   };
   
   return carta;
};

// ==================================================