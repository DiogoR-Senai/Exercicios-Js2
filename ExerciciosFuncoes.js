const prompt = require("prompt-sync")();

/*
Exercicio 1 

Crie uma função chamada saudação que exiba no console:
Olá , Seja bem vindo!
*/

// function Saudacao() {
//     return 'Olá , Seja bem vindo!';
// }

// const saudacao =  Saudacao();
// console.log(saudacao);

/*
Exercicio 2 

Crie uma função chamada mostrarNome que receba um nome como parâmetro:
Olá, [Nome]
*/

// function SaudacaoNome(nome){
//     const Nome = prompt("Digite o seu nome: ");
//     return 'Olá, ' + Nome;
// }

// const saudacaoNome =  SaudacaoNome();
// console.log(saudacaoNome);

/*
Exercicio 3 

Crie uma função soma que receba dois números e retorne a soma.
*/

// let a = parseFloat(prompt("Digite um Numero: "));
// let b = parseFloat(prompt("Digite outro Numero: "));

// function Soma(a, b) {
//   return a + b;
// }

// const soma = Soma(a ,b);
// console.log(soma);


/*
Exercicio 4

Crie uma função dobro que receba um número e retorne o dobro.
*/

// let numero1 = parseFloat(prompt("Digite um Numero: "));

// function Dobro(numero1) {
//     return numero1 * 2;
// }

// const dobrar = Dobro(numero1);
// console.log(dobrar);

/*
Exercicio 5

// Crie uma função parOuImpar que receba um número e informe se ele é par ou ímpar.
*/

// let numero2 = parseFloat(prompt("Digite um Numero: "));

// function ParOuImpar(numero2) {
//     if( numero2 % 2 === 0){
//         return 'É Par';
//     }
//     else{
//         return 'É Impar'
//     }
// }

// const parOuImpar = ParOuImpar(numero2);
// console.log(parOuImpar);

/*
Exercicio 6

// Crie uma função maiorNumero que receba dois números e retorne o maior.
*/

// let n1 = parseFloat(prompt("Digite um Numero: "));
// let n2 = parseFloat(prompt("Digite outro Numero: "));

// function MaiorNumero(n1, n2) {
//     if(n1 > n2){
//         return n1;
//     }
//     else{
//         return n2;
//     }
// }

// const maiorNumero = MaiorNumero(n1, n2);
// console.log("O maior numero é: " + maiorNumero);

/*
Exercicio 7

// Crie uma função media que receba 3 notas e retorne a média.
*/

// let nota1 = parseFloat(prompt("Digite a Primeria Nota: "));
// let nota2 = parseFloat(prompt("Digite a Segunda Nota: "));
// let nota3 = parseFloat(prompt("Digite a Terceira Nota: "));

// function Media(nota1, nota2, nota3){
//     return (nota1 + nota2 + nota3) / 3;
// }

// const media = Media(nota1, nota2, nota3);
// console.log("A media é " + media);

/*
Exercicio 8

// Crie uma função converterCelsius que receba uma temperatura em Celsius e retorne em Fahrenheit.
*/

// let temperaturaC = parseFloat(prompt("Qual a Temperatura em Celcius; "));

// function ConverterCelsius(temperaturaC) {
//     return ((temperaturaC * 1.8 ) + 32);
// }

// const converterCelsius = ConverterCelsius(temperaturaC);
// console.log(converterCelsius);

/*
Exercicio 9

// Crie uma função contador que receba um número e imprima de 1 até ele.
*/

// let number1 = parseFloat(prompt("Digite um Numero: "));

// function Contador(number1) {
//     for (let i=0; i <= number1 ; i++){
//         console.log(i);
//     }
// }

// const contador = Contador(number1);
// console.log(Contador);

/*
Exercicio 10

// Crie uma função tabuada que receba um número e mostre sua tabuada de 1 a 10.
*/

// let number2 = parseFloat(prompt("Digite um Numero: "));

// function Tabuada(number2) {
//     for(let i = 1 ; i <= 10 ; i++){
//         console.log(number2 + " X " + i + " = " + (number2*i));
//     }
// }

// const tabuada = Tabuada(number2);
// console.log(tabuada);