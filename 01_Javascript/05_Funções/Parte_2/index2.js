/*
    Pode ou não retornar um valor
    Quando não definimos o return, ele irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
------------------------------------------------------------------------------------------------------------------------------------------
    Valores retornados
    Uma função pode retornar qualquer tipo de dado e até outras funções.

    Retornar diferentes tipos de dados na mesma função não é uma boa prática.
------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
    Escopo
    Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
*/
function faltaVisitar(paisesVisitados) {
    let totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}

/*
    Escopo Léxico
    Funções conseguem acessar variáveis que foram criadasno contexto pai
*/
let profissao = 'Designer';

function dados() {
    let nome = 'Igor',
        idade = 27;
    function outrosDados() {
        let endereco = 'Espírito Santo',
            idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    outrosDados();
}

dados(); //Retorna 'Igor, 29, Espírito Santo, Designer'
outrosDados(); //Retorna um erro.

/*
    Hoisting
    Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória.
*/
imc(80, 1.80); //imc aparece no console

function imc(peso, altura) {
    let imc = peso / (altura ** 2);
    console.log(imc);
}