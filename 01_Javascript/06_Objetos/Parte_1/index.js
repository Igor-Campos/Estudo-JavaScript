/*
    Objetos
    Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

    Propriedades e métodos consistem em nome (chave) e valor.
*/
let pessoa = {
    nome : 'Igor',
    idade: 27,
    profissao: 'Estagiário',
    possuiFaculdade: true,
}

pessoa.nome; // 'Igor'
pessoa.possuiFaculdade; // true

/*
    Métodos
    É uma propriedade que possui uma função no local do seu valor.
 */
let quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

/*
    Organizar o Código
    Objetos servem para organizar o código em pequenas partes reutilizáveis.

    Math é um objeto nativo de Javascript. Já percebeu que console é um objeto e log() um método?
*/
Math.PI; // 3.14
Math.random(); //Número aleatório

let pi = Math.PI;
console.log(pi); // 3.14