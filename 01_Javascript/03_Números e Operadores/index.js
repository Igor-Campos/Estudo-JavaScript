/*
       Números

       let idade = 28;
       let gols = 1000;
       let pi = 3.14; -> ponto para decimal
       let exp = 2e10; -> 20000000000
--------------------------------------------------------------------------------------------
       Operadores Aritméticos

       let soma = 100 + 50; -> 150
       let subtracao = 100 - 50; -> 50
       let multiplicacao = 100 * 2; -> 200
       let divisao = 100 / 2; -> 50
       let expoente = 2 ** 4; -> 16
       let modulo = 14 % 5; -> 4  resto da divisão
--------------------------------------------------------------------------------------------
       Operadores Aritméticos (String)

       let soma = '100' + 50; -> 10050
       let subtracao = '100' - 50; -> 50
       let multiplicacao = '100' * '2'; -> 200
       let divisao = 'Comprei 10' / 2; -> NaN (Not a Number)
--------------------------------------------------------------------------------------------
       A ordem importa
       Começa por multiplicação e divisão, depois por soma e subtração
       
       let total1 = 20 + 5 * 2; -> 30
       let total2 = (20 + 5) * 2; -> 50
       let total3 = 20 / 2 * 5; -> 50
       let total4 = 10 + 10 * 2 + 20 / 2; -> 40

       Parênteses para priorizar uma expressão
--------------------------------------------------------------------------------------------
       Operadores Aritméticos Unários
       
       let incremento = 5;
       console.log(incremento++); -> 5
       console.log(incremento); -> 6

       let incremento2 = 5;
       console.log(++incremento2); -> 6
       console.log(incremento2); -> 6

       Mesma coisa para o decremento
       --x
       
*/
let idade = 28;
let gols = 1000;
let pi = 3.14;
let exp = 2e10;

let soma = 100 + 50;
let subtracao = 100 - 50;
let multiplicacao = 100 * 2;
let divisao = 100 / 2;
let expoente = 2 ** 4;
let modulo = 14 % 5;

let soma2 = '100' + 50;
let subtracao2 = '100' - 50;
let multiplicacao2 = '100' * '2';
let divisao2 = 'Comprei 10' / 2;

let numero = 80;
let unidade = 'kg';
let peso = numero + unidade; // '80kg'
let pesoPorDois = peso / 2 // NaN 

let x = 5;
console.log(++x);
console.log(x);