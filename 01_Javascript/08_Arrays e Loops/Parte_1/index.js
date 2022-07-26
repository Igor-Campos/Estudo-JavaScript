/*
    Array
    É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

    Acesse um elemento da array utilizando [n];
*/
let videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames[0]; // 'Switch'
videoGames[2]; // 'XBOX'

// -Métodos e Propriedades de uma Aray- //

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
//Existem mais

/*
    For Loop
    Fazem algo repetidamente até que uma condição seja atingida.

    O for loop possui 3 partes, início, condição e incremento
*/
for(let numero = 0; numero < 10; numero++) {
    console.log(`Desse jeito é do for: ${numero}.`);
}

/*
    While Loop
*/
let i = 0;
while(i < 10) {
    console.log(`Desse jeito é do while: ${i}.`);
    i++;
}