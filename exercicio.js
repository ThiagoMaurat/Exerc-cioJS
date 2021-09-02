//1.  Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em  km/l),  dado  que  são  conhecidos  a  distância  total  percorrida  e  o  volume  de combustível consumido para percorrê-la (medido em litros).
function calcularconsumo(distancia, volume) {
  return console.log(
    `Parte 1, exercício 1: O consumo médio é de ${distancia / volume}`
  );
}
calcularconsumo(12, 2);
//2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.
function calcular(homens, mulheres) {
  homens *= 20;
  mulheres *= 17;
  return console.log(
    `Parte 1, exercício 2: O total arrecadado é de ${homens + mulheres}`
  );
}
calcular(3, 4);

//3. Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. O programa deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, e exibir na tela.
function calcularnotas(primeiraprova, segundaprova) {
  return console.log(
    `Parte 1, exercício 3: O total arrecadado é de ${
      (primeiraprova + segundaprova) / 2
    }`
  );
}
calcularnotas(4, 4);

//4. Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 3 separados por virgulas. Ex: maçã, pera, banana

/* function array(elementos){
    let r = elementos.join(',')
    console.log(r)
}

let x = ['a', 'b', 'c']

array(x)
 */

//Parte2
//1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.
function Testinhu(numero) {
  if (numero > 10) {
    return console.log("Parte 2, exercício 1: Esse número é maior que 10");
  }
}
Testinhu(15);

//2. Escrever um algoritmo que leia dois valores inteiros e informe qual deles é o maior.
function lerdoisvaloreS(a, b) {
  if (a > b) {
    console.log(`Parte 2, exercício 2: O maior valor é ${a}`);
  } else {
    console.log(`Parte 2, exercício 2: O maior valor é ${b}`);
  }
}
lerdoisvaloreS(3, 4);

//3 Escrever um algoritmo que leia dois valores inteiros e informe se os números são iguais.
function doisiguais(valoor1, valoor2) {
  if (valoor1 == valoor2) {
    console.log(`Parte 2, exercício 3: Os valores são iguais`);
  }
}
doisiguais(2, 2);
// 4. Solicite que o usuário digite um número. Informe então se este número é par ou  ímpar.
function versepar(numero) {
  if (numero % 2 == 0) {
    console.log(`Parte 2, exercício 4: o número ${numero} é par`);
  }
}
versepar(6);

// 5. Crie um programa que receba um número inteiro e informa se este número é múltiplo de 10.
function recebernumero(numerointeiro) {
  if (numerointeiro % 10 == 0) {
    console.log(
      `Parte 2, exercício 5: o número ${numerointeiro} é divisível por 10`
    );
  }
}
recebernumero(20);

// Parte 3
// 1 - Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.

function numeroooo(numero) {
  if (numero >= 15 && numero <= 25) {
    console.log(
      `Parte 3, exercício 1: Erro, o número está entre 15 e 25 ou 45 e 50`
    );
  } else {
    numero >= 45 && numero >= 50;
  }
  {
    console.log(
      `Parte 3, exercício 1: Erro, o número está entre 15 e 25 ou 45 e 50`
    );
  }
}
numeroooo(46);

// 2 - Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 80, menor que 25 ou igual a 40.
function receivenumero(nuumero) {
  if (nuumero > 80) {
    console.log(
      `Parte 3, exercício 2: Este número é maior que 80, menor que 25 ou igual a 40`
    );
  } else if (nuumero < 25) {
    console.log(
      `Parte 3, exercício 2: Este número é maior que 80, menor que 25 ou igual a 40`
    );
  } else if ((nuumero = 40)) {
    console.log(
      `Parte 3, exercício 2: Este número é maior que 80, menor que 25 ou igual a 40`
    );
  }
}
receivenumero(81);

/* 
3 - Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as 
medidas dos lados de um triângulo.
Exemplo: 
let ladoA = 10
let ladoB = 10
let ladoC = 10
MENSAGEM: 
"Os números digitados formam um TRIÂNGULO! (TRUE)"
"Os números digitados NÃO FORMAM um triângulo! (FALSE)"
 */
function triângulo(teste1, teste2, teste3) {
  if (teste1 == teste2 && teste2 == teste3) {
    console.log(
      "Parte 3, exercício 3: Os números digitados formam um TRIÂNGULO! (TRUE)"
    );
  } else {
    console.log(
      "Parte 3, exercício 3: Os números digitados NÃO FORMAM um triângulo! (FALSE)"
    );
  }
}
triângulo(3, 3, 3);

/* 
// 4 - Crie um programa que pergunte o nome do usuário. 
Exiba uma mensagem diferenciada caso o nome digitado 
seja "William", "Rafael" ou "JavaScript".
 */
function verificarnomez(name) {
  if (name == "William" || name == "Rafael" || name == "JavaScript") {
    return console.log(`Parte 3, exercício 4: Olá ${name}, seja bem vindo!`);
  }
}

verificarnomez("JavaScript");

/*  Parte 4
7 - Solicite que o usuário digite uma palavra de 6 caracteres.
Se for digitada uma palavra inválida, peça novamente, até que ele digite uma palavra correta.  */
function usuárioDigite(palavrinha) {
  if (palavrinha.length < 6 || palavrinha.length > 6) {
    console.log(
      `Parte 4, exercício 7: Você digitou uma palavra errada, digite novamente`
    );
  }
}
usuárioDigite("wefwefwef");

// PARTE 5
const mimr = [];
function adicionajs(vetorzin) {
  vetorzin = [];
  for (let i = 0; i < 10; i++) {
    vetorzin.push("JS");
  }
  return vetorzin;
}
console.log(`Parte 5, Exercício1: Vetor representado: ${adicionajs(mimr)}`);
