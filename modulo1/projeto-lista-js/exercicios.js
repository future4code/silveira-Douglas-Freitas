// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;  
};

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  console.log(prompt('Digite uma mensagem:'));
};

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = +prompt('Digite a altura do retângulo:');
  const largura = +prompt('Digite a largura do retângulo:');
  console.log(altura * largura);
};

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +prompt('Informe o ano atual:');
  const anoNascimento = +prompt('Informe o ano do seu nascimento:');
  console.log(anoAtual - anoNascimento);
};

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura ** 2);
};

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Qual é o seu nome?');
  const idade = prompt('Qual é a sua idade?');
  const email = prompt('Qual é o seu email?');
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
};

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = [];
  cores[0] = prompt('Qual sua 1ª cor favorita?');
  cores[1] = prompt('Qual sua 2ª cor favorita?');
  cores[2] = prompt('Qual sua 3ª cor favorita?');
  console.log(cores);
};

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
};

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
};

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length;
};

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array.shift();
};

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop();
};

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array.shift();
  let ultimo = array.pop();
  array.unshift(ultimo);
  array.push(primeiro);
  return array;
};

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.toLowerCase() == string2.toLowerCase());
};

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = +prompt('Informe o ano atual:');
  const anoNascimento = +prompt('Informe o ano do seu nascimento:');
  const anoEmissao = +prompt('Informe o ano de emissão da CNH:');
  const idade = anoAtual - anoNascimento;
  const validade = anoAtual - anoEmissao;
  console.log(idade <= 20 && validade >= 5 || idade > 20 && idade <= 50 && validade >= 10 || idade >= 50 && validade >= 15);
};

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0);
};

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt('Você tem mais que 18 anos?');
  const formacao = prompt('Você possui ensino médio completo?');
  const dedicacao = prompt('Você possui disponibilidade exclusiva durante os horários do curso?');
  console.log(idade == 'sim' && formacao == 'sim' && dedicacao == 'sim');
};