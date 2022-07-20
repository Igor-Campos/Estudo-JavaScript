/*
    Criar um Objeto
    Um objeto é criado utilizando as chaves {}
*/
let carro = {};
let pessoa = {};

console.log(typeof carro); // 'object'

/*
    Dot Notation Get
    Acesse propriedades de um objeto utilizando o ponto .
*/
let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#8844EE',
}

let bg = menu.backgroundColor; // '#8844EE'

/*
    Dot Notation Set
    Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
*/

menu.backgroundColor = '#000000';
console.log(menu.backgroundColor); // '#000000'

/*
    Adicionar Propriedades e Métodos
    Basta adicionar um novo nome e definir o valor.
*/

menu.height = 50; // se existir vai substituir da anterior
menu.position = 'fixed';

/*
    Palavra-chave this
    this irá fazer uma referência ao próprio objeto.
*/

let altura = 120;
let detalhe = {
    largura: 800,
    altura: 50,
    metadeAltura() {
        return this.altura / 2;
    }
}

detalhe.metadeAltura(); // 25
// sem o this, seria 60
// this irá retornar o próprio objeto