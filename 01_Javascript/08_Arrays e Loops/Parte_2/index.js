/*
    Arrays e Loops
*/

let carros = ['Porsche', 'Mustang', 'FordKa', 'Camaro'];
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}

/*
    Break
    O loop irá parar caso encontre a palavra break; 
*/
let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];
for (let i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
        break;
    }
}

/*
    forEach
    forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
 */
let comidas = ['macarrão', 'feijoada', 'lagosta', 'amendoim'];
comidas.forEach(function(i, index) {
    console.log(i, index);
});
//O argumento item será atribuído dinamicamente
//Podemos passar os seguintes parâmetros item, index e array