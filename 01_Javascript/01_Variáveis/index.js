/*

Variáveis
        Responsáveis por guardar dados na memória.
        Inicia com a palavra var, let ou const.
-------------------------------------------------------------------------------------------------------------------------------------------
        Evitam repetições
        DRY (Don´t repeat yourself)
-------------------------------------------------------------------------------------------------------------------------------------------
        Sintaxe
        Palavra chave var seguida do nome, sinal de igual e o valor.
-------------------------------------------------------------------------------------------------------------------------------------------
        Vírgula
        Utilize a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
-------------------------------------------------------------------------------------------------------------------------------------------
        Nome
        * Os nomes podem iniciar com $, _, ou letras.
        Podem conter números mas não iniciar com eles.

        * Case sensitive
        nome é diferente de Nome

        * Não utilizar palavras reservadas


        * Camel case
        É comum nomearmos assim: abrirModal 
-------------------------------------------------------------------------------------------------------------------------------------------
        Hoisting
        São movidas para cima do código, porém o valor atribuído não é movido
-------------------------------------------------------------------------------------------------------------------------------------------
        Mudar o valor atribuído
        É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const
-------------------------------------------------------------------------------------------------------------------------------------------

*/

let nome = "André";
let idade = 28;
let possuiFaculdade = true;

console.log (nome, idade, possuiFaculdade, nome);

let preco = 25;
let totalComprado = 5;
let totalPreco = totalComprado * preco;

console.log(totalPreco);

let sobreNome = "Igor",
    cidade = "Vitória";

console.log(sobreNome, cidade);

let semDefinir;

console.log(semDefinir); //Undefined

console.log(nome_2);
let nome_2 = "Lucas"; //Cannot access 'nome_2' before initialization

let profissao = "Programer";
console.log(profissao);

var idade_2 = 28;
idade_2 = 29;

let preco_2 = 50;
preco_2 = 25;

const possuiCarro = true; 
possuiCarro = false;
//Retorna um erro.