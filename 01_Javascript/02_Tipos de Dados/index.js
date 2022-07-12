/*

7 tipos de dados
Todos são primitivos exceto os objetos.

let nome = "Igor"; -> String
let idade = 27; -> Number
let possuiFaculdade = true; -> Boolean
let time; -> Undefined
let comida = null; -> Null
let simbolo = Symbol() -> Symbol
let novoObjeto = {} -> Object

Primitivos são dados imutáveis.
---------------------------------------------------------------------------------------------------------------------------------------- 
Verificar tipo de Dado

let nome = "Igor";
console.log(typeof nome);
retorna string

*/

let idade = 27;
let simbolo = Symbol();
console.log(typeof simbolo);

let nome = 'Igor';
let sobrenome = 'Campos';
let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

let ano = '2018';
let mes = 8;
console.log(ano + mes);

let melhor = 'teste';
let frase1 = "Esse é o \"melhor\" jogo.";
console.log(frase1);

let gols = 1000;
let frase2 = `Romário fez ${gols * 2} gols.`;
console.log(frase2);