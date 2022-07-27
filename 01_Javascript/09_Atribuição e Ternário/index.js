/*
    Operadores de Atribuição
    Podem funcionar como formas abreviadas
*/
let x = 5;
let y = 10;
x += y; // x = x + x (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * x (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

/*
    Operador Ternário
    Abreviação de condicionais com if e else
*/
let idade = 19;
let diabetes = true;
let podeBeber = (idade >= 18 && diabetes) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); //Pode beber
// condição ? true : false

/*
    If Abreviado
    Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
*/
let possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade.');
else console.log('Não possui faculdade.');

// ou
if(possuiFaculdade)
  console.log('Possui faculdade.');
else
  console.log('Não possui faculdade');