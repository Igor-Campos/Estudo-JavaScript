/*
   Boolean
   Existem dois valores booleanos false ou true.

   let possuiGraduacao = true;
   let possuiDoutorado = false;
-------------------------------------------------------------------------------------------------------------------------------------------

   Condicionais If e Else
   Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

   let possuiGraduacao = true;

   if(possuiGraduacao) {
       console.log('Possui graduação');
   } else {
       console.log('Não possui graduação');
   }

   retorna Possui Graduação e não executao else
   O valor dentro dos parênteses sempre será avaliado em false ou true.
-------------------------------------------------------------------------------------------------------------------------------------------

   Condicionais Else If
   Se o if não for verdadeiro, ele testa o else if

   let possuiGraduacao = true;
   let possuiDoutorado = false;

   if(possuiDoutorado) {
       console.log('Possui graduação e doutado');
   } else if(possuiGraduacao) {
       console.log('Possui graduação, mas não possui doutorado');
   } else {
       console.log('Não possui graduação');
   }

   retorna Possui Graduação, mas não possui doutorado
-------------------------------------------------------------------------------------------------------------------------------------------

   Truthy e Falsy
   Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

   -Falsy-
   if(false)
   if(0) ou -0
   if(NaN)
   if(null)
   if(undefined)
   if('') ou "" ou ``

   Todos o resto é truthy
   -Truty-
   if(true)
   if(1)
   if(' ')
   if('Igor')
   if(-5)
   if({})
-------------------------------------------------------------------------------------------------------------------------------------------

   Operador Lógico de Negação !
   O operador !, nega uma operação booleana. Ou seja, !true é igual a false.

   -Truthy-
   if(!true) -> false
   if(!1) -> false
   if(!'') -> true
   if(!undefined) -> true
   if(!!' ') -> true
   if(!!'') -> false

   Você pode utilizar o !! para verificar se uma expressão é Truthy ou False
-------------------------------------------------------------------------------------------------------------------------------------------

   Operadores de comparação
   Vão sempre retornar um valor booleano

   10 > 5; -> true
   5 > 10; -> false
   20 < 10; -> false
   10 <= 10; -> true
   10 >= 11 -> false

-------------------------------------------------------------------------------------------------------------------------------------------

   Operadores de comparação
   O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
   == só para tipo, === considera tipo e o valor.

   10 == '10'; -> true
   10 == 10; -> true
   10 === '10'; -> false
   10 === 10; -> true
   10 != 15; -> true
   10 != '10'; -> false 
   10 !== '10'; -> true

-------------------------------------------------------------------------------------------------------------------------------------------   
   Operadores Lógicos &&
   && compara se uma expressão e a outra é verdadeira

   true && true;; -> true
   true && false; -> false
   false && true; -> false
   'Gato' && 'Cão'; -> Cão
   (5 - 5) && (5 + 5); -> 0
   'Gato' && false; -> false
   (5 >=5) && (3 < 6); -> true

   Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.

-------------------------------------------------------------------------------------------------------------------------------------------

   Operadores Lógicos ||
   || compara se uma expressão ou outra é verdadeira

   true || true; -> true
   true || false; -> true 
   false || true; -> true
   'Gato' || 'Cão'; -> 'Gato'
   (5 - 5) || (5 + 5); -> 10
   'Gato' || false; -> Gato
   (5 >= 5) || (3 < 6); -> true

   Retorna o primeiro valor true que encontrar

-------------------------------------------------------------------------------------------------------------------------------------------

   Switch

   Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a contianuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

   let corFavorita = 'Azul';

   switch(corFavorita) {
      case 'Azul':
         console.log('Olhe para o céu.');
         break;
      case 'Vermelho':
         console.log('Olhe para rosas.');
         break;
      case 'Amarelo':
         console.log('Olhe para o sol.');
         break;
   }
*/

let possuiGraduacao = false;
let possuiDoutorado = true;

if(possuiGraduacao) {
       console.log('É verdadeiro.');
} else if(possuiDoutorado) {
       console.log('Possui Doutorado.');
} else {
       console.log('Não possui nada.');
}

let nome = '10kg' / 10;

if(nome) {
       console.log(nome);
} else {
       console.log('Nome não existe.');
}

let x = 10;
console.log(x !== 11);


if((5 - 5) && (5 + 5)) {
   console.log('Verdadeiro'); 
} else {
   console.log('Falso');
}

let condicional = (5 - 10) && (5 + 5);
if((5 - 10) && (5 + 5)) {
   console.log('Verdadeiro'); 
} else {
   console.log('Falso');
}

let condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

let corFavorita = 'Azul';

switch(corFavorita) {
   case 'Azul':
      console.log('Olhe para o céu');
      break;
   case 'Amarelo':
      console.log('Olhe para o sol.');
   case 'Verde':
      console.log('Olhe para a floresta.');
   default:
      console.log('Feche os olhos.')
}