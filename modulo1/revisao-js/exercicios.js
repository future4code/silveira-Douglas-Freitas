// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
};

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   let novoArray = new Array;
   for (let item of array) {
      novoArray.unshift(item);
   };
   return novoArray;
};

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   let continuar = true;
   while (continuar) {
      continuar = false;
      for (let i = 1; i < array.length; i++) {
         if (array[i-1] > array[i]) {
            [array[i-1], array[i]] = [array[i], array[i-1]];
            continuar = true;
         };
      };
   };
   return array;
};

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let novoArray = new Array;
   for (item of array) {
      if (item % 2 == 0) {
         novoArray.push(item);
      };
   };
   return novoArray;
};

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   return retornaNumerosPares(array).map(item => item * item);
};

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maximo = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
         maximo = array[i];
      };
   };
   return maximo;
};

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let objeto = new Object;
   objeto['maiorNumero'] = Math.max(num1, num2);
   objeto['maiorDivisivelPorMenor'] = Math.max(num1, num2) % Math.min(num1, num2) == 0;
   objeto['diferenca'] = Math.abs(num1-num2);
   return objeto;
};

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array = new Array; 
   for (let i = 0; i < n; i++) {
      array.push(2*i);
   };
   return array;
};

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
      return 'Equilátero';
   } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
      return 'Escaleno';
   } else {
      return 'Isósceles';
   };
};

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   let novoArray = array.sort((a, b) => a - b);
   return [novoArray[novoArray.length-2], novoArray[1]];
};

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let texto = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por`;
   for (item of filme.atores) {
      texto += ` ${item},`;
   };
   return texto.slice(0,-1) + '.';
};

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
      ...pessoa,
      nome: 'ANÔNIMO'
   };
   return pessoaAnonima;
};

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(item => item.altura >= 1.5 && item.idade > 14 && item.idade < 60);
};

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   return pessoas.filter(item => !(item.altura >= 1.5 && item.idade > 14 && item.idade < 60));
};

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}