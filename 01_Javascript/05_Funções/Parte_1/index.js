/*
   Funções
   Bloco de código que pode se executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
-------------------------------------------------------------------------------------------------------------------------------------------
   Parâmetros e Argumentos
   Ao criar uma função, você pode definir parâmetros.
   Ao executar função, você pode passar argumentos.

   Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também.
-------------------------------------------------------------------------------------------------------------------------------------------
   Parênteses executa a função
   Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer.
-------------------------------------------------------------------------------------------------------------------------------------------
   Argumentos podem ser funções
   Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

   Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
-------------------------------------------------------------------------------------------------------------------------------------------
   
*/

function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4
console.log(areaQuadrado(10));


function pi() {
  return 3.14;
}
let total = 5 * pi();


//peso e altura são os parâmetros
function imc(peso, altura) {
   let imc = peso / (altura ** 2);
   return imc;
}
imc(80, 1.80) //80 e 1.80 são os argumentos
console.log(imc(60, 1.70));


function corFavorita(cor) {
   if(cor === 'azul') {
      return 'Você gosta do céu.';
   } else if(cor === 'verde') {
      return 'Você gosta da floresta.';
   } else {
      return 'Você não gosta de nada.';
   }
}
corFavorita(); //Retorna 'Você não gosta de nada'


addEventListener('click', function() {
   console.log('Clicou');
});
//A função possui dois argumentos
//Primeiro é a string 'click'
//Segundo é uma função anônima


