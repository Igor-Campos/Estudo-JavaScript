/*
    Tudo é Objeto
    Strings, Números, Boolean, Objetos e mais, possuempropriedades e métodos. Por isso são objetos.

    Uma string herda propriedades e métodos do construtor String()
*/
let nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // André

/*
    Números
*/
let altura = 1.8;

altura.toString(); // '1.8' vai transformar em uma string
altura.toFixed(); // '2' ele vai tentar arredondar

/*
    Elementos do DOM

    Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
*/
let btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
    console.log('Clicou');
});

/*
    OBJETOS revolucionaram a programação
    Web API´s são métodos e propriedades que permitem a interação JavaScript e Browser.
*/