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
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}