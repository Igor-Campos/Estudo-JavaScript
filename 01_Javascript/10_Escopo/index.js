/*
  Escopo de Função
  Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
*/
function mostrarCarro() {
  let carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//Escopo evita o conflito entre nomes.

/*
  Escopo de Função (Pai)
  Variáveis
*/

let moto = 'Harley';

function mostrarMoto() {
  let frase = `Minha moto é uma ${moto}.`;
  console.log(frase);
}

mostrarMoto(); // Minha moto é uma Harley.
console.log(moto); // Harley